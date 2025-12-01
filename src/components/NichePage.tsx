import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ProblemCards from "@/components/ProblemCards";
import SolutionCards from "@/components/SolutionCards";
import TransformationChart from "@/components/TransformationChart";
import Checklist from "@/components/Checklist";
import PricingCards from "@/components/PricingCards";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQAccordion, { FAQSchema } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { NicheData } from "@/data/niches";

interface NichePageProps {
  nicheData: NicheData;
}

export function generateNicheMetadata(nicheData: NicheData): Metadata {
  return {
    title: nicheData.metaTitle,
    description: nicheData.metaDescription,
    openGraph: {
      title: nicheData.metaTitle,
      description: nicheData.metaDescription,
      url: `https://webparatunegocio.pe/${nicheData.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: nicheData.metaTitle,
      description: nicheData.metaDescription,
    },
  };
}

export default function NichePage({ nicheData }: NichePageProps) {
  return (
    <>
      <HeroSection
        title={nicheData.headline}
        subtitle={nicheData.subtitle}
        ctaText="Solicitar Cotización"
        ctaLink="/contacto"
        secondaryCtaText="Ver Precios"
        secondaryCtaLink="#precios"
        backgroundGradient={nicheData.gradientColors}
      />

      <ProblemCards
        title="¿Te Identificas con Estos Problemas?"
        subtitle="Si experimentas alguno de estos desafíos, necesitas una solución digital"
        problems={nicheData.problems}
      />

      <SolutionCards
        title="Nuestra Solución"
        subtitle="Todo lo que necesitas para transformar tu negocio"
        solutions={nicheData.solutions}
      />

      <TransformationChart
        title="Tu Transformación"
        subtitle="Resultados reales que puedes esperar"
        data={nicheData.transformation}
      />

      <Checklist
        title="Lo Que Incluye Tu Paquete"
        subtitle="Todo esto viene incluido con tu nueva web"
        items={nicheData.checklist}
      />

      <div id="precios">
        <PricingCards
          title="Elige Tu Plan"
          subtitle="Inversión que se paga sola en semanas"
          tiers={nicheData.pricing}
          maintenanceNote={nicheData.maintenanceNote}
        />
      </div>

      <TestimonialCarousel
        title="Lo Que Dicen Nuestros Clientes"
        subtitle={`Historias de éxito de ${nicheData.title.toLowerCase()} como la tuya`}
        testimonials={nicheData.testimonials}
      />

      <FAQAccordion
        title="Preguntas Frecuentes"
        subtitle="Resolvemos todas tus dudas"
        items={nicheData.faqs}
      />

      <CTASection
        title="¿Listo para Transformar tu Negocio?"
        subtitle="Agenda una consulta gratuita y descubre cómo podemos ayudarte"
        primaryCta={{ text: "Agendar Consulta Gratis", href: "/contacto" }}
      />

      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Desarrollo Web para ${nicheData.title}`,
            description: nicheData.metaDescription,
            provider: {
              "@type": "Organization",
              name: "Web Para Tu Negocio",
              url: "https://webparatunegocio.pe",
            },
            serviceType: "Desarrollo Web",
            areaServed: {
              "@type": "Country",
              name: "Perú",
            },
            offers: nicheData.pricing.map((tier) => ({
              "@type": "Offer",
              name: tier.name,
              price: tier.price.replace("S/", "").replace(",", ""),
              priceCurrency: "PEN",
              description: tier.description,
            })),
          }),
        }}
      />

      {/* JSON-LD Schema for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://webparatunegocio.pe",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: nicheData.title,
                item: `https://webparatunegocio.pe/${nicheData.slug}`,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema items={nicheData.faqs} />
    </>
  );
}
