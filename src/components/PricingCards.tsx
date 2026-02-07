"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { trackPricingClick } from "@/lib/analytics";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface PricingCardsProps {
  title?: string;
  subtitle?: string;
  tiers: PricingTier[];
  maintenanceNote?: string;
}

export default function PricingCards({
  title = "Elige Tu Plan",
  subtitle = "Inversión que se paga sola en semanas",
  tiers,
  maintenanceNote,
}: PricingCardsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 h-full flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-b from-indigo-500/10 to-violet-500/5 border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.12)] scale-105 z-10"
                  : "bg-white/[0.03] border border-white/[0.06]"
              }`}
            >
              {/* Shimmer overlay for highlighted card */}
              {tier.highlighted && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 animate-[shimmer_3s_infinite]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)",
                    }}
                  />
                </div>
              )}

              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-400 text-zinc-900 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  {tier.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-2 text-white">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-gradient-primary" : "text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400"
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
                    <span className="text-sm text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaLink || "/contacto"}
                onClick={() =>
                  trackPricingClick({
                    planName: tier.name,
                    isHighlighted: tier.highlighted || false,
                  })
                }
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1]"
                }`}
              >
                {tier.ctaText || "Solicitar Cotización"}
              </Link>
            </motion.div>
          ))}
        </div>

        {maintenanceNote && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-slate-500 mt-8"
          >
            {maintenanceNote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
