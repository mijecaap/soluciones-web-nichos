import { Metadata } from "next";
import Link from "next/link";
import {
  Paintbrush,
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  GraduationCap,
  Users,
  TrendingDown,
  Wallet,
  type LucideProps,
} from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import FAQSchema from "@/components/FAQSchema";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";

type IconComponent = React.FC<LucideProps>;

export const metadata: Metadata = {
  title: "¿Cuánto Cuesta una Página Web en Perú? Precios y Cotización 2026",
  description:
    "Precios de páginas web en Perú 2026: desde S/699 el Plan Esencial. Diseño profesional, hosting, SSL y SEO incluidos. Cotización personalizada gratis en 24 horas. Compara planes y elige el ideal para tu negocio.",
  keywords: [
    "cuanto cuesta una pagina web peru",
    "cuanto cuesta una pagina web en peru",
    "precio de pagina web peru",
    "precio pagina web peru",
    "precios de paginas web peru",
    "precio de pagina web",
    "precios de paginas web",
    "paginas web precio",
    "cotizacion pagina web peru",
    "cuanto cuesta hacer una pagina web peru",
    "cuanto cuesta crear una pagina web peru",
    "pagina web precio peru",
    "diseño de páginas web precios",
    "diseño de páginas web precio",
  ],
  alternates: {
    canonical: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
  },
  openGraph: {
    title: "¿Cuánto Cuesta una Página Web en Perú? Precios y Cotización 2026",
    description:
      "Precios desde S/699. Plan Esencial, Profesional y Avanzado para tu negocio. Cotización gratis y sin compromiso en 24 horas.",
    url: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Cuánto cuesta una página web en Perú en 2026?",
    answer:
      "El costo varía según el tipo de negocio, las funcionalidades que necesitas y el nivel de personalización. No existe un precio único porque cada negocio es diferente. Por eso ofrecemos cotizaciones personalizadas — gratuitas y sin compromiso — para darte el precio exacto que se ajusta a lo que realmente necesitas.",
  },
  {
    question: "¿Por qué no muestran precios fijos en su web?",
    answer:
      "Porque creemos que cada negocio merece una propuesta a su medida, no un precio de lista. Una veterinaria necesita cosas diferentes a una tienda de ropa o a un freelancer. Si mostráramos un precio fijo, te estaríamos cobrando funcionalidades que quizás no necesitas, o peor, entregándote menos de lo que mereces. Con una cotización personalizada, pagas exactamente por lo que tu negocio necesita.",
  },
  {
    question: "¿Son caros comparados con otras agencias?",
    answer:
      "Todo lo contrario. Nuestro modelo de trabajo nos permite ofrecer páginas web de calidad profesional a precios muy competitivos en el mercado peruano. Trabajamos con tecnología moderna (Next.js) que reduce costos de hosting y mantenimiento, y ese ahorro lo trasladamos a nuestros clientes. Solicita tu cotización y compara — estamos seguros de que seremos la mejor opción.",
  },
  {
    question: "¿Hay costos adicionales después de la entrega?",
    answer:
      "El único costo fijo es el dominio (.pe desde S/40/año). El hosting, certificado SSL y actualizaciones básicas están incluidos en nuestra propuesta. El mantenimiento mensual es opcional — te lo ofrecemos si lo necesitas, pero no es obligatorio. Sin sorpresas ni cobros ocultos.",
  },
  {
    question: "¿Qué incluye el precio de una página web?",
    answer:
      "Dependiendo del plan acordado, incluimos: diseño responsivo mobile-first, formulario de contacto, integración con WhatsApp, SEO técnico optimizado, certificado SSL, hosting, y capacitación para que puedas gestionar tu sitio. Los proyectos más completos incluyen sistema de reservas/citas, galería interactiva, blog y más. Todo queda definido antes de empezar.",
  },
  {
    question: "¿Puedo crear una página web gratis para mi negocio?",
    answer:
      "Existen opciones gratuitas como Wix Free o Google Sites, pero tienen limitaciones importantes: dominio genérico (tunegocio.wixsite.com), publicidad de la plataforma, velocidad lenta y aspecto poco profesional. Para un negocio serio, la inversión en una página web profesional se recupera rápidamente con los nuevos clientes que genera. La pregunta real no es '¿cuánto cuesta?' sino '¿cuánto te está costando no tenerla?'",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer:
      "Los proyectos básicos los entregamos en 1-2 semanas y los proyectos más completos en 3-4 semanas. Una vez que hablamos y definimos lo que necesitas, te damos un plazo exacto de entrega. Cumplimos lo que prometemos.",
  },
];

const whatWeOffer: { icon: IconComponent; title: string; desc: string }[] = [
  {
    icon: Paintbrush,
    title: "Diseño Profesional a Medida",
    desc: "Cada pagina web es única y diseñada especificamente para tu rubro y tu marca. No usamos plantillas genéricas.",
  },
  {
    icon: Zap,
    title: "Velocidad Superior",
    desc: "Usamos Next.js, la tecnología más moderna del mercado. Tus páginas cargan en menos de 1 segundo.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile-First",
    desc: "El 80% de tus clientes llegan desde el celular. Aseguramos que tu web se vea perfecta en cualquier dispositivo.",
  },
  {
    icon: Search,
    title: "SEO desde el Día 1",
    desc: "Optimizamos tu web para aparecer en Google. Nuestros clientes empiezan a recibir visitas orgánicas desde el primer mes.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y Confianza",
    desc: "Certificado SSL incluido, código limpio y hosting confiable. Tu web estará protegida y siempre disponible.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Incluida",
    desc: "Te enseñamos a manejar tu web. No dependes de nosotros para los cambios básicos que necesites hacer.",
  },
];

const packages = [
  {
    name: "Plan Esencial",
    ideal: "Emprendedores y negocios nuevos que quieren presencia digital profesional",
    color: "emerald",
    badge: "El más solicitado",
    features: [
      "Diseño personalizado mobile-first",
      "Hasta 6 secciones estratégicas",
      "Formulario de contacto activo",
      "Botón de WhatsApp integrado",
      "SEO técnico optimizado",
      "Certificado SSL incluido",
      "Hosting por 1 año incluido",
      "Entrega en 1-2 semanas",
    ],
    examples: ["Transporte", "Reparaciones", "Limpieza", "Freelancers", "Tiendas de Ropa"],
  },
  {
    name: "Plan Profesional",
    ideal: "Negocios establecidos que buscan diferenciarse y convertir más clientes",
    color: "indigo",
    badge: "Mayor retorno",
    features: [
      "Todo lo del Plan Esencial",
      "Diseño premium con identidad de marca",
      "Sistema de reservas / citas online",
      "Galería de servicios interactiva",
      "SEO avanzado con Schema markup",
      "Blog de contenidos",
      "Google Analytics configurado",
      "Capacitación personalizada",
      "Entrega en 3-4 semanas",
    ],
    examples: ["Veterinarias", "Salones de Belleza", "Restaurantes", "Cafeterías"],
  },
  {
    name: "Plan Avanzado",
    ideal: "Negocios que necesitan funcionalidades específicas y diferenciación máxima",
    color: "violet",
    badge: "Más completo",
    features: [
      "Todo lo del Plan Profesional",
      "Panel administrativo completo",
      "Integraciones con sistemas externos",
      "Sistema de pagos online",
      "Multi-idioma disponible",
      "Gestión avanzada de citas",
      "Reportes y estadísticas",
      "Soporte prioritario",
      "Entrega en 4-6 semanas",
    ],
    examples: ["Odontología", "Agencias de Viajes", "Clínicas", "Portales"],
  },
];

const costFactors = [
  {
    title: "Tipo de negocio",
    desc: "Una veterinaria necesita sistema de citas y galería de servicios. Una tienda de ropa necesita catálogo. Cada rubro tiene sus propias necesidades.",
  },
  {
    title: "Cantidad de páginas",
    desc: "Una landing page enfocada en conversión es diferente a un sitio con blog, galería, equipo y múltiples servicios.",
  },
  {
    title: "Funcionalidades especiales",
    desc: "Reservas online, carrito de compras, chat en vivo, integración con redes sociales — cada funcionalidad agrega valor y tiene su costo.",
  },
  {
    title: "Nivel de personalización",
    desc: "Un diseño desde cero y a medida de tu marca genera mejores resultados que adaptar una plantilla genérica.",
  },
  {
    title: "Optimización SEO",
    desc: "El SEO técnico está incluido en todos los planes. Una estrategia de contenido avanzada es parte de proyectos más completos.",
  },
  {
    title: "Plazo de entrega",
    desc: "Los plazos estándar permiten trabajo de calidad. Si necesitas urgencia, lo conversamos y buscamos la mejor solución.",
  },
];

const whyUs = [
  {
    label: "50+",
    desc: "Negocios peruanos que ya confían en nosotros",
  },
  {
    label: "Next.js",
    desc: "La tecnología más moderna para webs ultra-rápidas",
  },
  {
    label: "1 sem",
    desc: "Tiempo promedio de entrega para el plan esencial",
  },
  {
    label: "100%",
    desc: "Clientes satisfechos con su inversión",
  },
];

const steps = [
  {
    step: "01",
    title: "Cuéntanos tu negocio",
    desc: "Escríbenos por WhatsApp o llena el formulario. En 24 horas tienes tu cotización personalizada y sin compromiso.",
  },
  {
    step: "02",
    title: "Definimos juntos qué necesitas",
    desc: "Una llamada de 20 minutos para entender tus objetivos, tu mercado y qué debe lograr tu página web.",
  },
  {
    step: "03",
    title: "Recibe tu web lista para vender",
    desc: "Desarrollamos, revisamos contigo y entregamos una web que convierte visitantes en clientes reales.",
  },
];

export default function CuantoCuestaPaginaWebPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Inicio", href: "/" },
          { name: "Páginas Web en Perú", href: "/paginas-web-peru" },
          { name: "¿Cuánto Cuesta?", href: "/cuanto-cuesta-pagina-web" },
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-[#09090B] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Precios desde S/699 · Cotización Gratis · Respuesta en 24h
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
            ¿Cuánto Cuesta una <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Página Web en Perú?
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4">
            Depende de tu negocio — y eso es exactamente por lo que ofrecemos{" "}
            <strong className="text-white">cotizaciones personalizadas</strong>.
            Lo que sí podemos decirte:{" "}
            <strong className="text-white">tenemos el precio más competitivo del mercado</strong>.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            Sin precios de lista inflados. Sin funcionalidades que no necesitas. Solo lo que tu negocio realmente requiere, al mejor valor del mercado peruano.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contacto"
              className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Quiero mi Cotización Gratis
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999"}?text=Hola,%20quiero%20saber%20cuánto%20cuesta%20una%20página%20web%20para%20mi%20negocio`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="py-10 bg-[#09090B] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {whyUs.map((item, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-indigo-400 mb-1">{item.label}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios reales — Quick Win SEO section */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Precios reales, sin rodeos</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              Precios de Páginas Web en Perú 2026
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              El precio varía según las funcionalidades de tu negocio. Aquí los rangos reales del mercado peruano para que tengas una referencia clara antes de cotizar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                plan: "Plan Esencial",
                range: "desde S/699",
                desc: "Presencia digital profesional para emprendedores y negocios que arrancan. Diseño mobile-first, WhatsApp, formulario de contacto, SSL y hosting.",
                ideal: ["Transporte", "Reparaciones", "Freelancers", "Tiendas pequeñas"],
                color: "emerald",
              },
              {
                plan: "Plan Profesional",
                range: "desde S/1,500",
                desc: "Para negocios establecidos que necesitan diferenciarse. Incluye reservas online, galería, SEO avanzado, blog y Google Analytics.",
                ideal: ["Veterinarias", "Salones de Belleza", "Restaurantes", "Cafeterías"],
                color: "indigo",
              },
              {
                plan: "Plan Avanzado",
                range: "desde S/2,800",
                desc: "Funcionalidades completas: panel administrativo, pagos online, multi-idioma y gestión avanzada de citas o reservas.",
                ideal: ["Clínicas", "Agencias de Viajes", "Odontología", "Portales"],
                color: "violet",
              },
            ].map((item, i) => (
              <div key={i} className={`p-6 bg-white/[0.03] border border-${item.color}-500/20 rounded-2xl flex flex-col gap-3`}>
                <div className={`inline-block px-3 py-1 bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-full text-${item.color}-400 text-xs font-semibold self-start`}>
                  {item.plan}
                </div>
                <p className={`text-2xl font-bold text-${item.color}-400`}>{item.range}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                <div className="flex flex-wrap gap-1 mt-auto pt-2">
                  {item.ideal.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-full text-xs text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            Estos son rangos orientativos. El precio exacto de tu página web lo definimos juntos en una{" "}
            <Link href="/contacto" className="text-indigo-400 hover:underline">cotización personalizada gratis</Link>.
          </p>
        </div>
      </section>

      {/* La pregunta real */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Cambia la pregunta</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
            La pregunta no es <span className="text-slate-500 line-through">&ldquo;¿cuánto cuesta?&rdquo;</span>
            <br />sino <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">&ldquo;¿cuánto me cuesta NO tenerla?&rdquo;</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                icon: Users,
                title: "Clientes que te buscan y no te encuentran",
                desc: "Cada día, cientos de personas buscan en Google servicios como el tuyo. Sin página web, esos clientes van directo a tu competencia.",
              },
              {
                icon: TrendingDown,
                title: "Credibilidad perdida ante la competencia",
                desc: "En 2026, no tener web es como no tener RUC. Tus potenciales clientes buscan referencias online antes de tomar una decisión.",
              },
              {
                icon: Wallet,
                title: "Inversión en publicidad que no convierte",
                desc: "Si haces publicidad en Instagram o Google sin una página web profesional, estás perdiendo dinero. La web es donde se cierra la venta.",
              },
            ].map((card, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <card.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Lo que obtienes</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              Páginas Web que Venden, No Solo que &ldquo;Existen&rdquo;
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cada web que hacemos está diseñada con un objetivo claro: convertir visitantes en clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-indigo-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes / opciones */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Nuestros paquetes</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              Encuentra la Opción Ideal para Tu Negocio
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cada paquete incluye todo lo que necesitas. El precio exacto lo definimos juntos, según tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((plan, i) => (
              <div
                key={i}
                className={`relative p-8 bg-white/[0.03] border border-${plan.color}-500/20 rounded-2xl flex flex-col`}
              >
                <div className={`inline-block px-3 py-1 bg-${plan.color}-500/10 border border-${plan.color}-500/20 rounded-full text-${plan.color}-400 text-xs font-semibold mb-4 self-start`}>
                  {plan.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.ideal}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Ideal para:</p>
                  <div className="flex flex-wrap gap-1">
                    {plan.examples.map((ex, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded-full text-xs text-slate-500">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contacto?plan=${encodeURIComponent(plan.name)}`}
                  className={`w-full text-center py-3 rounded-full font-semibold text-sm border border-${plan.color}-500/40 text-${plan.color}-400 hover:bg-${plan.color}-500/10 transition-colors`}
                >
                  Quiero cotizar este plan
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            ¿No sabes qué plan necesitas?{" "}
            <Link href="/contacto" className="text-indigo-400 hover:underline">
              Cuéntanos de tu negocio
            </Link>{" "}
            y te ayudamos a elegir.
          </p>
        </div>
      </section>

      {/* Factores que afectan el precio */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Por eso no hay precio único</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              ¿Qué Factores Definen el Precio Final?
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              El costo de una página web varía según estos elementos. Conocerlos te ayuda a entender qué estás pagando y por qué vale la pena.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => (
              <div key={i} className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{factor.title}</h3>
                <p className="text-slate-400 text-sm">{factor.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-white font-semibold mb-2">¿Ya sabes lo que necesitas?</p>
            <p className="text-slate-400 text-sm mb-4">
              Cuéntanos sobre tu negocio y te enviamos una cotización detallada en menos de 24 horas. Sin compromiso y completamente gratis.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Solicitar Cotización Gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-[#09090B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">Simple y transparente</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
              Así Funciona el Proceso
            </h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        title="Preguntas Frecuentes sobre Precios"
        subtitle="Todo lo que necesitas saber antes de contratar tu página web"
        items={faqs}
      />

      <CTASection
        title="El Precio Ideal para Tu Negocio Te Espera"
        subtitle="Cotización personalizada, gratuita y en menos de 24 horas. Sin compromiso."
        primaryCta={{ text: "Quiero mi Cotización Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "¿Cuánto Cuesta una Página Web en Perú? Precios y Cotización 2026",
            description:
              "Precios de páginas web en Perú 2026: desde S/699 el Plan Esencial. Cotización personalizada gratis en 24 horas.",
            author: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            publisher: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              logo: { "@type": "ImageObject", url: "https://webparatunegocio.pe/logo.png" },
            },
            datePublished: "2026-02-01",
            dateModified: "2026-03-12",
            mainEntityOfPage: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://webparatunegocio.pe" },
              { "@type": "ListItem", position: 2, name: "Páginas Web en Perú", item: "https://webparatunegocio.pe/paginas-web-peru" },
              { "@type": "ListItem", position: 3, name: "¿Cuánto Cuesta?", item: "https://webparatunegocio.pe/cuanto-cuesta-pagina-web" },
            ],
          }),
        }}
      />

      <FAQSchema items={faqs} />
    </>
  );
}
