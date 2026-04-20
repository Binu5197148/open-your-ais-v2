/* Editorial motion — IntersectionObserver reveals, reading progress, marquee duplication */

(function () {
  // Mark the page as JS-ready so CSS can safely hide pre-reveal state.
  document.documentElement.classList.add('js-ready');

  // ---- Reveal ----
  const supportsIO = 'IntersectionObserver' in window;
  const io = supportsIO ? new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -4% 0px' }) : null;

  function isInViewport(el) {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }

  function bindReveals(root = document) {
    root.querySelectorAll('[data-reveal]').forEach((el) => {
      const stagger = parseFloat(el.dataset.revealStagger || 0);
      if (stagger) {
        [...el.children].forEach((c, i) => c.style.setProperty('--reveal-delay', `${i * stagger}ms`));
      }
      if (!io) { el.classList.add('is-in'); return; }
      // If already in viewport at bind time, reveal on next frame (avoids missed-observer issue).
      if (isInViewport(el)) {
        requestAnimationFrame(() => el.classList.add('is-in'));
        return;
      }
      io.observe(el);
    });
  }
  bindReveals();
  window.__bindReveals = bindReveals;

  // Safety net: after 1.2s, force-reveal anything still not in — guarantees content is never trapped.
  setTimeout(() => {
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
      if (isInViewport(el)) el.classList.add('is-in');
    });
  }, 1200);

  // ---- Reading progress ----
  const progress = document.querySelector('[data-reading-progress]');
  if (progress) {
    const fill = progress.querySelector('.progress__fill') || progress;
    const article = document.querySelector('[data-article]');
    const update = () => {
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.max(0, Math.min(-rect.top, total));
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      fill.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // ---- Marquee: duplicate track for seamless loop ----
  document.querySelectorAll('.marquee').forEach((m) => {
    const track = m.querySelector('.marquee__track');
    if (!track) return;
    const clone = track.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    m.appendChild(clone);
  });

  // ---- Parallax fallback (no animation-timeline support) ----
  if (!CSS.supports('animation-timeline: view()')) {
    const parallaxEls = document.querySelectorAll('.parallax-up, .parallax-down');
    const onScroll = () => {
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = (vh - rect.top) / (vh + rect.height); // 0..1
        const offset = el.classList.contains('parallax-up') ? (progress - 0.5) * -60 : (progress - 0.5) * 40;
        const scale = el.classList.contains('parallax-up') ? 1.08 : 1;
        el.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Cursor-follow link hover (on nav / large links, subtle) ----
  document.querySelectorAll('[data-cursor-track]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty('--mx', x + '%');
      el.style.setProperty('--my', y + '%');
    });
  });
})();
