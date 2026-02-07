import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webparatunegocio.pe";
  const now = new Date();

  // Rutas premium (mayor prioridad)
  const premiumRoutes = [
    "veterinarias",
    "salones-belleza",
    "restaurantes",
    "odontologia",
    "agencias-viajes",
  ];

  // Rutas económicas
  const economicRoutes = [
    "tiendas-ropa",
    "artesania",
    "transporte",
    "limpieza",
    "cafeterias",
    "instructores",
    "reparaciones",
    "agricola",
    "belleza-economico",
    "freelancers",
  ];

  // Landing pages SEO (alta prioridad — keywords competitivas)
  const seoLandingPages = [
    { slug: "paginas-web-peru", priority: 0.95 },
    { slug: "paginas-web-lima", priority: 0.95 },
    { slug: "diseno-paginas-web", priority: 0.9 },
    { slug: "desarrollo-web-peru", priority: 0.9 },
    { slug: "cuanto-cuesta-pagina-web", priority: 0.85 },
  ];

  const premiumNicheRoutes = premiumRoutes.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const economicNicheRoutes = economicRoutes.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const seoRoutes = seoLandingPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoRoutes,
    ...premiumNicheRoutes,
    ...economicNicheRoutes,
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
