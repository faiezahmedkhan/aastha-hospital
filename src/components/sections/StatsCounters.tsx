"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function Counter({ value, suffix = "", label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (duration * 60)); // 60fps approximation
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <h3 className="font-heading text-4xl md:text-5xl text-foreground font-light mb-4">
        {count}
        <span className="text-stone-400">{suffix}</span>
      </h3>
      <p className="text-stone-500 font-medium uppercase tracking-[0.2em] text-xs">
        {label}
      </p>
    </div>
  );
}

export function StatsCounters() {
  const stats = [
    { value: 500, suffix: "+", label: "Events Curated" },
    { value: 300, suffix: "+", label: "Happy Couples" },
    { value: 8, suffix: "+", label: "Years Defining Luxury" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[90rem]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-y border-stone-100 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Counter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
