import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Web Para Tu Negocio',
    short_name: 'WebNegocio',
    description: 'Desarrollo de páginas web profesionales para negocios locales en Perú. Veterinarias, restaurantes, salones de belleza y más.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'es-PE',
    categories: ['business', 'productivity'],
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
