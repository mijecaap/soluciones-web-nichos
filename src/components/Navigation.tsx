"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
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
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Web Para Tu Negocio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Inicio
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
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform ${isNichosOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isNichosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[500px] bg-white rounded-lg shadow-lg py-4 border border-gray-100 grid grid-cols-2 gap-4"
                  >
                    <div>
                      <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Premium</p>
                      {nichosPremium.map((nicho) => (
                        <Link
                          key={nicho.href}
                          href={nicho.href}
                          onClick={() => trackServiceSelected(nicho.name, true)}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {nicho.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="px-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Económicos</p>
                      {nichosEconomicos.map((nicho) => (
                        <Link
                          key={nicho.href}
                          href={nicho.href}
                          onClick={() => trackServiceSelected(nicho.name, false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
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
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contacto
            </Link>

            <Link
              href="/contacto"
              onClick={() => trackCTAClick({
                location: 'navigation',
                ctaText: 'Cotización Gratis',
                destination: '/contacto',
              })}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Cotización Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-100">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>

                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    Servicios Premium
                  </p>
                  {nichosPremium.map((nicho) => (
                    <Link
                      key={nicho.href}
                      href={nicho.href}
                      className="block py-2 pl-4 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {nicho.name}
                    </Link>
                  ))}
                </div>

                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    Servicios Económicos
                  </p>
                  {nichosEconomicos.map((nicho) => (
                    <Link
                      key={nicho.href}
                      href={nicho.href}
                      className="block py-2 pl-4 text-gray-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {nicho.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>

                <div className="px-4 pt-4">
                  <Link
                    href="/contacto"
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
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
