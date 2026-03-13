"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
};

export default function StatsBar() {
  return (
    <section className="w-full bg-brand-navy py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-brand-saffron">
              <Counter from={0} to={688} suffix="+" />
            </h3>
            <p className="text-sm md:text-base uppercase tracking-widest text-white/80 font-medium">
              Women Trained
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-brand-saffron">
              <Counter from={0} to={224} />
            </h3>
            <p className="text-sm md:text-base uppercase tracking-widest text-white/80 font-medium">
              SHGs Engaged
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-brand-saffron">
              <Counter from={0} to={10} />
            </h3>
            <p className="text-sm md:text-base uppercase tracking-widest text-white/80 font-medium">
              Districts Covered
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-brand-saffron">
              <Counter from={0} to={5} />
            </h3>
            <p className="text-sm md:text-base uppercase tracking-widest text-white/80 font-medium">
              States & UTs
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
