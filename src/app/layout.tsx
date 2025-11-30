import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://soluciones-web-nichos.vercel.app"),
  title: {
    default: "Desarrollo Web Profesional para Negocios | Soluciones Digitales",
    template: "%s | Soluciones Web Profesionales",
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
  authors: [{ name: "Soluciones Web Nichos" }],
  creator: "Soluciones Web Nichos",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://soluciones-web-nichos.vercel.app",
    siteName: "Soluciones Web Profesionales",
    title: "Desarrollo Web Profesional para Negocios",
    description:
      "Creamos páginas web profesionales optimizadas para SEO y conversión para negocios específicos.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Soluciones Web Profesionales",
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
