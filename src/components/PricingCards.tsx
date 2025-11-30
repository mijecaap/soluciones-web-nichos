"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 h-full flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      tier.highlighted
                        ? "bg-amber-400 text-amber-900"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    tier.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-4xl font-bold ${
                      tier.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlighted ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-green-300" : "text-green-500"
                      }`}
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
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaLink || "/contacto"}
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-colors ${
                  tier.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-gray-500 mt-8"
          >
            {maintenanceNote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
