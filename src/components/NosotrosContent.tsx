"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";

const stats = [
  { value: "150+", label: "Proyectos Completados" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "5+", label: "Años de Experiencia" },
  { value: "15", label: "Nichos Especializados" },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Resultados Garantizados",
    description: "No solo creamos sitios bonitos. Creamos herramientas de negocio que generan clientes y ventas.",
    color: "indigo",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Velocidad y Eficiencia",
    description: "Entregamos proyectos en tiempo récord sin sacrificar calidad. Tu tiempo es valioso.",
    color: "amber",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Soporte Personalizado",
    description: "No somos una agencia impersonal. Conocemos tu negocio y te acompañamos en cada paso.",
    color: "emerald",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovación Constante",
    description: "Nos mantenemos actualizados con las últimas tendencias y tecnologías del mercado.",
    color: "violet",
  },
];

const expertise = [
  "Next.js & React",
  "SEO Técnico y On-Page",
  "Diseño UI/UX",
  "Optimización de Conversión",
  "WordPress & WooCommerce",
  "Google Analytics & Search Console",
  "Core Web Vitals",
  "Marketing Digital",
];

const valueColorMap: Record<string, { icon: string; border: string; glow: string }> = {
  indigo: {
    icon: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
    border: "hover:border-indigo-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]",
  },
  amber: {
    icon: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    border: "hover:border-amber-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.06)]",
  },
  emerald: {
    icon: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    border: "hover:border-emerald-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]",
  },
  violet: {
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    border: "hover:border-violet-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.06)]",
  },
};

export default function NosotrosContent() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#09090B] overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Transformamos Negocios Locales en{" "}
              <span className="text-gradient-primary">Éxitos Digitales</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Somos un equipo apasionado por ayudar a emprendedores y pequeños negocios
              en Perú a crecer mediante soluciones web profesionales y accesibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-[#09090B] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2 font-[family-name:var(--font-display)]">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Web Para Tu Negocio nació de una frustración: ver cómo excelentes
                  negocios locales perdían clientes simplemente por no tener presencia
                  digital o tener sitios web obsoletos que no generaban resultados.
                </p>
                <p>
                  Después de años trabajando en desarrollo web y marketing digital,
                  decidimos especializarnos en ayudar a negocios específicos: veterinarias,
                  restaurantes, salones de belleza, consultorios y más.
                </p>
                <p>
                  <strong className="text-white">¿Por qué nichos específicos?</strong> Porque conocer profundamente
                  cada industria nos permite crear soluciones que realmente funcionan.
                  Sabemos qué necesita una veterinaria (sistema de citas, historial de
                  pacientes) y qué necesita un restaurante (menú digital, reservas).
                </p>
                <p>
                  Hoy, hemos ayudado a más de 150 negocios en Perú a transformar su
                  presencia digital y aumentar sus ingresos. Y apenas estamos comenzando.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 rounded-2xl p-8">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white text-2xl font-bold font-[family-name:var(--font-display)]">
                      WN
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Web Para Tu Negocio</h3>
                      <p className="text-slate-500 text-sm">Lima, Perú</p>
                    </div>
                  </div>
                  <p className="text-slate-400 italic">
                    &ldquo;Creemos que cada negocio merece una presencia digital
                    profesional, sin importar su tamaño o presupuesto.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Values Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Lo que nos diferencia de otras agencias de desarrollo web
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const colors = valueColorMap[value.color];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white/[0.03] border border-white/[0.06] p-6 rounded-2xl flex gap-4 ${colors.border} ${colors.glow} transition-all duration-300`}
                >
                  <div className={`w-14 h-14 border rounded-xl flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Expertise Section */}
      <section className="py-24 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestra Experiencia Técnica
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Utilizamos las mejores tecnologías para garantizar resultados
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/[0.05] border border-white/[0.08] text-slate-300 rounded-full font-medium hover:border-indigo-500/30 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Por Qué Confiar en Nosotros?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Pagos Seguros</h3>
              <p className="text-slate-400">
                Trabajamos con contratos claros y pagos en etapas para tu tranquilidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Comunicación Directa</h3>
              <p className="text-slate-400">
                Hablamos contigo directamente por WhatsApp. Sin intermediarios ni demoras.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-amber-500/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-amber-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Garantía de 60 Días</h3>
              <p className="text-slate-400">
                Corregimos cualquier error de programación sin costo adicional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a crecer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-full font-semibold shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-300"
              >
                Agendar Consulta Gratis
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, me interesa conocer más sobre sus servicios")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
