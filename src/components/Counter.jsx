import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ end = 0, duration = 1500, suffix = '', className = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const from = 0;
          const to = Number(end) || 0;
          const step = (ts) => {
            const now = performance.now();
            const t = Math.min(1, (now - start) / duration);
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad
            const current = Math.round(from + (to - from) * eased);
            setValue(current);
            if (t < 1) requestAnimationFrame(step);
            else setValue(to);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <div className={`counter ${className}`} ref={ref} aria-hidden="false">
      <span className="counter-value">{value}</span>
      {suffix && <span className="counter-suffix">{suffix}</span>}
    </div>
  );
};

export default Counter;
