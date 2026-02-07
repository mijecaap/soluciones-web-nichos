import Link from "next/link";

const nicheLinks = [
  { name: "Veterinarias", href: "/veterinarias" },
  { name: "Salones de Belleza", href: "/salones-belleza" },
  { name: "Restaurantes", href: "/restaurantes" },
  { name: "Odontología", href: "/odontologia" },
  { name: "Agencias de Viajes", href: "/agencias-viajes" },
  { name: "Tiendas de Ropa", href: "/tiendas-ropa" },
  { name: "Cafeterías", href: "/cafeterias" },
  { name: "Freelancers", href: "/freelancers" },
];

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#09090B] px-4">
      <div className="text-center max-w-lg">
        <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
          Error 404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Página no encontrada
        </h2>
        <p className="text-slate-400 mb-8">
          La página que buscas no existe o fue movida a otra ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/contacto"
            className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300"
          >
            Contactar
          </Link>
        </div>

        <nav className="mt-12" aria-label="Secciones principales">
          <p className="text-slate-500 text-sm mb-4">
            O visita alguna de nuestras secciones:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {nicheLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-slate-400 bg-white/[0.03] border border-white/[0.06] rounded-full hover:text-indigo-400 hover:border-indigo-500/20 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
