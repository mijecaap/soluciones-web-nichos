"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackCTAClick, trackServiceSelected, trackServicesMenuOpen } from "@/lib/analytics";

const nichosPremium = [
  { name: "Veterinarias", href: "/veterinarias" },
  { name: "Salones de Belleza", href: "/salones-belleza" },
  { name: "Restaurantes", href: "/restaurantes" },
  { name: "Odontología", href: "/odontologia" },
  { name: "Agencias de Viajes", href: "/agencias-viajes" },
];

const nichosEconomicos = [
  { name: "Tiendas de Ropa", href: "/tiendas-ropa" },
  { name: "Artesanía", href: "/artesania" },
  { name: "Transporte", href: "/transporte" },
  { name: "Limpieza", href: "/limpieza" },
  { name: "Cafeterías", href: "/cafeterias" },
  { name: "Instructores", href: "/instructores" },
  { name: "Reparaciones", href: "/reparaciones" },
  { name: "Agrícola", href: "/agricola" },
  { name: "Belleza Económico", href: "/belleza-economico" },
  { name: "Freelancers", href: "/freelancers" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNichosOpen, setIsNichosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Web Para Tu Negocio"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <span className="font-[family-name:var(--font-display)] font-bold text-xl text-white hidden sm:block">
              Web Para Tu Negocio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-slate-300 hover:text-white transition-colors font-medium group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Dropdown Nichos */}
            <div
              className="relative"
              onMouseEnter={() => {
                setIsNichosOpen(true);
                trackServicesMenuOpen();
              }}
              onMouseLeave={() => setIsNichosOpen(false)}
            >
              <button className="relative text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1 group">
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isNichosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {isNichosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl py-6 border border-white/[0.08] grid grid-cols-2 gap-2"
                  >
                    <div className="px-4">
                      <p className="px-3 pb-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                        Premium
                      </p>
                      {nichosPremium.map((nicho) => (
                        <Link
                          key={nicho.href}
                          href={nicho.href}
                          onClick={() => trackServiceSelected(nicho.name, true)}
                          className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                        >
                          {nicho.name}
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 border-l border-white/[0.06]">
                      <p className="px-3 pb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                        Económicos
                      </p>
                      {nichosEconomicos.map((nicho) => (
                        <Link
                          key={nicho.href}
                          href={nicho.href}
                          onClick={() => trackServiceSelected(nicho.name, false)}
                          className="block px-3 py-2.5 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                        >
                          {nicho.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contacto"
              className="relative text-slate-300 hover:text-white transition-colors font-medium group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/nosotros"
              className="relative text-slate-300 hover:text-white transition-colors font-medium group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              href="/contacto"
              onClick={() => trackCTAClick({
                location: 'navigation',
                ctaText: 'Cotización Gratis',
                destination: '/contacto',
              })}
              className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Cotización Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/[0.05] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden fixed inset-0 top-16 bg-zinc-950/98 backdrop-blur-xl overflow-y-auto"
            >
              <div className="py-6 px-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>

                <div className="px-4 py-3">
                  <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                    Servicios Premium
                  </p>
                  {nichosPremium.map((nicho) => (
                    <Link
                      key={nicho.href}
                      href={nicho.href}
                      className="block py-2.5 pl-4 text-slate-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {nicho.name}
                    </Link>
                  ))}
                </div>

                <div className="px-4 py-3 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    Servicios Económicos
                  </p>
                  {nichosEconomicos.map((nicho) => (
                    <Link
                      key={nicho.href}
                      href={nicho.href}
                      className="block py-2.5 pl-4 text-slate-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {nicho.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors border-t border-white/[0.06]"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>

                <Link
                  href="/nosotros"
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </Link>

                <div className="px-4 pt-6">
                  <Link
                    href="/contacto"
                    className="block w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-center px-6 py-3.5 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Cotización Gratis
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
