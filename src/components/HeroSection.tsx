"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundGradient?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Solicitar Cotización",
  ctaLink = "/contacto",
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) {
  const words = title.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B] pt-16">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/15 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut",
                }}
                className={`inline-block mr-3 ${
                  i >= Math.floor(words.length / 2) && i < Math.floor(words.length / 2) + 2
                    ? "text-gradient-primary"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={ctaLink}
              onClick={() =>
                trackCTAClick({
                  location: "hero",
                  ctaText: ctaText,
                  destination: ctaLink,
                })
              }
              className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/[0.05] hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090B] to-transparent" />
    </section>
  );
}
