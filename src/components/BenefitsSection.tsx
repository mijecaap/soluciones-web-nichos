"use client";

import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}

const benefits: Benefit[] = [
  {
    title: "Rendimiento y Core Web Vitals",
    description:
      "Sitios ultra-rápidos con puntuaciones perfectas en Core Web Vitals (LCP, INP, CLS). La velocidad de carga optimizada mejora tu posicionamiento en Google y reduce la tasa de rebote hasta un 35%.",
    icon: "zap",
    tags: ["LCP < 2.5s", "INP < 200ms", "CLS < 0.1"],
  },
  {
    title: "Diseño UX/UI Responsivo",
    description:
      "Interfaces intuitivas con diseño responsivo adaptable a móvil, tablet y escritorio. Cada elemento de navegación está pensado para maximizar la conversión y cumplir con estándares de accesibilidad web (WCAG).",
    icon: "layout",
    tags: ["Mobile-first", "Accesibilidad"],
  },
  {
    title: "Optimización de Conversión (CRO)",
    description:
      "Landing pages y embudos de venta diseñados para convertir visitantes en clientes. CTAs estratégicos, arquitectura persuasiva y A/B testing para mejorar continuamente tu tasa de conversión.",
    icon: "target",
    tags: ["Landing Pages", "Funnel de Ventas"],
  },
  {
    title: "SEO Técnico y Visibilidad Local",
    description:
      "Posicionamiento SEO técnico y local con datos estructurados (Schema.org), integración con Google My Business, sitemap XML y estrategia de contenido para dominar las búsquedas en tu zona.",
    icon: "mapSearch",
    tags: ["Schema.org", "Google My Business"],
  },
  {
    title: "Automatización e Inteligencia Artificial",
    description:
      "Chatbots con IA, automatización de citas, recordatorios automáticos y flujos de trabajo inteligentes. Tu negocio opera 24/7 sin intervención manual, reduciendo costos operativos.",
    icon: "bot",
    tags: ["Chatbots IA", "Flujos Automáticos"],
  },
  {
    title: "Pagos en Línea y E-commerce",
    description:
      "Pasarelas de pago integradas (Mercado Pago, Niubiz, Izipay), catálogos digitales y tienda online completa. Acepta pagos en línea de forma segura y escala tus ventas digitales en Perú.",
    icon: "creditCard",
    tags: ["E-commerce", "Pagos Seguros"],
  },
  {
    title: "Analítica Web y Decisiones con Datos",
    description:
      "Google Analytics 4 avanzado, métricas de comportamiento de usuario y reportes de rendimiento en tiempo real. Toma decisiones de marketing digital basadas en datos reales, no en suposiciones.",
    icon: "barChart",
    tags: ["GA4", "Métricas en Tiempo Real"],
  },
  {
    title: "Escalabilidad y Transformación Digital",
    description:
      "Arquitectura escalable con tecnología moderna (Next.js, React) que crece con tu negocio. De una landing page a una plataforma SaaS completa: tu transformación digital paso a paso sin rehacer nada.",
    icon: "rocket",
    tags: ["SaaS-ready", "Next.js + React"],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  zap: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  layout: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <circle cx="12" cy="12" r="6" strokeWidth={2} />
      <circle cx="12" cy="12" r="2" strokeWidth={2} />
    </svg>
  ),
  mapSearch: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  bot: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  creditCard: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  barChart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
};

const bentoSpans = [
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tu Socio en Transformación Digital
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            No solo creamos páginas web — diseñamos ecosistemas digitales con
            rendimiento optimizado, experiencia de usuario superior y estrategias
            de conversión que transforman visitantes en clientes fieles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`${bentoSpans[index]} glass-card rounded-2xl p-6 glow-border-hover`}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/15 flex items-center justify-center text-indigo-400 shrink-0"
                >
                  {iconMap[benefit.icon]}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  {benefit.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {benefit.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
