"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {n.toLocaleString("es-AR")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="container-x grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="display text-5xl text-accent md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mx-auto mt-2 max-w-[10rem] text-sm text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
