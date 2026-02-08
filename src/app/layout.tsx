import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Optimización de fuentes con next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

// Viewport configuration para PWA
export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webparatunegocio.pe"),
  title: {
    default: "Diseño de Páginas Web en Lima y Perú | Desde S/700 | Web Para Tu Negocio",
    template: "%s | Web Para Tu Negocio",
  },
  description:
    "Diseño y desarrollo de páginas web profesionales en Lima, Perú. Especializados en veterinarias, restaurantes, salones de belleza, consultorios dentales y más. Optimizadas para Google y conversión. Desde S/700. ¡Cotización gratis!",
  keywords: [
    "páginas web peru",
    "paginas web en peru",
    "diseño de paginas web",
    "diseño de paginas web en lima",
    "pagina web lima",
    "diseño web lima",
    "desarrollo web peru",
    "paginas web profesionales lima",
    "diseño web para negocios",
    "cuanto cuesta una pagina web peru",
    "páginas web profesionales",
    "diseño de páginas web económicas",
    "página web veterinaria",
    "página web restaurante",
    "página web salón de belleza",
    "página web consultorio dental",
    "página web agencia de viajes",
    "desarrolladores de paginas web",
    "creacion de pagina web peru",
    "pagina web para negocio",
    "agencia digital",
    "diseño web",
    "diseño de tiendas virtuales",
    "posicionamiento web",
    "tienda virtual peru",
  ],
  authors: [{ name: "Web Para Tu Negocio", url: "https://webparatunegocio.pe" }],
  creator: "Web Para Tu Negocio",
  publisher: "Web Para Tu Negocio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://webparatunegocio.pe",
    siteName: "Web Para Tu Negocio",
    title: "Diseño de Páginas Web Profesionales en Lima y Perú | Desde S/700",
    description:
      "Creamos páginas web profesionales para negocios en Perú. Especializados en 17+ industrias. Optimizadas para Google. Desde S/700. ¡Cotización gratis!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Para Tu Negocio - Diseño de Páginas Web Profesionales en Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño de Páginas Web en Lima y Perú | Desde S/700",
    description:
      "Páginas web profesionales para negocios locales. 17+ nichos especializados. Desde S/700.",
    images: ["/og-image.jpg"],
    creator: "@webparatunegocio",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://webparatunegocio.pe",
    languages: {
      "es-PE": "https://webparatunegocio.pe",
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${inter.className} antialiased bg-[#09090B] text-slate-50`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
