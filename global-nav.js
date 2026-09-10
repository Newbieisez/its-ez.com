(() => {
  'use strict';

  const VERSION = '20260910-site-ui-3';
  const ROOT = 'https://its-ez.com/';
  const ASSET_VERSION = '20260910-site-ui-3';
  const THEME_KEY = 'ez-site-theme';
  const scriptSrc = document.currentScript?.src || `${ROOT}global-nav.js`;
  const ASSET_ROOT = new URL('./', scriptSrc).href;
  const previewHost = /(^|\.)raw\.githack\.com$/i.test(location.hostname);
  const SITE_ROOT = previewHost ? ASSET_ROOT : ROOT;
  const assetUrl = path => new URL(path, ASSET_ROOT).href;

  const navGroups = [
    {
      label: 'Start here',
      items: [
        ['Home', SITE_ROOT, 'Overview and positioning'],
        ['Work', SITE_ROOT + '#work', 'Case studies and outcomes'],
        ['Services', SITE_ROOT + 'work-with-me.html', 'Ways to work together'],
        ['Contact', SITE_ROOT + '#contact', 'Start a conversation']
      ]
    },
    {
      label: 'Tools & resources',
      items: [
        ['Revenue Hub', SITE_ROOT + 'revenue-performance.html', 'Metrics, diagnostics and coaching'],
        ['AI Systems', SITE_ROOT + 'ai-systems.html', 'Practical AI workflow library'],
        ['MEDDPICC', 'https://meddpicc-is-ez.erezhaimowicz.workers.dev/', 'Qualification and deal execution'],
        ['Cybersecurity', 'https://ez-human-threat-academy.erezhaimowicz.workers.dev/', 'Human threat knowledge base']
      ]
    },
    {
      label: 'More',
      items: [
        ['Recommendations', SITE_ROOT + 'recommendations.html', 'What people I worked with say'],
        ['Music', SITE_ROOT + 'music.html', 'Avi Haimonix releases and originals']
      ]
    }
  ];

  const allItems = navGroups.flatMap(group => group.items);

  function defaultTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (_) {}
    return /\/music(?:\.html)?$/i.test(location.pathname) ? 'dark' : 'light';
  }

  let theme = defaultTheme();
  document.documentElement.dataset.ezTheme = theme;
  document.documentElement.style.colorScheme = theme;

  function ensureStylesheet(key, href) {
    if (document.querySelector(`link[data-${key}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute(`data-${key}`, 'true');
    document.head.appendChild(link);
  }

  function addStyles() {
    ensureStylesheet('ez-responsive', assetUrl('responsive-2026.css?v=20260908-responsive-audit-1'));
    ensureStylesheet('ez-site-ui', assetUrl(`site-ui-2026.css?v=${ASSET_VERSION}`));
    ensureStylesheet('ez-nav-compact', assetUrl(`site-nav-compact.css?v=${ASSET_VERSION}`));
  }

  function markPage() {
    const host = location.hostname.toLowerCase();
    const path = location.pathname.toLowerCase();
    const ezHost = host === 'its-ez.com' || host === 'www.its-ez.com';
    const previewHome = previewHost && path.endsWith('/index.html');

    if ((ezHost && (path === '/' || path === '/index.html')) || previewHome) document.body.classList.add('ez-homepage');
    if (path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems')) document.body.classList.add('ez-ai-systems');
    if (path.endsWith('/revenue-performance.html') || path.endsWith('/revenue-performance')) document.body.classList.add('ez-revenue-hub');
    if (path.endsWith('/music.html') || path.endsWith('/music')) document.body.classList.add('ez-music');
    if (path.endsWith('/recommendations.html') || path.endsWith('/recommendations')) document.body.classList.add('ez-recommendations');
    if (path.endsWith('/work-with-me.html') || path.endsWith('/work-with-me')) document.body.classList.add('ez-work-with-me');
    if (host.includes('meddpicc-is-ez') || host === 'meddpicc.its-ez.com') document.body.classList.add('ez-meddpicc');
    if (host.includes('ez-human-threat-academy')) document.body.classList.add('ez-cybersecurity');
  }

  function syncPageTheme(next) {
    if (document.body?.classList.contains('ez-revenue-hub')) {
      document.body.dataset.rpTheme = next;
      try { localStorage.setItem('ez-rp-theme', next); } catch (_) {}
    }
  }

  function currentFor(label, href) {
    const host = location.hostname.toLowerCase();
    const path = location.pathname.toLowerCase();
    const localSite = host === 'its-ez.com' || host === 'www.its-ez.com' || previewHost;

    if (label === 'MEDDPICC') return host.includes('meddpicc-is-ez') || host === 'meddpicc.its-ez.com';
    if (label === 'Cybersecurity') return host.includes('ez-human-threat-academy');
    if (!localSite) return false;

    const targetPath = new URL(href).pathname.toLowerCase();
    const homePath = previewHost ? path.endsWith('/index.html') : (path === '/' || path === '/index.html');
    if (label === 'Home') return homePath && !location.hash;
    if (label === 'Work') return homePath && location.hash === '#work';
    if (label === 'Contact') return homePath && location.hash === '#contact';
    return previewHost ? path.endsWith(targetPath.split('/').pop()) : targetPath === path;
  }

  function currentLabel() {
    const active = allItems.find(([label, href]) => currentFor(label, href));
    return active?.[0] || 'Explore';
  }

  function paintThemeControls() {
    const toggle = document.querySelector('.ez-theme-toggle');
    if (toggle) {
      const dark = theme === 'dark';
      toggle.textContent = dark ? '☀' : '☾';
      toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
      toggle.setAttribute('aria-pressed', String(dark));
    }
    document.querySelectorAll('[data-ez-theme-choice]').forEach(button => {
      const selected = button.dataset.ezThemeChoice === theme;
      button.setAttribute('aria-pressed', String(selected));
      button.classList.toggle('is-active', selected);
    });
  }

  function applyTheme(next, persist = true) {
    theme = next === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.ezTheme = theme;
    document.documentElement.style.colorScheme = theme;
    syncPageTheme(theme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#08090b' : '#ffffff');

    if (persist) {
      try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    }

    paintThemeControls();
    document.dispatchEvent(new CustomEvent('ez:themechange', { detail: { theme } }));
  }

  function groupMarkup(group) {
    return `<section class="ez-drawer-group" aria-label="${group.label}">
      <div class="ez-drawer-group-title">${group.label}</div>
      ${group.items.map(([label, href, description]) => `
        <a class="ez-drawer-link" href="${href}" data-ez-label="${label}">
          <span>${label}</span><small>${description}</small>
        </a>`).join('')}
    </section>`;
  }

  function renderHeader() {
    const old = document.querySelector('header.site-header, .site-header');
    const header = document.createElement('header');
    header.className = 'ez-global-header ez-compact-nav';
    header.dataset.version = VERSION;
    header.innerHTML = `
      <div class="ez-global-shell">
        <a class="ez-global-brand" href="${SITE_ROOT}" aria-label="EZ Enablement home">
          <span class="ez-global-mark">E<b>Z</b></span>
          <span class="ez-global-brand-copy"><strong>EZ ENABLEMENT</strong></span>
        </a>
        <span class="ez-current-page" aria-live="polite">${currentLabel()}</span>
        <div class="ez-global-actions">
          <button class="ez-theme-toggle" type="button" aria-label="Switch color mode"></button>
          <button class="ez-global-menu" type="button" aria-expanded="false" aria-controls="ez-nav-drawer" aria-label="Open menu"><span>Menu</span><b aria-hidden="true">☰</b></button>
        </div>
      </div>
      <button class="ez-nav-scrim" type="button" aria-label="Close menu" tabindex="-1"></button>
      <aside class="ez-nav-drawer" id="ez-nav-drawer" aria-label="Site navigation" aria-hidden="true">
        <div class="ez-drawer-head"><div><small>EZ ENABLEMENT</small><strong>Where do you want to go?</strong></div><button class="ez-drawer-close" type="button" aria-label="Close menu">×</button></div>
        <nav class="ez-drawer-nav" aria-label="All site destinations">${navGroups.map(groupMarkup).join('')}</nav>
        <div class="ez-drawer-appearance"><span>Appearance</span><div role="group" aria-label="Choose appearance"><button type="button" data-ez-theme-choice="light">Light</button><button type="button" data-ez-theme-choice="dark">Dark</button></div></div>
        <a class="ez-drawer-contact" href="${SITE_ROOT}#contact">Start a conversation <span aria-hidden="true">↗</span></a>
      </aside>`;

    if (old) old.replaceWith(header);
    else document.body.prepend(header);

    const menu = header.querySelector('.ez-global-menu');
    const drawer = header.querySelector('.ez-nav-drawer');
    const closeButton = header.querySelector('.ez-drawer-close');
    const scrim = header.querySelector('.ez-nav-scrim');
    const current = header.querySelector('.ez-current-page');

    const updateActive = () => {
      header.querySelectorAll('.ez-drawer-link').forEach(link => {
        if (currentFor(link.dataset.ezLabel, link.href)) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
      current.textContent = currentLabel();
    };

    const setOpen = (open, restoreFocus = false) => {
      header.classList.toggle('is-open', open);
      document.body.classList.toggle('ez-nav-open', open);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      drawer.setAttribute('aria-hidden', String(!open));
      if (open) {
        document.dispatchEvent(new Event('ez:close-page-map'));
        setTimeout(() => closeButton.focus(), 0);
      } else if (restoreFocus) menu.focus();
    };

    updateActive();
    paintThemeControls();

    menu.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
    closeButton.addEventListener('click', () => setOpen(false, true));
    scrim.addEventListener('click', () => setOpen(false, true));
    header.querySelector('.ez-theme-toggle').addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
    header.querySelectorAll('[data-ez-theme-choice]').forEach(button => button.addEventListener('click', () => applyTheme(button.dataset.ezThemeChoice)));
    header.querySelector('.ez-drawer-nav').addEventListener('click', event => {
      if (event.target.closest('a')) {
        setOpen(false);
        setTimeout(updateActive, 0);
      }
    });
    header.querySelector('.ez-drawer-contact').addEventListener('click', () => setOpen(false));

    document.addEventListener('ez:page-map-open', () => setOpen(false));
    window.addEventListener('hashchange', updateActive);
    window.addEventListener('popstate', updateActive);
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && header.classList.contains('is-open')) setOpen(false, true);
    });
  }

  function installPageMap() {
    const apply = () => {
      const map = document.querySelector('.ez-page-map');
      const toggle = document.querySelector('.ez-page-map-toggle');
      if (!map || !toggle) return false;
      toggle.removeAttribute('aria-hidden');
      map.querySelectorAll('a').forEach(a => {
        if (a.textContent.trim() === 'People') a.textContent = 'Recommendations';
      });
      return true;
    };
    if (apply()) return;
    const observer = new MutationObserver(() => {
      if (apply()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), 8000);
  }

  function installAiSystemMap() {
    const path = location.pathname.toLowerCase();
    if (!(path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems'))) return;
    const map = document.getElementById('page-map');
    const toggle = document.getElementById('page-map-toggle');
    if (!map || !toggle) return;

    toggle.textContent = '☷ Page';
    const close = () => {
      map.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    document.addEventListener('ez:close-page-map', close);
    toggle.addEventListener('click', () => {
      if (map.classList.contains('is-open')) document.dispatchEvent(new Event('ez:page-map-open'));
    });
    document.addEventListener('focusin', event => {
      if (map.classList.contains('is-open') && !map.contains(event.target) && !toggle.contains(event.target)) close();
    });
    map.querySelectorAll('a[data-section]').forEach(link => link.addEventListener('click', close));
    document.addEventListener('click', event => {
      if (map.classList.contains('is-open') && !map.contains(event.target) && event.target !== toggle && !toggle.contains(event.target)) close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && map.classList.contains('is-open')) {
        close();
        toggle.focus();
      }
    });
  }

  function improveMusicReleaseCues() {
    const path = location.pathname.toLowerCase();
    if (!(path.endsWith('/music.html') || path.endsWith('/music'))) return;
    document.querySelectorAll('.release').forEach(card => {
      const label = card.querySelector('span');
      const arrow = card.querySelector('.arrow');
      if (label) label.textContent = 'Play on Spotify';
      if (arrow) arrow.textContent = '▶';
      card.setAttribute('aria-label', `${card.querySelector('strong')?.textContent?.replace(/\s+/g, ' ').trim() || 'Release'} — play on Spotify`);
    });
  }

  function fixMusicSoundCloud() {
    const path = location.pathname.toLowerCase();
    if (!(path.endsWith('/music.html') || path.endsWith('/music'))) return;
    const frame = document.querySelector('.soundcloud iframe');
    if (!frame) return;

    ensureStylesheet('ez-music-fallback', assetUrl('music-fallback-2026.css?v=20260910-1'));
    const container = frame.closest('.soundcloud') || frame.parentElement;
    const trackUrl = 'https://soundcloud.com/haimonix/full-speed-ahead-yacht-rock/s-XCooCM1Kq6V';
    frame.removeAttribute('src');
    frame.style.display = 'none';

    const loading = document.createElement('div');
    loading.className = 'ez-sc-state';
    loading.innerHTML = '<div class="ez-sc-state-inner"><div class="ez-sc-pulse">♪</div><strong>Loading Full Speed Ahead…</strong><p>Resolving the private SoundCloud master.</p></div>';
    container.appendChild(loading);

    fetch('https://soundcloud.com/oembed?format=json&maxheight=320&color=ef1717&auto_play=false&show_comments=false&url=' + encodeURIComponent(trackUrl), { mode: 'cors' })
      .then(response => {
        if (!response.ok) throw new Error('SoundCloud embed unavailable');
        return response.json();
      })
      .then(data => {
        if (!data || !data.html) throw new Error('SoundCloud embed unavailable');
        container.innerHTML = data.html;
        const resolved = container.querySelector('iframe');
        if (resolved) {
          resolved.title = 'Full Speed Ahead by Avi Haimonix on SoundCloud';
          resolved.setAttribute('allow', 'autoplay');
          resolved.setAttribute('loading', 'lazy');
          resolved.style.cssText = 'width:100%;height:300px;border:0;border-radius:17px;display:block';
        }
      })
      .catch(() => {
        container.innerHTML = `<div class="ez-sc-state"><div class="ez-sc-state-inner"><div class="ez-sc-pulse">▶</div><strong>Full Speed Ahead</strong><p>The private SoundCloud master cannot be embedded directly.</p><a href="${trackUrl}" target="_blank" rel="noopener">Open private master ↗</a></div></div>`;
      });
  }

  function loadPageExtensions() {
    const path = location.pathname.toLowerCase();
    if (path.endsWith('/recommendations.html') || path.endsWith('/recommendations')) {
      ensureStylesheet('ez-recommendations-style', assetUrl('recommendations-2026.css?v=20260907-1'));
    }
    if (path.endsWith('/ai-systems.html') || path.endsWith('/ai-systems')) {
      if (!document.querySelector('script[data-ez-ai-systems-extension]')) {
        const script = document.createElement('script');
        script.src = assetUrl('ai-systems-extended.js?v=20260907-1');
        script.dataset.ezAiSystemsExtension = 'true';
        document.head.appendChild(script);
      }
      ensureStylesheet('ez-ai-systems-ratings-style', assetUrl('ai-systems-ratings.css?v=20260908-1'));
      if (!document.querySelector('script[data-ez-ai-systems-ratings]')) {
        const script = document.createElement('script');
        script.src = assetUrl('ai-systems-ratings.js?v=20260908-1');
        script.dataset.ezAiSystemsRatings = 'true';
        document.body.appendChild(script);
      }
    }
    improveMusicReleaseCues();
    fixMusicSoundCloud();
  }

  function init() {
    markPage();
    addStyles();
    syncPageTheme(theme);
    renderHeader();
    installPageMap();
    installAiSystemMap();
    loadPageExtensions();
    applyTheme(theme, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
