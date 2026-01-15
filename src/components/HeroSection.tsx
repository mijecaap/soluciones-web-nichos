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
  eyebrow?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Solicitar Cotización",
  ctaLink = "/contacto",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundGradient = "from-blue-600 to-blue-800",
  eyebrow = "Estudio digital para negocios locales",
  highlights = [
    "Estrategia de conversión y SEO local",
    "Diseño editorial, rápido y optimizado",
    "Contenido listo para WhatsApp y reservas",
  ],
  metrics = [
    { label: "Tiempo promedio", value: "15-21 días" },
    { label: "Inversión desde", value: "S/700" },
    { label: "Soporte activo", value: "12 meses" },
  ],
  deliverables = [
    "Estructura web pensada en ventas",
    "Copywriting y mensajes listos para convertir",
    "Configuración de Google y analítica",
  ],
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${backgroundGradient} text-white pt-20`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={ctaLink}
                onClick={() => trackCTAClick({
                  location: "hero",
                  ctaText: ctaText,
                  destination: ctaLink,
                })}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                {ctaText}
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  href={secondaryCtaLink}
                  className="border border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-white/70">
                <span>Resultados claros</span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                  Enfocado en ROI
                </span>
              </div>
              <div className="mt-8 grid gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between border-b border-white/15 pb-4 text-sm last:border-b-0 last:pb-0"
                  >
                    <p className="text-white/70">{metric.label}</p>
                    <p className="text-2xl font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Entregables clave
                </p>
                <ul className="mt-4 space-y-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/25 bg-white/15 px-5 py-4 text-sm text-white/80 shadow-xl backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Agenda clara
              </p>
              <p className="mt-2 font-semibold">Kickoff en 48 horas</p>
              <p className="text-white/70">Checklist + lineamientos listos.</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
