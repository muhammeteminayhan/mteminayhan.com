import { initParticleField } from './particles';
import { initContactForm } from './contact';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---------- Header background once the page scrolls ---------- */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.setAttribute('data-scrolled', String(window.scrollY > 8));
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Theme toggle ---------- */
function initTheme() {
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* private mode: theme just won't persist */
      }
      window.dispatchEvent(new CustomEvent('themechange'));
    });
  });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const btn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  const setOpen = (open: boolean) => {
    menu.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', (open ? btn.dataset.labelClose : btn.dataset.labelOpen) ?? '');
    btn.querySelector('.menu-open')?.classList.toggle('hidden', open);
    btn.querySelector('.menu-close')?.classList.toggle('hidden', !open);
    document.getElementById('site-header')?.setAttribute('data-scrolled', String(open || window.scrollY > 8));
  };
  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Animated counters ---------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  const render = (el: HTMLElement, v: number) => {
    const decimals = Number(el.dataset.decimals ?? 0);
    el.textContent = `${el.dataset.prefix ?? ''}${v.toFixed(decimals)}${el.dataset.suffix ?? ''}`;
  };
  if (reduceMotion || !('IntersectionObserver' in window)) return; // server-rendered final values stay
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        io.unobserve(el);
        const target = Number(el.dataset.count);
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          render(el, target * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        render(el, 0);
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Card tilt ---------- */
function initTilt() {
  if (reduceMotion || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const max = 5;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-2px)`;
      card.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
      card.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}

/* ---------- Typewriter ---------- */
function initTypewriter() {
  document.querySelectorAll<HTMLElement>('[data-typewriter]').forEach((el) => {
    const words: string[] = JSON.parse(el.dataset.words ?? '[]');
    const out = el.querySelector<HTMLElement>('[data-typewriter-text]');
    if (!out || words.length === 0 || reduceMotion) return;
    let w = 0;
    let i = words[0].length;
    let deleting = true;
    const step = () => {
      const word = words[w];
      if (deleting) {
        i--;
        out.textContent = word.slice(0, i);
        if (i <= 0) {
          deleting = false;
          w = (w + 1) % words.length;
          return setTimeout(step, 300);
        }
        return setTimeout(step, 38);
      }
      const next = words[w];
      i++;
      out.textContent = next.slice(0, i);
      if (i >= next.length) {
        deleting = true;
        return setTimeout(step, 2200);
      }
      return setTimeout(step, 70);
    };
    setTimeout(step, 2400);
  });
}

/* ---------- Copy to clipboard ---------- */
function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const label = btn.querySelector<HTMLElement>('[data-copy-label]');
      try {
        await navigator.clipboard.writeText(btn.dataset.copy ?? '');
        if (label) {
          const prev = label.textContent;
          label.textContent = btn.dataset.copied ?? 'Copied';
          setTimeout(() => (label.textContent = prev), 1800);
        }
      } catch {
        window.location.href = `mailto:${btn.dataset.copy}`;
      }
    });
  });
}

/* ---------- Project filter ---------- */
function initFilter() {
  const root = document.querySelector<HTMLElement>('[data-filter-root]');
  if (!root) return;
  const buttons = root.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const items = document.querySelectorAll<HTMLElement>('[data-categories]');
  const count = document.querySelector<HTMLElement>('[data-filter-count]');
  const apply = (cat: string) => {
    let n = 0;
    items.forEach((item) => {
      const show = cat === 'all' || (item.dataset.categories ?? '').split(' ').includes(cat);
      item.hidden = !show;
      if (show) {
        n++;
        item.classList.add('is-visible');
      }
    });
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === cat)));
    if (count) count.textContent = String(n);
  };
  buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter ?? 'all')));
  const fromHash = window.location.hash.replace('#', '');
  if ([...buttons].some((b) => b.dataset.filter === fromHash)) apply(fromHash);
}

/* ---------- Gallery lightbox ---------- */
function initLightbox() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox]');
  if (!dialog) return;
  const img = dialog.querySelector<HTMLImageElement>('img');
  const cap = dialog.querySelector<HTMLElement>('[data-lightbox-caption]');
  document.querySelectorAll<HTMLButtonElement>('[data-lightbox-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!img) return;
      img.src = btn.dataset.full ?? '';
      img.alt = btn.dataset.alt ?? '';
      if (cap) cap.textContent = btn.dataset.caption ?? '';
      dialog.showModal();
    });
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || (e.target as HTMLElement).closest('[data-lightbox-close]')) dialog.close();
  });
}

initHeader();
initTheme();
initMenu();
initReveal();
initCounters();
initTilt();
initTypewriter();
initCopy();
initFilter();
initLightbox();
initContactForm();
document.querySelectorAll<HTMLCanvasElement>('canvas[data-particles]').forEach((c) => initParticleField(c));
