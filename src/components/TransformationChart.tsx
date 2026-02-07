"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TransformationData {
  before: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  after: {
    metric1: { label: string; value: string; improvement: string };
    metric2: { label: string; value: string; improvement: string };
    metric3: { label: string; value: string; improvement: string };
  };
  roi: string;
}

interface TransformationChartProps {
  title?: string;
  subtitle?: string;
  data: TransformationData;
}

export default function TransformationChart({
  title = "Tu Transformación",
  subtitle = "Resultados reales que puedes esperar",
  data,
}: TransformationChartProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#09090B] overflow-hidden">
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-500 font-[family-name:var(--font-display)]">
                ANTES
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-600 text-sm uppercase tracking-wider mb-1">
                  {data.before.metric1.label}
                </p>
                <p className="text-3xl font-bold text-slate-500">
                  {data.before.metric1.value}
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-sm uppercase tracking-wider mb-1">
                  {data.before.metric2.label}
                </p>
                <p className="text-3xl font-bold text-slate-500">
                  {data.before.metric2.value}
                </p>
              </div>
              <div>
                <p className="text-slate-600 text-sm uppercase tracking-wider mb-1">
                  {data.before.metric3.label}
                </p>
                <p className="text-3xl font-bold text-slate-500">
                  {data.before.metric3.value}
                </p>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-emerald-500/[0.05] border border-emerald-500/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 font-[family-name:var(--font-display)]">
                DESPUÉS
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                  {data.after.metric1.label}
                </p>
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-bold text-emerald-400">
                    {data.after.metric1.value}
                  </p>
                  <span className="text-emerald-300/80 text-sm font-medium pb-1">
                    {data.after.metric1.improvement}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                  {data.after.metric2.label}
                </p>
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-bold text-emerald-400">
                    {data.after.metric2.value}
                  </p>
                  <span className="text-emerald-300/80 text-sm font-medium pb-1">
                    {data.after.metric2.improvement}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">
                  {data.after.metric3.label}
                </p>
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-bold text-emerald-400">
                    {data.after.metric3.value}
                  </p>
                  <span className="text-emerald-300/80 text-sm font-medium pb-1">
                    {data.after.metric3.improvement}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ROI Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 px-8 py-4 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <svg
              className="w-8 h-8 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xl font-bold text-amber-300/90">
              ROI Esperado: {data.roi}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
