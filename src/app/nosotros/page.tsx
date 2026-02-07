import { Metadata } from "next";
import NosotrosContent from "@/components/NosotrosContent";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51999999999";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@webparatunegocio.pe";

const formatPhoneSchema = (num: string) => {
  return `+${num.slice(0, 2)}-${num.slice(2, 5)}-${num.slice(5, 8)}-${num.slice(8)}`;
};

export const metadata: Metadata = {
  title: "Sobre Nosotros | Expertos en Desarrollo Web para Negocios",
  description:
    "Conoce al equipo detrás de Web Para Tu Negocio. Más de 5 años de experiencia creando páginas web profesionales para negocios en Perú. Especializados en SEO y conversión.",
  openGraph: {
    title: "Sobre Nosotros | Web Para Tu Negocio",
    description:
      "Conoce al equipo de expertos en desarrollo web para negocios locales en Perú.",
    url: "https://webparatunegocio.pe/nosotros",
    type: "website",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <NosotrosContent />

      {/* JSON-LD Schema for Organization (EEAT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Web Para Tu Negocio",
            "image": "https://webparatunegocio.pe/og-image.jpg",
            "url": "https://webparatunegocio.pe",
            "telephone": formatPhoneSchema(whatsappNumber),
            "email": contactEmail,
            "description": "Desarrollo de páginas web profesionales para negocios locales en Perú. Especializados en SEO y conversión.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lima",
              "addressCountry": "PE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -12.0464,
              "longitude": -77.0428
            },
            "areaServed": {
              "@type": "Country",
              "name": "Perú"
            },
            "priceRange": "S/700 - S/12,000",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              `https://wa.me/${whatsappNumber}`
            ],
            "knowsAbout": [
              "Desarrollo Web",
              "SEO",
              "Diseño UI/UX",
              "Marketing Digital",
              "Next.js",
              "React",
              "WordPress"
            ],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Experiencia Profesional",
              "name": "5+ años en desarrollo web"
            },
            "founder": {
              "@type": "Person",
              "name": "Equipo Web Para Tu Negocio",
              "jobTitle": "Desarrolladores Web"
            }
          }),
        }}
      />
    </>
  );
}
