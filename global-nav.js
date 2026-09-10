(() => {
  'use strict';

  const VERSION = '20260910-site-ui-2';
  const ROOT = 'https://its-ez.com/';
  const ASSET_VERSION = '20260910-site-ui-2';
  const THEME_KEY = 'ez-site-theme';
  const scriptSrc = document.currentScript?.src || `${ROOT}global-nav.js`;
  const ASSET_ROOT = new URL('./', scriptSrc).href;
  const previewHost = /(^|\.)raw\.githack\.com$/i.test(location.hostname);
  const SITE_ROOT = previewHost ? ASSET_ROOT : ROOT;
  const assetUrl = path => new URL(path, ASSET_ROOT).href;

  const navItems = [
    ['Home', SITE_ROOT],
    ['Work', SITE_ROOT + '#work'],
    ['Services', SITE_ROOT + 'work-with-me.html'],
    ['Revenue Hub', SITE_ROOT + 'revenue-performance.html'],
    ['AI Systems', SITE_ROOT + 'ai-systems.html'],
    ['MEDDPICC', 'https://meddpicc-is-ez.erezhaimowicz.workers.dev/'],
    ['Cybersecurity', 'https://ez-human-threat-academy.erezhaimowicz.workers.dev/'],
    ['Music', SITE_ROOT + 'music.html'],
    ['Recommendations', SITE_ROOT + 'recommendations.html'],
    ['Contact', SITE_ROOT + '#contact']
  ];

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

  function paintThemeButton(button) {
    if (!button) return;
    const dark = theme === 'dark';
    button.textContent = dark ? '☀' : '☾';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', dark ? 'Light mode' : 'Dark mode');
    button.setAttribute('aria-pressed', String(dark));
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

    paintThemeButton(document.querySelector('.ez-theme-toggle'));
    document.dispatchEvent(new CustomEvent('ez:themechange', { detail: { theme } }));
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

  function renderHeader() {
    const old = document.querySelector('header.site-header, .site-header');
    const header = document.createElement('header');
    header.className = 'ez-global-header';
    header.dataset.version = VERSION;
    header.innerHTML = `
      <div class="ez-global-shell">
        <a class="ez-global-brand" href="${SITE_ROOT}" aria-label="EZ Enablement home">
          <span class="ez-global-mark">E<b>Z</b></span>
          <span class="ez-global-brand-copy"><strong>EZ ENABLEMENT</strong><span>Enablement made possible</span></span>
        </a>
        <nav class="ez-global-links" id="ez-global-links" aria-label="Primary navigation">
          ${navItems.map(([label, href]) => `<a href="${href}" data-ez-label="${label}">${label}</a>`).join('')}
        </nav>
        <button class="ez-theme-toggle" type="button" aria-label="Switch color mode"></button>
        <a class="ez-global-cta" href="${SITE_ROOT}#contact">Let's connect</a>
        <button class="ez-global-menu" type="button" aria-expanded="false" aria-controls="ez-global-links" aria-label="Open navigation">☰</button>
      </div>`;

    if (old) old.replaceWith(header);
    else document.body.prepend(header);

    const links = header.querySelector('.ez-global-links');
    const menu = header.querySelector('.ez-global-menu');
    const themeButton = header.querySelector('.ez-theme-toggle');

    const updateActive = () => {
      header.querySelectorAll('.ez-global-links a').forEach(a => {
        if (currentFor(a.dataset.ezLabel, a.href)) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
      });
    };

    const closeMenu = (restoreFocus = false) => {
      header.classList.remove('is-open');
      document.body.classList.remove('ez-nav-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
      menu.textContent = '☰';
      if (restoreFocus) menu.focus();
    };

    paintThemeButton(themeButton);
    updateActive();

    themeButton.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark'));
    menu.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      document.body.classList.toggle('ez-nav-open', open);
      if (open) document.dispatchEvent(new Event('ez:close-page-map'));
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.textContent = open ? '×' : '☰';
    });

    links.addEventListener('click', event => {
      if (event.target.closest('a')) {
        closeMenu();
        setTimeout(updateActive, 0);
      }
    });

    document.addEventListener('click', event => {
      if (header.classList.contains('is-open') && !header.contains(event.target)) closeMenu();
    });
    document.addEventListener('focusin', event => {
      if (header.classList.contains('is-open') && !header.contains(event.target)) closeMenu();
    });
    document.addEventListener('ez:page-map-open', () => closeMenu());
    window.addEventListener('hashchange', updateActive);
    window.addEventListener('popstate', updateActive);
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1240) closeMenu();
    }, { passive: true });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && header.classList.contains('is-open')) closeMenu(true);
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

    toggle.textContent = '☷ System map';
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
