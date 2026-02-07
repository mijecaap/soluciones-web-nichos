"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ChecklistProps {
  title?: string;
  subtitle?: string;
  items: string[];
}

export default function Checklist({
  title = "Lo Que Incluye",
  subtitle = "Todo lo que obtienes con tu paquete",
  items,
}: ChecklistProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-slate-300">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
