import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://webparatunegocio.pe"),
  title: {
    default: "Desarrollo Web Profesional para Negocios | Web Para Tu Negocio",
    template: "%s | Web Para Tu Negocio",
  },
  description:
    "Creamos páginas web profesionales para clínicas veterinarias, salones de belleza, restaurantes, consultorios odontológicos y agencias de viajes. Optimizadas para SEO y conversión.",
  keywords: [
    "desarrollo web",
    "páginas web profesionales",
    "diseño web",
    "SEO",
    "marketing digital",
    "clínicas veterinarias",
    "salones de belleza",
    "restaurantes",
    "odontología",
    "agencias de viajes",
  ],
  authors: [{ name: "Web Para Tu Negocio" }],
  creator: "Web Para Tu Negocio",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://webparatunegocio.pe",
    siteName: "Web Para Tu Negocio",
    title: "Desarrollo Web Profesional para Negocios",
    description:
      "Creamos páginas web profesionales optimizadas para SEO y conversión para negocios específicos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Para Tu Negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web Profesional para Negocios",
    description:
      "Páginas web profesionales optimizadas para SEO y conversión.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
