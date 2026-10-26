// Small helpers
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export const html = (strings, ...values) =>
  strings.reduce((acc, str, i) => acc + str + (values[i] ?? ''), '');

export const mount = (selectorOrEl, markup) => {
  const el = typeof selectorOrEl === 'string' ? $(selectorOrEl) : selectorOrEl;
  if (!el) return;
  el.innerHTML = markup;
  return el;
};

export const append = (selectorOrEl, markup) => {
  const el = typeof selectorOrEl === 'string' ? $(selectorOrEl) : selectorOrEl;
  if (!el) return;
  el.insertAdjacentHTML('beforeend', markup);
  return el;
};

export const fmtNum = (n) => Number(n).toLocaleString('en-US');

export const fmtMoney = (n, cur = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: cur, maximumFractionDigits: 2 }).format(n);

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export const toInt = (v, dflt = 0) => {
  const n = parseInt(String(v).replace(/[,\s]/g, ''), 10);
  return Number.isFinite(n) ? n : dflt;
};
export const toNum = (v, dflt = 0) => {
  const n = Number(String(v).replace(/[,\s]/g, ''));
  return Number.isFinite(n) ? n : dflt;
};

// Logo URLs
export const logoUrl = (domain, size = 128) =>
  `https://logo.clearbit.com/${domain}?size=${size}`;

// Avatars via DiceBear (reliable public avatar service)
export const avatarUrl = (seed) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear&backgroundColor=2f5efc,22d3ee,8b5cf6`;

// Simple count-up animation
export const countUp = (el, { from = 0, to = 0, duration = 1500, formatter = fmtNum } = {}) => {
  if (!el) return;
  const start = performance.now();
  const step = (now) => {
    const t = clamp((now - start) / duration, 0, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - t, 3);
    const value = from + (to - from) * eased;
    el.textContent = formatter(Math.round(value));
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = formatter(to);
  };
  requestAnimationFrame(step);
};

// IntersectionObserver reveal
export const observeReveal = (root = document) => {
  const items = $$('.reveal', root);
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
};

// One-time observer for counting up stats
export const observeOnce = (el, cb, options = { threshold: 0.3 }) => {
  if (!el) return;
  if (!('IntersectionObserver' in window)) { cb(); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { cb(); io.disconnect(); }
    });
  }, options);
  io.observe(el);
};
