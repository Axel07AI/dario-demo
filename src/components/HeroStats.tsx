"use client";

import { useEffect, useRef, useState } from "react";

interface StatConfig {
  end: number;
  suffix: string;
  label: string;
  decimal?: boolean;
}

const stats: StatConfig[] = [
  { end: 15, suffix: "+", label: "år i branschen" },
  { end: 1000, suffix: "+", label: "nöjda kunder" },
  { end: 4.9, suffix: "★", label: "Google-betyg", decimal: true },
];

function AnimatedCounter({ end, suffix, label, decimal = false }: StatConfig) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      setValue(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(end);
    };

    requestAnimationFrame(animate);
  }, [started, end, decimal]);

  const display = decimal ? value.toFixed(1) : value.toLocaleString("sv-SE");

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif font-bold text-3xl md:text-4xl text-white mb-1.5 leading-none">
        {display}
        <span className="text-[#B87333]">{suffix}</span>
      </div>
      <div className="text-white/35 text-[10px] tracking-[0.3em] uppercase">{label}</div>
    </div>
  );
}

export default function HeroStats() {
  return (
    <div className="mt-14 pt-10 border-t border-white/8 max-w-sm mx-auto grid grid-cols-3 gap-6">
      {stats.map((stat) => (
        <AnimatedCounter key={stat.label} {...stat} />
      ))}
    </div>
  );
}
