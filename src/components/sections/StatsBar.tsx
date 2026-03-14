"use client";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Counter({ to, duration = 1.8, suffix = "", prefix = "" }: { to: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="w-full bg-brand-navy py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl md:text-5xl font-bold text-brand-saffron tabular-nums">
              <Counter to={688} suffix="+" />
            </p>
            <p className="text-sm md:text-base font-medium text-white/80">Women Trained</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl md:text-5xl font-bold text-brand-saffron tabular-nums">
              <Counter to={224} />
            </p>
            <p className="text-sm md:text-base font-medium text-white/80">SHGs Engaged</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl md:text-5xl font-bold text-brand-saffron tabular-nums">
              <Counter to={10} />
            </p>
            <p className="text-sm md:text-base font-medium text-white/80">Districts Covered</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl md:text-5xl font-bold text-brand-saffron tabular-nums">
              <Counter to={5} />
            </p>
            <p className="text-sm md:text-base font-medium text-white/80">States / UTs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
