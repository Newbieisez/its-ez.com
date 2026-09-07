import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const SOURCE_FILES=['ai-systems.js','ai-systems-extended.js'];
const CONFIG_PATH=path.join(ROOT,'data','ai-rating-sources.json');
const OUTPUT_PATH=path.join(ROOT,'data','ai-systems-ratings.json');
const HISTORY_PATH=path.join(ROOT,'data','ai-systems-rating-history.json');
const USER_AGENT='EZEnablement-AISystems-Ratings/1.0 (+https://its-ez.com/ai-systems.html)';

const clamp=(value,min=0,max=10)=>Math.max(min,Math.min(max,Number(value)));
const round=value=>Math.round(Number(value)*10)/10;
const clean=value=>String(value??'').trim();
const nowIso=()=>new Date().toISOString();
const getPath=(obj,dotted)=>String(dotted||'').split('.').filter(Boolean).reduce((value,key)=>value?.[key],obj);

async function readJson(file,fallback){
  try{return JSON.parse(await fs.readFile(file,'utf8'));}catch{return fallback;}
}

async function catalog(){
  const items=[];
  const seen=new Set();
  const rx=/makePlatform\(\s*'([^']+)'\s*,\s*'[^']*'\s*,\s*'([^']+)'/g;
  for(const file of SOURCE_FILES){
    const body=await fs.readFile(path.join(ROOT,file),'utf8');
    let match;
    while((match=rx.exec(body))){
      const id=match[1];
      if(seen.has(id)) continue;
      seen.add(id);
      items.push({id,name:match[2]});
    }
  }
  return items;
}

function domainBlocked(url,blockedDomains=[]){
  const host=new URL(url).hostname.toLowerCase();
  return blockedDomains.some(domain=>host===String(domain).toLowerCase()||host.endsWith(`.${String(domain).toLowerCase()}`));
}

function robotsRules(text){
  const lines=String(text||'').split(/\r?\n/).map(line=>line.replace(/#.*/,'').trim()).filter(Boolean);
  const rules=[];
  let applies=false;
  for(const line of lines){
    const [rawKey,...rest]=line.split(':');
    const key=rawKey.toLowerCase();
    const value=rest.join(':').trim();
    if(key==='user-agent') applies=value==='*'||value.toLowerCase().includes('ezenablement');
    if(applies&&(key==='allow'||key==='disallow')) rules.push({type:key,path:value});
  }
  return rules;
}

async function robotsAllows(url){
  const target=new URL(url);
  const robotsUrl=`${target.origin}/robots.txt`;
  try{
    const res=await fetch(robotsUrl,{headers:{'user-agent':USER_AGENT}});
    if(!res.ok) return true;
    const rules=robotsRules(await res.text());
    const pathName=target.pathname||'/';
    const matches=rules.filter(rule=>rule.path&&pathName.startsWith(rule.path)).sort((a,b)=>b.path.length-a.path.length);
    return !matches.length||matches[0].type!=='disallow';
  }catch{return false;}
}

function extractJsonLd(html){
  const blocks=[];
  const rx=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while((match=rx.exec(String(html||'')))){
    try{
      const parsed=JSON.parse(match[1].trim());
      blocks.push(...(Array.isArray(parsed)?parsed:[parsed]));
    }catch{}
  }
  return blocks;
}

function findAggregateRating(node){
  if(!node||typeof node!=='object') return null;
  if(node.aggregateRating&&typeof node.aggregateRating==='object') return node.aggregateRating;
  if(Array.isArray(node['@graph'])){
    for(const child of node['@graph']){
      const found=findAggregateRating(child);
      if(found) return found;
    }
  }
  return null;
}

async function fetchJsonLdRating(source,config){
  if(source.automatedAccessApproved!==true) throw new Error('JSON-LD source is not explicitly approved for automated access.');
  if(domainBlocked(source.url,config.policy?.blockedDomains)) throw new Error('Source domain is blocked by EZ ratings policy.');
  if(!(await robotsAllows(source.url))) throw new Error('robots.txt does not permit this automated fetch.');
  const res=await fetch(source.url,{headers:{'user-agent':USER_AGENT,'accept':'text/html,application/xhtml+xml'}});
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const rating=findAggregateRating(extractJsonLd(await res.text()).find(item=>findAggregateRating(item)));
  if(!rating) throw new Error('No aggregateRating JSON-LD found.');
  const value=Number(rating.ratingValue);
  const count=Number(rating.ratingCount??rating.reviewCount??0);
  const best=Number(rating.bestRating||5);
  const worst=Number(rating.worstRating||0);
  if(!Number.isFinite(value)||!Number.isFinite(best)||best<=worst) throw new Error('Invalid aggregate rating metadata.');
  return {component:'userSentiment',score:clamp(((value-worst)/(best-worst))*10),reviewCount:Number.isFinite(count)?Math.max(0,count):0,label:source.label||new URL(source.url).hostname,url:source.url,observedAt:nowIso()};
}

async function fetchLicensedJson(source,config){
  if(domainBlocked(source.url,config.policy?.blockedDomains)&&source.explicitLicense!==true) throw new Error('Blocked domain requires explicit licensed/API access.');
  const headers={'user-agent':USER_AGENT,'accept':'application/json'};
  if(source.authEnv){
    const token=process.env[source.authEnv];
    if(!token) throw new Error(`Missing ${source.authEnv}.`);
    headers[source.authHeader||'authorization']=(source.authPrefix??'Bearer ')+token;
  }
  const res=await fetch(source.url,{headers});
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const body=await res.json();
  const raw=Number(getPath(body,source.ratingPath));
  const count=Number(getPath(body,source.countPath)||0);
  const max=Number(source.maxRating||10);
  const min=Number(source.minRating||0);
  if(!Number.isFinite(raw)||!Number.isFinite(max)||max<=min) throw new Error('Licensed JSON rating path did not resolve to a valid score.');
  return {component:'userSentiment',score:clamp(((raw-min)/(max-min))*10),reviewCount:Number.isFinite(count)?Math.max(0,count):0,label:source.label||new URL(source.url).hostname,url:source.url,observedAt:nowIso()};
}

function githubMomentumScore(repo){
  const stars=Math.max(0,Number(repo.stargazers_count||0));
  const forks=Math.max(0,Number(repo.forks_count||0));
  const pushed=repo.pushed_at?new Date(repo.pushed_at):null;
  const days=pushed&&Number.isFinite(pushed.getTime())?Math.max(0,(Date.now()-pushed.getTime())/86400000):3650;
  const popularity=clamp((Math.log10(stars+forks*2+1)/5)*10);
  const freshness=days<=7?10:days<=30?9:days<=90?7.5:days<=180?6:days<=365?4:2;
  return clamp(popularity*0.65+freshness*0.35);
}

async function fetchGithub(source){
  const headers={'user-agent':USER_AGENT,'accept':'application/vnd.github+json'};
  const token=process.env.GITHUB_TOKEN;
  if(token) headers.authorization=`Bearer ${token}`;
  const res=await fetch(`https://api.github.com/repos/${source.repo}`,{headers});
  if(!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
  const repo=await res.json();
  return {component:source.component||'marketMomentum',score:githubMomentumScore(repo),reviewCount:0,label:source.label||'GitHub',url:repo.html_url||`https://github.com/${source.repo}`,observedAt:nowIso(),metadata:{stars:repo.stargazers_count||0,forks:repo.forks_count||0,pushedAt:repo.pushed_at||null}};
}

async function collectSource(source,config){
  if(source.enabled===false) return null;
  if(source.type==='jsonld-aggregate-rating') return fetchJsonLdRating(source,config);
  if(source.type==='licensed-json') return fetchLicensedJson(source,config);
  if(source.type==='github') return fetchGithub(source);
  if(source.type==='component') return {component:source.component,score:clamp(source.score),reviewCount:0,label:source.label||'EZ rubric',url:source.url||null,observedAt:nowIso()};
  throw new Error(`Unsupported rating source type: ${source.type}`);
}

function weightedAverage(items,weightFn=()=>1){
  let total=0,weight=0;
  for(const item of items){
    const w=Math.max(0,Number(weightFn(item)||0));
    total+=item.score*w;weight+=w;
  }
  return weight?total/weight:null;
}

function userSentiment(signals,defaults){
  const user=signals.filter(signal=>signal.component==='userSentiment');
  if(!user.length) return null;
  const priorMean=Number(defaults.priorUserScore??7.5);
  const priorWeight=Math.max(1,Number(defaults.priorReviewWeight??30));
  const reviewCount=user.reduce((sum,item)=>sum+Math.max(0,Number(item.reviewCount||0)),0);
  const observed=weightedAverage(user,item=>Math.max(1,Number(item.reviewCount||1)));
  const score=((priorMean*priorWeight)+(observed*reviewCount))/(priorWeight+Math.max(1,reviewCount));
  return {score:clamp(score),reviewCount,sourceCount:user.length};
}

function reviewConfidence(sentiment,signals){
  if(!sentiment) return null;
  const volume=clamp((Math.log10(sentiment.reviewCount+1)/4)*10);
  const diversity=clamp(sentiment.sourceCount*3.5);
  const freshnessDates=signals.filter(s=>s.component==='userSentiment'&&s.observedAt).map(s=>new Date(s.observedAt).getTime()).filter(Number.isFinite);
  const newest=freshnessDates.length?Math.max(...freshnessDates):0;
  const ageDays=newest?Math.max(0,(Date.now()-newest)/86400000):3650;
  const freshness=ageDays<=1?10:ageDays<=7?9:ageDays<=30?7:ageDays<=90?5:2;
  return clamp(volume*0.5+diversity*0.25+freshness*0.25);
}

function componentScore(name,signals){
  const rows=signals.filter(signal=>signal.component===name);
  return rows.length?weightedAverage(rows):null;
}

function composite(components,weights){
  let total=0,used=0;
  for(const [name,value] of Object.entries(components)){
    if(value===null||value===undefined||!Number.isFinite(Number(value))) continue;
    const weight=Number(weights[name]||0);
    if(weight<=0) continue;
    total+=Number(value)*weight;used+=weight;
  }
  return used?clamp(total/used):null;
}

function scoreItem(product,signals,config,history){
  const sentiment=userSentiment(signals,config.defaults||{});
  const components={
    userSentiment:sentiment?.score??null,
    reviewConfidence:reviewConfidence(sentiment,signals),
    integrationReadiness:componentScore('integrationReadiness',signals),
    gtmFit:componentScore('gtmFit',signals),
    marketMomentum:componentScore('marketMomentum',signals)
  };
  const available=Object.values(components).filter(value=>value!==null&&value!==undefined).length;
  const score=composite(components,config.defaults?.weights||{});
  const hasUser=components.userSentiment!==null;
  const status=hasUser&&available>=Number(config.policy?.minimumScoreComponents||2)?'live':available>=2?'provisional':'collecting';
  const prior=[...(history.items?.[product.id]||[])].reverse().find(row=>Number.isFinite(Number(row.score)));
  const trend=score!==null&&prior?round(score-Number(prior.score)):null;
  return {
    id:product.id,
    name:product.name,
    status,
    score:status==='collecting'?null:round(score),
    confidence:components.reviewConfidence===null?null:round(components.reviewConfidence),
    reviewCount:sentiment?.reviewCount||0,
    sourceCount:new Set(signals.map(signal=>signal.label)).size,
    components:Object.fromEntries(Object.entries(components).map(([key,value])=>[key,value===null?null:round(value)])),
    trend,
    sources:signals.map(signal=>({label:signal.label,url:signal.url||null,component:signal.component,score:round(signal.score),reviewCount:signal.reviewCount||0,observedAt:signal.observedAt,metadata:signal.metadata||undefined})),
    lastRefreshed:nowIso()
  };
}

async function main(){
  const [products,config,history]=await Promise.all([catalog(),readJson(CONFIG_PATH,{}),readJson(HISTORY_PATH,{schemaVersion:1,items:{}})]);
  if(products.length!==103) throw new Error(`Expected 103 AI Systems Library platforms; found ${products.length}.`);
  const output={schemaVersion:1,generatedAt:nowIso(),refreshHours:Number(config.policy?.refreshHours||6),items:{}};
  const failures=[];
  for(const product of products){
    const signals=[];
    for(const source of config.sources?.[product.id]||[]){
      try{
        const signal=await collectSource(source,config);
        if(signal) signals.push(signal);
      }catch(error){failures.push({id:product.id,source:source.label||source.type,error:String(error.message||error).slice(0,240)});}
    }
    output.items[product.id]=scoreItem(product,signals,config,history);
  }
  output.summary={total:products.length,live:Object.values(output.items).filter(x=>x.status==='live').length,provisional:Object.values(output.items).filter(x=>x.status==='provisional').length,collecting:Object.values(output.items).filter(x=>x.status==='collecting').length,sourceFailures:failures.length};
  output.failures=failures;
  await fs.mkdir(path.dirname(OUTPUT_PATH),{recursive:true});
  await fs.writeFile(OUTPUT_PATH,JSON.stringify(output,null,2)+'\n');

  const cutoff=Date.now()-180*86400000;
  history.schemaVersion=1;history.updatedAt=output.generatedAt;history.items=history.items||{};
  for(const item of Object.values(output.items)){
    const rows=Array.isArray(history.items[item.id])?history.items[item.id]:[];
    const kept=rows.filter(row=>new Date(row.at).getTime()>=cutoff);
    if(item.score!==null) kept.push({at:output.generatedAt,score:item.score,status:item.status,confidence:item.confidence});
    history.items[item.id]=kept.slice(-720);
  }
  await fs.writeFile(HISTORY_PATH,JSON.stringify(history,null,2)+'\n');
  console.log(`EZ Score refresh: ${output.summary.live} live, ${output.summary.provisional} provisional, ${output.summary.collecting} collecting, ${failures.length} source failures.`);
}

await main();
