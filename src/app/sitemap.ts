import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webparatunegocio.pe";

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

  const premiumNicheRoutes = premiumRoutes.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const economicNicheRoutes = economicRoutes.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date("2025-06-01"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2025-06-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...premiumNicheRoutes,
    ...economicNicheRoutes,
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date("2025-05-15"),
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
