"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { trackNicheCardClick } from "@/lib/analytics";

interface Niche {
  title: string;
  description: string;
  href: string;
  icon: string;
  priceRange: string;
  color: string;
}

const iconMap: Record<string, React.ReactNode> = {
  veterinary: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  salon: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  restaurant: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  ),
  dental: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  travel: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  // New icons for economic niches
  clothing: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  craft: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  transport: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 11V7a2 2 0 012-2h8l4 4v4M3 13h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  cleaning: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  coffee: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h1a4 4 0 110 8h-1m-6-8v8m-4-8v8M6 8h8a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4a2 2 0 012-2z" />
    </svg>
  ),
  instructor: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  repair: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  agriculture: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  salonSmall: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
    </svg>
  ),
  freelancer: (
    <svg aria-hidden="true" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const premiumNiches: Niche[] = [
  {
    title: "Cl\u00ednicas Veterinarias",
    description: "Sistema de citas online, gesti\u00f3n de pacientes y visibilidad en Google.",
    href: "/veterinarias",
    icon: "veterinary",
    priceRange: "S/3,500 - S/8,000",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Salones de Belleza",
    description: "Reservas autom\u00e1ticas, galer\u00eda de trabajos y programa de fidelizaci\u00f3n.",
    href: "/salones-belleza",
    icon: "salon",
    priceRange: "S/3,000 - S/7,000",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Restaurantes y Bares",
    description: "Men\u00fa digital, sistema de reservas y pedidos online con pasarela de pago.",
    href: "/restaurantes",
    icon: "restaurant",
    priceRange: "S/4,000 - S/9,500",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Consultorios Odontol\u00f3gicos",
    description: "Presencia profesional, citas online y contenido educativo para pacientes.",
    href: "/odontologia",
    icon: "dental",
    priceRange: "S/5,000 - S/12,000",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Agencias de Viajes",
    description: "Cat\u00e1logo de tours, reservas multiidioma y pagos internacionales.",
    href: "/agencias-viajes",
    icon: "travel",
    priceRange: "S/5,500 - S/12,000",
    color: "from-violet-500 to-purple-600",
  },
];

const economicNiches: Niche[] = [
  {
    title: "Tiendas de Ropa",
    description: "Cat\u00e1logo digital de productos, galer\u00eda de colecciones y WhatsApp integrado.",
    href: "/tiendas-ropa",
    icon: "clothing",
    priceRange: "S/800 - S/1,200",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "Artesan\u00eda y Productos Locales",
    description: "Galer\u00eda de productos, historia del artesano y sistema de cotizaci\u00f3n.",
    href: "/artesania",
    icon: "craft",
    priceRange: "S/900 - S/1,300",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Servicios de Transporte",
    description: "Informaci\u00f3n de servicios, zonas de cobertura y contacto directo 24/7.",
    href: "/transporte",
    icon: "transport",
    priceRange: "S/700 - S/1,000",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Limpieza y Mantenimiento",
    description: "Portafolio antes/despu\u00e9s, testimonios y lista de servicios con precios.",
    href: "/limpieza",
    icon: "cleaning",
    priceRange: "S/800 - S/1,200",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Cafeter\u00edas y Comidas R\u00e1pidas",
    description: "Men\u00fa digital con fotos, horarios claros y pedidos por WhatsApp.",
    href: "/cafeterias",
    icon: "coffee",
    priceRange: "S/1,000 - S/1,500",
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Instructores y Coaches",
    description: "Bio profesional, servicios y precios, testimonios de alumnos.",
    href: "/instructores",
    icon: "instructor",
    priceRange: "S/800 - S/1,200",
    color: "from-indigo-500 to-violet-600",
  },
  {
    title: "Reparaci\u00f3n y Servicios T\u00e9cnicos",
    description: "Lista de servicios, precios y oferta de diagn\u00f3stico gratis.",
    href: "/reparaciones",
    icon: "repair",
    priceRange: "S/700 - S/1,000",
    color: "from-slate-500 to-gray-600",
  },
  {
    title: "Productores Agr\u00edcolas",
    description: "Cat\u00e1logo de productos, certificaciones y proceso productivo.",
    href: "/agricola",
    icon: "agriculture",
    priceRange: "S/900 - S/1,300",
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Salones de Belleza Peque\u00f1os",
    description: "Reservas simples online, galer\u00eda de trabajos y recordatorios.",
    href: "/belleza-economico",
    icon: "salonSmall",
    priceRange: "S/1,000 - S/1,500",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Consultores y Freelancers",
    description: "Portafolio profesional, casos de \u00e9xito y CV descargable.",
    href: "/freelancers",
    icon: "freelancer",
    priceRange: "S/800 - S/1,200",
    color: "from-gray-500 to-slate-600",
  },
];

export default function NicheGrid() {
  const premiumRef = useRef(null);
  const economicRef = useRef(null);
  const isPremiumInView = useInView(premiumRef, { once: true, amount: 0.1 });
  const isEconomicInView = useInView(economicRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Premium Section */}
      <section ref={premiumRef} className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPremiumInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-4">
              Premium
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
              Soluciones Premium
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Para negocios establecidos que buscan crecer con funcionalidades avanzadas
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {premiumNiches.map((niche, index) => (
              <motion.div
                key={niche.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isPremiumInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${
                  index === 0 ? "md:col-span-4" : "md:col-span-2"
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${niche.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-500`}
                />
                <Link
                  href={niche.href}
                  onClick={() =>
                    trackNicheCardClick({
                      niche: niche.title,
                      isPremium: true,
                      priceRange: niche.priceRange,
                    })
                  }
                  className="relative block h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${niche.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {iconMap[niche.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-2">
                      {niche.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{niche.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <span className="text-sm font-medium text-slate-300">
                        {niche.priceRange}
                      </span>
                      <span className="text-slate-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver más
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="relative py-16 bg-[#09090B]">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
            ¿Recién empezando tu negocio?
          </h2>
          <p className="text-lg text-slate-400 mb-6">
            Tenemos soluciones económicas perfectas para emprendedores y pequeños negocios.
            Presencia web profesional desde{" "}
            <span className="font-bold text-white">S/700</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Dominio incluido",
              "Hosting incluido",
              "WhatsApp integrado",
              "Google My Business",
            ].map((feature) => (
              <span
                key={feature}
                className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.05] border border-white/[0.08] text-slate-300 rounded-full"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-emerald-400"
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
                {feature}
              </span>
            ))}
          </div>
        </div>
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </section>

      {/* Economic Section */}
      <section ref={economicRef} id="economicos" className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isEconomicInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full mb-4">
              Desde S/700
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)] mb-4">
              Soluciones Económicas
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Perfectas para emprendedores y pequeños negocios que quieren dar el salto digital
            </p>
          </motion.div>

          {/* 5-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {economicNiches.map((niche, index) => (
              <motion.div
                key={niche.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isEconomicInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${niche.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-500`}
                />
                <Link
                  href={niche.href}
                  onClick={() =>
                    trackNicheCardClick({
                      niche: niche.title,
                      isPremium: false,
                      priceRange: niche.priceRange,
                    })
                  }
                  className="relative block h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${niche.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {iconMap[niche.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)] mb-2">
                      {niche.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{niche.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <span className="text-sm font-medium text-slate-300">
                        {niche.priceRange}
                      </span>
                      <span className="text-slate-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Ver más
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
