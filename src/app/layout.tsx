import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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

// Viewport configuration para PWA
export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webparatunegocio.pe"),
  title: {
    default: "Desarrollo Web Profesional para Negocios en Perú | Web Para Tu Negocio",
    template: "%s | Web Para Tu Negocio",
  },
  description:
    "Creamos páginas web profesionales para clínicas veterinarias, salones de belleza, restaurantes, consultorios odontológicos y agencias de viajes en Perú. Optimizadas para SEO y conversión. Desde S/700.",
  keywords: [
    "desarrollo web Perú",
    "páginas web profesionales Lima",
    "diseño web para negocios",
    "SEO local Perú",
    "marketing digital Lima",
    "página web veterinaria",
    "página web restaurante",
    "página web salón de belleza",
    "página web consultorio dental",
    "página web agencia de viajes",
    "desarrollo web económico",
    "diseño web profesional Perú",
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
    title: "Desarrollo Web Profesional para Negocios en Perú",
    description:
      "Creamos páginas web profesionales optimizadas para SEO y conversión. Especializados en negocios locales. Desde S/700.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Para Tu Negocio - Desarrollo Web Profesional en Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web Profesional para Negocios en Perú",
    description:
      "Páginas web profesionales optimizadas para SEO y conversión. Desde S/700.",
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
    <html lang="es" dir="ltr" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
