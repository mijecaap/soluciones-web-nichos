"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  salon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  restaurant: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  ),
  dental: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  travel: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const niches: Niche[] = [
  {
    title: "Clínicas Veterinarias",
    description: "Sistema de citas online, gestión de pacientes y visibilidad en Google.",
    href: "/veterinarias",
    icon: "veterinary",
    priceRange: "S/3,500 - S/8,000",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Salones de Belleza",
    description: "Reservas automáticas, galería de trabajos y programa de fidelización.",
    href: "/salones-belleza",
    icon: "salon",
    priceRange: "S/3,000 - S/7,000",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Restaurantes y Bares",
    description: "Menú digital, sistema de reservas y pedidos online con pasarela de pago.",
    href: "/restaurantes",
    icon: "restaurant",
    priceRange: "S/4,000 - S/9,500",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Consultorios Odontológicos",
    description: "Presencia profesional, citas online y contenido educativo para pacientes.",
    href: "/odontologia",
    icon: "dental",
    priceRange: "S/5,000 - S/12,000",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Agencias de Viajes",
    description: "Catálogo de tours, reservas multiidioma y pagos internacionales.",
    href: "/agencias-viajes",
    icon: "travel",
    priceRange: "S/5,500 - S/12,000",
    color: "from-violet-500 to-purple-600",
  },
];

interface NicheGridProps {
  title?: string;
  subtitle?: string;
}

export default function NicheGrid({
  title = "Soluciones Especializadas",
  subtitle = "Desarrollamos webs optimizadas para tu industria específica",
}: NicheGridProps) {
  return (
    <section className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, index) => (
            <motion.div
              key={niche.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={niche.href}
                className="group block h-full bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${niche.color}`}
                />
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${niche.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {iconMap[niche.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {niche.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{niche.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {niche.priceRange}
                    </span>
                    <span className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver más
                      <svg
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
  );
}
