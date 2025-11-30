# Soluciones Web Profesionales

Página web profesional de servicios de desarrollo web enfocada en 5 nichos específicos. Optimizada para SEO, conversión y promoción.

## 🎯 Nichos de Negocio

1. **Clínicas Veterinarias** - Package "Clínica Digital Completa" desde S/3,500 - S/8,000
2. **Salones de Belleza y Spa** - Package "Salón Digital" desde S/3,000 - S/7,000
3. **Restaurantes y Bares** - Package "Restaurante Digital" desde S/4,000 - S/9,500
4. **Consultorios Odontológicos** - Package "Consultorio Profesional" desde S/5,000 - S/12,000
5. **Agencias de Viajes** - Package "Agencia Digital Completa" desde S/5,500 - S/12,000

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **SEO**: Metadata API de Next.js, JSON-LD structured data
- **Deployment**: Optimizado para Vercel

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx               # Layout global con SEO
│   ├── globals.css              # Estilos globales
│   ├── sitemap.ts               # Sitemap automático
│   ├── robots.ts                # Robots.txt
│   ├── veterinarias/            # Página de nicho
│   ├── salones-belleza/         # Página de nicho
│   ├── restaurantes/            # Página de nicho
│   ├── odontologia/             # Página de nicho
│   ├── agencias-viajes/         # Página de nicho
│   └── contacto/                # Página de contacto
├── components/
│   ├── Navigation.tsx           # Navegación responsive
│   ├── Footer.tsx               # Footer con contacto
│   ├── HeroSection.tsx          # Sección hero animada
│   ├── ProblemCards.tsx         # Tarjetas de problemas
│   ├── SolutionCards.tsx        # Tarjetas de soluciones
│   ├── TransformationChart.tsx  # Comparativa antes/después
│   ├── PricingCards.tsx         # Tarjetas de precios
│   ├── FAQAccordion.tsx         # FAQ con schema markup
│   ├── TestimonialCarousel.tsx  # Testimonios
│   ├── CTASection.tsx           # Call-to-action
│   ├── NicheGrid.tsx            # Grid de nichos
│   ├── ContactForm.tsx          # Formulario de contacto
│   ├── BenefitsSection.tsx      # Sección de beneficios
│   ├── Checklist.tsx            # Lista de características
│   └── NichePage.tsx            # Template de página de nicho
└── data/
    └── niches.ts                # Datos de cada nicho
```

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mijecaap/soluciones-web-nichos.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🌐 Variables de Entorno

Crear un archivo `.env.local` con las siguientes variables (opcional):

```env
# URL base del sitio
NEXT_PUBLIC_SITE_URL=https://soluciones-web-nichos.vercel.app

# Número de WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=51999999999

# Email de contacto
NEXT_PUBLIC_CONTACT_EMAIL=contacto@solucionesweb.com
```

## 📱 Características SEO

- ✅ Meta tags optimizados para cada página
- ✅ Open Graph tags para redes sociales
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD):
  - Organization
  - LocalBusiness
  - Service (para cada nicho)
  - FAQPage (para FAQs)
  - BreadcrumbList
  - ContactPage
- ✅ Sitemap.xml automático
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Heading hierarchy correcto (H1, H2, H3)
- ✅ URLs amigables y descriptivas

## 🎨 Componentes UI

1. **Hero Section** - Con animaciones sutiles de Framer Motion
2. **Problem Cards** - Grid de problemas con iconos
3. **Solution Cards** - Grid de soluciones con highlights
4. **Transformation Chart** - Comparativa Antes/Después
5. **Pricing Cards** - 3 niveles con badge "Recomendado"
6. **FAQ Accordion** - Con schema markup JSON-LD
7. **Testimonial Carousel** - Con fotos y ratings
8. **CTA Buttons** - WhatsApp, Email, Agendar Demo
9. **Niche Grid** - 5 tarjetas para la home
10. **Contact Form** - Con validación
11. **Navigation** - Responsive con menú móvil
12. **Footer** - Con links, contacto, redes sociales

## 🚀 Deploy en Vercel

1. Conectar repositorio a Vercel
2. Configurar variables de entorno (si aplica)
3. Deploy automático en cada push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mijecaap/soluciones-web-nichos)

## 📝 Licencia

MIT © 2024 Soluciones Web Profesionales
