'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Counts up to `target` while the element is in view, and resets when it
 * scrolls away — the same behaviour as the original landing.
 */
export default function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const start = useRef<number | null>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const DUR = 1600;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const visible = r.top < window.innerHeight * 0.9 && r.bottom > 0;
      if (!visible) {
        if (start.current) { start.current = null; setV(0); }
        return;
      }
      if (!start.current) start.current = performance.now();
      const p = Math.min(1, (performance.now() - start.current) / DUR);
      if (p >= 1) return;
      const eased = 1 - Math.pow(1 - p, 3);
      setV(p + 0.1 >= 1 ? target : Math.round(target * eased));
    }, 100);
    return () => clearInterval(id);
  }, [target]);

  return <span ref={ref}>{v.toLocaleString('es-CL')}</span>;
}
