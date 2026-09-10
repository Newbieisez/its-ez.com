import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT=process.cwd();
const SOURCE_FILES=['ai-systems.js','ai-systems-extended.js','ai-systems-categories.js'];
const CONFIG_PATH=path.join(ROOT,'data','ai-rating-sources.json');
const OUTPUT_PATH=path.join(ROOT,'data','ai-systems-ratings.json');
const HISTORY_PATH=path.join(ROOT,'data','ai-systems-rating-history.json');
const USER_AGENT='EZEnablement-AISystems-Ratings/2.0 (+https://its-ez.com/ai-systems.html)';

const clamp=(value,min=0,max=10)=>Math.max(min,Math.min(max,Number(value)));
const round=value=>Math.round(Number(value)*10)/10;
const clean=value=>String(value??'').trim();
const nowIso=()=>new Date().toISOString();
const getPath=(obj,dotted)=>String(dotted||'').split('.').filter(Boolean).reduce((value,key)=>value?.[key],obj);

const FAMILY_ALIASES={
  'www.g2.com':'g2','g2.com':'g2',
  'www.trustradius.com':'trustradius','trustradius.com':'trustradius',
  'www.capterra.com':'gartner-digital-markets','capterra.com':'gartner-digital-markets',
  'www.getapp.com':'gartner-digital-markets','getapp.com':'gartner-digital-markets',
  'www.softwareadvice.com':'gartner-digital-markets','softwareadvice.com':'gartner-digital-markets',
  'www.gartner.com':'gartner-peer-insights','gartner.com':'gartner-peer-insights',
  'www.peerspot.com':'peerspot','peerspot.com':'peerspot',
  'www.softwarereviews.com':'softwarereviews','softwarereviews.com':'softwarereviews',
  'sourceforge.net':'sourceforge','www.sourceforge.net':'sourceforge',
  'slashdot.org':'sourceforge','www.slashdot.org':'sourceforge',
  'itunes.apple.com':'apple-app-store','apps.apple.com':'apple-app-store',
  'play.google.com':'google-play',
  'appexchange.salesforce.com':'salesforce-appexchange',
  'appsource.microsoft.com':'microsoft-appsource',
  'marketplace.atlassian.com':'atlassian-marketplace',
  'ecosystem.hubspot.com':'hubspot-marketplace',
  'workspace.google.com':'google-workspace-marketplace',
  'chromewebstore.google.com':'chrome-web-store',
  'www.trustpilot.com':'trustpilot','trustpilot.com':'trustpilot',
  'github.com':'github'
};
const SCOPE_WEIGHTS={full_platform:1,suite:.8,marketplace:.7,mobile_app:.35,browser_extension:.35,vendor_evidence:0,reference:0};
const FULL_PLATFORM_SCOPES=new Set(['full_platform']);

function resolveSourceFamily(source,fallbackUrl=null){
  const explicit=clean(source?.sourceFamily).toLowerCase();
  if(explicit) return FAMILY_ALIASES[explicit]||explicit;
  let host='';
  if(fallbackUrl){try{host=new URL(fallbackUrl).hostname.toLowerCase();}catch{}}
  if(host) return FAMILY_ALIASES[host]||host;
  if(source?.type==='github') return 'github';
  if(source?.type==='component') return clean(source?.family||source?.label||'ez-owned').toLowerCase();
  return clean(source?.type||'unknown').toLowerCase();
}
function scopeFor(source){return clean(source?.scope||'full_platform').toLowerCase();}
function scopeWeight(source){return Number(SCOPE_WEIGHTS[scopeFor(source)]??.5);}
function reliabilityFor(source){const n=Number(source?.reliability??1);return Number.isFinite(n)?Math.max(0,Math.min(1,n)):1;}

async function readJson(file,fallback){
  try{return JSON.parse(await fs.readFile(file,'utf8'));}catch{return fallback;}
}

async function catalog(){
  const items=[];
  const seen=new Set();
  const add=(id,name)=>{if(!id||!name||seen.has(id))return;seen.add(id);items.push({id,name});};
  for(const file of SOURCE_FILES){
    const body=await fs.readFile(path.join(ROOT,file),'utf8');
    const direct=/\b(?:makePlatform|add)\(\s*'([^']+)'\s*,\s*'[^']*'\s*,\s*'([^']+)'/g;
    let match;
    while((match=direct.exec(body))) add(match[1],match[2]);
    if(file==='ai-systems-categories.js'){
      const arrayRows=/^\s*\[\s*'([^']+)'\s*,\s*'[^']*'\s*,\s*'([^']+)'\s*,\s*'[^']+'/gm;
      while((match=arrayRows.exec(body))) add(match[1],match[2]);
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
  const rules=[];let applies=false;
  for(const line of lines){
    const [rawKey,...rest]=line.split(':');const key=rawKey.toLowerCase();const value=rest.join(':').trim();
    if(key==='user-agent') applies=value==='*'||value.toLowerCase().includes('ezenablement');
    if(applies&&(key==='allow'||key==='disallow')) rules.push({type:key,path:value});
  }
  return rules;
}

async function robotsAllows(url){
  const target=new URL(url);const robotsUrl=`${target.origin}/robots.txt`;
  try{
    const res=await fetch(robotsUrl,{headers:{'user-agent':USER_AGENT}});
    if(!res.ok) return true;
    const rules=robotsRules(await res.text());const pathName=target.pathname||'/';
    const matches=rules.filter(rule=>rule.path&&pathName.startsWith(rule.path)).sort((a,b)=>b.path.length-a.path.length);
    return !matches.length||matches[0].type!=='disallow';
  }catch{return false;}
}

function extractJsonLd(html){
  const blocks=[];const rx=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;let match;
  while((match=rx.exec(String(html||'')))){try{const parsed=JSON.parse(match[1].trim());blocks.push(...(Array.isArray(parsed)?parsed:[parsed]));}catch{}}
  return blocks;
}
function findAggregateRating(node){
  if(!node||typeof node!=='object') return null;
  if(node.aggregateRating&&typeof node.aggregateRating==='object') return node.aggregateRating;
  if(Array.isArray(node['@graph'])) for(const child of node['@graph']){const found=findAggregateRating(child);if(found)return found;}
  return null;
}
function baseSignal(source,score,reviewCount,label,url,observedAt=nowIso()){
  return {
    component:'userSentiment',score:clamp(score),reviewCount:Math.max(0,Number(reviewCount||0)),
    label:label||source.label||'Review source',url:url||source.url||null,
    sourceFamily:resolveSourceFamily(source,url||source.url||null),scope:scopeFor(source),
    scopeWeight:scopeWeight(source),reliability:reliabilityFor(source),observedAt
  };
}

function snapshotReview(source){
  const raw=Number(source.rating);const max=Number(source.maxRating||10);const min=Number(source.minRating||0);
  if(!Number.isFinite(raw)||!Number.isFinite(max)||max<=min) throw new Error('Snapshot review has an invalid rating.');
  const observedAt=source.observedAt||source.verifiedAt;
  if(!observedAt||Number.isNaN(new Date(observedAt).getTime())) throw new Error('Snapshot review requires a valid observedAt timestamp.');
  return baseSignal(source,((raw-min)/(max-min))*10,source.reviewCount,source.label,source.url,observedAt);
}

async function fetchJsonLdRating(source,config){
  if(source.automatedAccessApproved!==true) throw new Error('JSON-LD source is not explicitly approved for automated access.');
  if(domainBlocked(source.url,config.policy?.blockedDomains)) throw new Error('Source domain is blocked by EZ ratings policy.');
  if(!(await robotsAllows(source.url))) throw new Error('robots.txt does not permit this automated fetch.');
  const res=await fetch(source.url,{headers:{'user-agent':USER_AGENT,'accept':'text/html,application/xhtml+xml'}});
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const rating=findAggregateRating(extractJsonLd(await res.text()).find(item=>findAggregateRating(item)));
  if(!rating) throw new Error('No aggregateRating JSON-LD found.');
  const value=Number(rating.ratingValue);const count=Number(rating.ratingCount??rating.reviewCount??0);
  const best=Number(rating.bestRating||5);const worst=Number(rating.worstRating||0);
  if(!Number.isFinite(value)||!Number.isFinite(best)||best<=worst) throw new Error('Invalid aggregate rating metadata.');
  return baseSignal(source,((value-worst)/(best-worst))*10,Number.isFinite(count)?count:0,source.label||new URL(source.url).hostname,source.url);
}

async function fetchLicensedJson(source,config){
  if(domainBlocked(source.url,config.policy?.blockedDomains)&&source.explicitLicense!==true) throw new Error('Blocked domain requires explicit licensed/API access.');
  const headers={'user-agent':USER_AGENT,'accept':'application/json'};
  if(source.authEnv){
    const token=process.env[source.authEnv];if(!token) throw new Error(`Missing ${source.authEnv}.`);
    headers[source.authHeader||'authorization']=(source.authPrefix??'Bearer ')+token;
  }
  const res=await fetch(source.url,{headers});if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const body=await res.json();const raw=Number(getPath(body,source.ratingPath));const count=Number(getPath(body,source.countPath)||0);
  const max=Number(source.maxRating||10);const min=Number(source.minRating||0);
  if(!Number.isFinite(raw)||!Number.isFinite(max)||max<=min) throw new Error('Licensed JSON rating path did not resolve to a valid score.');
  return baseSignal(source,((raw-min)/(max-min))*10,Number.isFinite(count)?count:0,source.label||new URL(source.url).hostname,source.url);
}

function githubMomentumScore(repo){
  const stars=Math.max(0,Number(repo.stargazers_count||0));const forks=Math.max(0,Number(repo.forks_count||0));
  const pushed=repo.pushed_at?new Date(repo.pushed_at):null;
  const days=pushed&&Number.isFinite(pushed.getTime())?Math.max(0,(Date.now()-pushed.getTime())/86400000):3650;
  const popularity=clamp((Math.log10(stars+forks*2+1)/5)*10);
  const freshness=days<=7?10:days<=30?9:days<=90?7.5:days<=180?6:days<=365?4:2;
  return clamp(popularity*.65+freshness*.35);
}
async function fetchGithub(source){
  const headers={'user-agent':USER_AGENT,'accept':'application/vnd.github+json'};const token=process.env.GITHUB_TOKEN;
  if(token) headers.authorization=`Bearer ${token}`;
  const res=await fetch(`https://api.github.com/repos/${source.repo}`,{headers});if(!res.ok) throw new Error(`GitHub HTTP ${res.status}`);
  const repo=await res.json();
  return {component:source.component||'marketMomentum',score:githubMomentumScore(repo),reviewCount:0,label:source.label||'GitHub',url:repo.html_url||`https://github.com/${source.repo}`,sourceFamily:'github',scope:'reference',scopeWeight:0,reliability:1,observedAt:nowIso(),metadata:{stars:repo.stargazers_count||0,forks:repo.forks_count||0,pushedAt:repo.pushed_at||null}};
}

async function collectSource(source,config){
  if(source.enabled===false||source.type==='reference') return null;
  if(source.type==='snapshot-review') return snapshotReview(source);
  if(source.type==='jsonld-aggregate-rating') return fetchJsonLdRating(source,config);
  if(source.type==='licensed-json') return fetchLicensedJson(source,config);
  if(source.type==='github') return fetchGithub(source);
  if(source.type==='component') return {component:source.component,score:clamp(source.score),reviewCount:0,label:source.label||'EZ rubric',url:source.url||null,sourceFamily:resolveSourceFamily(source,source.url||null),scope:scopeFor(source),scopeWeight:scopeWeight(source),reliability:reliabilityFor(source),observedAt:source.observedAt||nowIso()};
  throw new Error(`Unsupported rating source type: ${source.type}`);
}

function freshnessScore(dateValue){
  const when=new Date(dateValue||0).getTime();if(!Number.isFinite(when)||!when)return 0;
  const days=Math.max(0,(Date.now()-when)/86400000);
  return days<=30?10:days<=90?9:days<=180?7:days<=365?4:1;
}
function weightedAverage(items,weightFn=()=>1){
  let total=0,weight=0;
  for(const item of items){const w=Math.max(0,Number(weightFn(item)||0));total+=item.score*w;weight+=w;}
  return weight?total/weight:null;
}
function dedupeSentimentFamilies(signals){
  const user=signals.filter(s=>s.component==='userSentiment'&&s.scopeWeight>0);
  const groups=new Map();
  for(const signal of user){
    const family=signal.sourceFamily||signal.label;
    if(!groups.has(family))groups.set(family,[]);
    groups.get(family).push(signal);
  }
  return [...groups.entries()].map(([family,rows])=>{
    const bestScope=Math.max(...rows.map(r=>Number(r.scopeWeight||0)));
    const reviewCount=Math.max(...rows.map(r=>Number(r.reviewCount||0)));
    const reliability=Math.max(...rows.map(r=>Number(r.reliability??1)));
    const score=weightedAverage(rows,r=>Math.max(.1,Number(r.scopeWeight||.5))*Math.max(.1,Number(r.reliability??1))*Math.max(1,Math.log10(Number(r.reviewCount||0)+10)));
    const newest=rows.map(r=>new Date(r.observedAt||0).getTime()).filter(Number.isFinite).sort((a,b)=>b-a)[0]||0;
    const full=rows.filter(r=>FULL_PLATFORM_SCOPES.has(r.scope));
    return {family,score,reviewCount,reliability,scopeWeight:bestScope,observedAt:newest?new Date(newest).toISOString():null,fullPlatform:full.length>0,fullPlatformReviewCount:full.length?Math.max(...full.map(r=>Number(r.reviewCount||0))):0,rows};
  });
}
function userSentiment(signals,defaults){
  const families=dedupeSentimentFamilies(signals);if(!families.length)return null;
  const observed=weightedAverage(families,f=>Math.max(.1,f.scopeWeight)*Math.max(.1,f.reliability)*Math.max(1,Math.log10(f.reviewCount+10)));
  const effectiveReviews=families.reduce((sum,f)=>sum+Math.round(f.reviewCount*Math.max(.1,f.scopeWeight)*Math.max(.1,f.reliability)),0);
  const priorMean=Number(defaults.priorUserScore??7.5);const priorWeight=Math.max(1,Number(defaults.priorReviewWeight??20));
  const score=((priorMean*priorWeight)+(observed*Math.max(1,effectiveReviews)))/(priorWeight+Math.max(1,effectiveReviews));
  const fullFamilies=families.filter(f=>f.fullPlatform).sort((a,b)=>b.fullPlatformReviewCount-a.fullPlatformReviewCount);
  return {
    score:clamp(score),reviewCount:families.reduce((sum,f)=>sum+f.reviewCount,0),
    sourceCount:families.length,families,fullPlatformSourceCount:fullFamilies.length,
    fullPlatformReviewCount:fullFamilies.reduce((sum,f)=>sum+f.fullPlatformReviewCount,0),
    secondLargestFullPlatformReviewCount:fullFamilies[1]?.fullPlatformReviewCount||0
  };
}
function agreementScore(sentiment){
  const scores=sentiment?.families?.filter(f=>f.fullPlatform&&Number.isFinite(f.score)).map(f=>f.score)||[];
  if(scores.length<2)return null;
  const mean=scores.reduce((a,b)=>a+b,0)/scores.length;
  const variance=scores.reduce((sum,v)=>sum+((v-mean)**2),0)/scores.length;
  const sd=Math.sqrt(variance);
  return clamp(10-(sd*4));
}
function evidenceFreshness(sentiment){
  const rows=sentiment?.families?.filter(f=>f.fullPlatform&&f.observedAt)||[];
  if(!rows.length)return null;
  const freshnessRows=rows.map(r=>({score:freshnessScore(r.observedAt),reviews:r.fullPlatformReviewCount}));
  return weightedAverage(freshnessRows,r=>Math.max(1,Math.log10(r.reviews+10)));
}
function reviewConfidence(sentiment){
  if(!sentiment)return null;
  const volume=clamp((Math.log10(sentiment.fullPlatformReviewCount+1)/4)*10);
  const diversity=clamp(sentiment.fullPlatformSourceCount*3.5);
  const second=clamp((Math.log10(sentiment.secondLargestFullPlatformReviewCount+1)/2.5)*10);
  const fresh=evidenceFreshness(sentiment)??0;
  return clamp(volume*.35+diversity*.3+second*.2+fresh*.15);
}
function componentScore(name,signals){
  const rows=signals.filter(signal=>signal.component===name);
  return rows.length?weightedAverage(rows,r=>Math.max(.1,Number(r.reliability??1))):null;
}
function composite(components,weights){
  let total=0,used=0;
  for(const [name,value] of Object.entries(components)){
    if(value===null||value===undefined||!Number.isFinite(Number(value)))continue;
    const weight=Number(weights[name]||0);if(weight<=0)continue;total+=Number(value)*weight;used+=weight;
  }
  return used?clamp(total/used):null;
}

function scoreItem(product,signals,config,history){
  const sentiment=userSentiment(signals,config.defaults||{});
  const agreement=agreementScore(sentiment);
  const freshness=evidenceFreshness(sentiment);
  const confidence=reviewConfidence(sentiment);
  const components={
    userSentiment:sentiment?.score??null,reviewConfidence:confidence,sourceAgreement:agreement,evidenceFreshness:freshness,
    integrationReadiness:componentScore('integrationReadiness',signals),gtmFit:componentScore('gtmFit',signals),marketMomentum:componentScore('marketMomentum',signals)
  };
  const score=composite(components,config.defaults?.weights||{});
  const policy=config.policy||{};
  const hasSentiment=components.userSentiment!==null;
  const qualifiesLive=hasSentiment
    &&(sentiment?.fullPlatformSourceCount||0)>=Number(policy.minimumLiveFullPlatformSources||2)
    &&(sentiment?.fullPlatformReviewCount||0)>=Number(policy.minimumLiveFullPlatformReviews||100)
    &&(sentiment?.secondLargestFullPlatformReviewCount||0)>=Number(policy.minimumSecondSourceReviews||20)
    &&Number(confidence||0)>=Number(policy.minimumLiveConfidence||6)
    &&Number(agreement||0)>=Number(policy.minimumLiveAgreement||6)
    &&Number(freshness||0)>=Number(policy.minimumLiveFreshness||5);
  const status=qualifiesLive?'live':hasSentiment?'provisional':'collecting';
  const prior=[...(history.items?.[product.id]||[])].reverse().find(row=>Number.isFinite(Number(row.score)));
  const trend=score!==null&&prior?round(score-Number(prior.score)):null;
  const sourceCount=new Set(signals.map(s=>s.label).filter(Boolean)).size;
  const independentSourceCount=new Set(signals.filter(s=>s.component==='userSentiment').map(s=>s.sourceFamily||s.label).filter(Boolean)).size;
  return {
    id:product.id,name:product.name,status,score:status==='collecting'?null:round(score),confidence:confidence===null?null:round(confidence),
    reviewCount:sentiment?.reviewCount||0,sourceCount,independentSourceCount,
    fullPlatformSourceCount:sentiment?.fullPlatformSourceCount||0,fullPlatformReviewCount:sentiment?.fullPlatformReviewCount||0,
    secondLargestFullPlatformReviewCount:sentiment?.secondLargestFullPlatformReviewCount||0,
    components:Object.fromEntries(Object.entries(components).map(([key,value])=>[key,value===null?null:round(value)])),
    trend,
    sources:signals.map(signal=>({label:signal.label,url:signal.url||null,sourceFamily:signal.sourceFamily||null,scope:signal.scope||null,component:signal.component,score:round(signal.score),reviewCount:signal.reviewCount||0,reliability:signal.reliability??1,observedAt:signal.observedAt,metadata:signal.metadata||undefined})),
    lastRefreshed:nowIso()
  };
}

async function main(){
  const [products,config,history]=await Promise.all([catalog(),readJson(CONFIG_PATH,{}),readJson(HISTORY_PATH,{schemaVersion:1,items:{}})]);
  const expected=Number(config.policy?.expectedCatalogSize||0);
  if(expected&&products.length!==expected)throw new Error(`Expected ${expected} AI Systems Library platforms; found ${products.length}.`);
  if(products.length<100)throw new Error(`AI Systems catalog unexpectedly small: ${products.length}.`);
  const output={schemaVersion:2,methodologyVersion:'2.0',generatedAt:nowIso(),refreshHours:Number(config.policy?.refreshHours||6),items:{}};
  const failures=[];
  for(const product of products){
    const signals=[];
    for(const source of config.sources?.[product.id]||[]){
      try{const signal=await collectSource(source,config);if(signal)signals.push(signal);}
      catch(error){failures.push({id:product.id,source:source.label||source.type,error:String(error.message||error).slice(0,240)});}
    }
    output.items[product.id]=scoreItem(product,signals,config,history);
  }
  const values=Object.values(output.items);
  output.summary={total:products.length,live:values.filter(x=>x.status==='live').length,provisional:values.filter(x=>x.status==='provisional').length,collecting:values.filter(x=>x.status==='collecting').length,sourceFailures:failures.length,fullPlatformReviewRecords:values.reduce((sum,x)=>sum+Number(x.fullPlatformReviewCount||0),0)};
  output.failures=failures;
  await fs.mkdir(path.dirname(OUTPUT_PATH),{recursive:true});
  await fs.writeFile(OUTPUT_PATH,JSON.stringify(output,null,2)+'\n');

  const cutoff=Date.now()-365*86400000;
  history.schemaVersion=2;history.updatedAt=output.generatedAt;history.items=history.items||{};
  for(const item of values){
    const rows=Array.isArray(history.items[item.id])?history.items[item.id]:[];
    const kept=rows.filter(row=>new Date(row.at).getTime()>=cutoff);
    if(item.score!==null)kept.push({at:output.generatedAt,score:item.score,status:item.status,confidence:item.confidence});
    history.items[item.id]=kept.slice(-1460);
  }
  await fs.writeFile(HISTORY_PATH,JSON.stringify(history,null,2)+'\n');
  console.log(`EZ Score v2 refresh: ${output.summary.live} live, ${output.summary.provisional} provisional, ${output.summary.collecting} collecting, ${output.summary.fullPlatformReviewRecords} full-platform review records, ${failures.length} source failures.`);
}
await main();
