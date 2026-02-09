export default function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const els = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) el.classList.add(`reveal-delay-${delay}`);
        el.classList.add('reveal');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}
