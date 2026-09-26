/**
 * Hero background: a drifting point cloud linked like a SLAM pose graph, with a
 * rotating "LiDAR" sweep that lights points up as it passes. ~0 dependencies,
 * pauses off-screen, and renders a single static frame for reduced motion.
 */
type P = { x: number; y: number; vx: number; vy: number; r: number; hit: number };

function hexToRgb(value: string): [number, number, number] {
  const hex = value.trim().replace('#', '');
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  const n = parseInt(full, 16);
  if (Number.isNaN(n)) return [200, 200, 200];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function initParticleField(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0;
  let h = 0;
  let dpr = 1;
  let pts: P[] = [];
  let fg: [number, number, number] = [232, 237, 244];
  let accent: [number, number, number] = [245, 165, 36];
  let running = false;
  let visible = true;
  let raf = 0;
  let sweep = 0;
  const mouse = { x: -9999, y: -9999, active: false };

  const readColors = () => {
    const cs = getComputedStyle(document.documentElement);
    fg = hexToRgb(cs.getPropertyValue('--fg'));
    accent = hexToRgb(cs.getPropertyValue('--accent'));
  };

  const seed = () => {
    const target = Math.round(Math.min(130, Math.max(36, (w * h) / 11000)));
    pts = Array.from({ length: target }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.3 + 0.6,
      hit: 0,
    }));
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = rect.width;
    h = rect.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
    if (!running) draw(0);
  };

  const rgba = (c: [number, number, number], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

  const draw = (dt: number) => {
    ctx.clearRect(0, 0, w, h);
    const link = Math.min(150, Math.max(90, w / 10));
    const cx = w * 0.72;
    const cy = h * 0.46;
    sweep = (sweep + dt * 0.00055) % (Math.PI * 2);

    // sweep wedge
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.7);
    grad.addColorStop(0, rgba(accent, 0.07));
    grad.addColorStop(1, rgba(accent, 0));
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, Math.max(w, h), sweep - 0.35, sweep);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    for (const p of pts) {
      if (dt > 0) {
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120 && d2 > 1) {
            const f = (1 - Math.sqrt(d2) / 120) * 0.6;
            p.x += (dx / Math.sqrt(d2)) * f;
            p.y += (dy / Math.sqrt(d2)) * f;
          }
        }
        let a = Math.atan2(p.y - cy, p.x - cx);
        if (a < 0) a += Math.PI * 2;
        // signed angle from the point to the sweep's leading edge, wrapped to [-π, π)
        const behind = ((sweep - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        if (behind >= 0 && behind < 0.06) p.hit = 1;
        p.hit *= 0.985;
      }
    }

    // pose-graph edges
    ctx.lineWidth = 0.7;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < link * link) {
          const alpha = (1 - Math.sqrt(d2) / link) * 0.16;
          const lit = Math.max(a.hit, b.hit);
          ctx.strokeStyle = lit > 0.05 ? rgba(accent, alpha * (1 + lit * 2)) : rgba(fg, alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // sensor rays from the cursor
    if (mouse.active) {
      for (const p of pts) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 180) {
          ctx.strokeStyle = rgba(accent, (1 - d / 180) * 0.35);
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    }

    // points
    for (const p of pts) {
      ctx.fillStyle = p.hit > 0.05 ? rgba(accent, 0.5 + p.hit * 0.5) : rgba(fg, 0.45);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r + p.hit * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  let last = performance.now();
  const loop = (now: number) => {
    const dt = Math.min(48, now - last);
    last = now;
    draw(dt);
    raf = requestAnimationFrame(loop);
  };
  const start = () => {
    if (running || reduce || !visible || document.hidden) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  readColors();
  resize();
  new ResizeObserver(() => resize()).observe(canvas);
  window.addEventListener('themechange', () => {
    readColors();
    if (!running) draw(0);
  });

  const host = canvas.parentElement ?? canvas;
  host.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = e.pointerType === 'mouse';
  });
  host.addEventListener('pointerleave', () => {
    mouse.active = false;
  });

  new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
    if (visible) start();
    else stop();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  start();
}
