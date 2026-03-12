# Estrategia SEO — webparatunegocio.pe
**Fecha de análisis:** Marzo 2026
**Herramientas usadas:** Google Search Console + DataForSEO Labs
**Dominio:** `webparatunegocio.pe`

---

## 1. Diagnóstico Real del Dominio

### Estado actual
| Métrica | Valor |
|---|---|
| Rankings orgánicos en Perú | **0** (dominio nuevo, sin autoridad acumulada) |
| Impresiones totales GSC (dic 2025 – mar 2026) | ~487 |
| Clics totales GSC | **2** |
| Última indexación homepage | 26 feb 2026 |
| Rich Results activos | Review Snippets (home) · FAQ · Breadcrumbs |
| Estado de indexación | ✅ PASS — Submitted and indexed |
| Rastreo | Mobile-first crawl |

### Problema crítico #1: URLs duplicadas (www vs non-www)
GSC detecta páginas bajo **dos versiones distintas** del dominio:

| Versión | Páginas detectadas |
|---|---|
| `https://webparatunegocio.pe/` | Homepage, /artesania, /veterinarias, /odontologia… |
| `https://www.webparatunegocio.pe/` | /diseno-paginas-web, /agencias-viajes, /limpieza… |

**Impacto:** Google distribuye la autoridad entre ambas versiones. Todos los backlinks, señales sociales y señales de rastreo quedan fragmentadas. **Esto debe resolverse antes de cualquier otra acción SEO.**

### Problema crítico #2: Structured data con "Unnamed items"
Los Rich Results de FAQ y Breadcrumbs aparecen como **"Unnamed item"** en el reporte de GSC. Esto indica que los campos `name` están vacíos o mal formados en el JSON-LD, impidiendo que Google los use correctamente en los resultados enriquecidos.

---

## 2. Análisis de Keywords en Perú

### Keywords principales y su estado
| Keyword | Vol/mes | Dificultad | Competencia | CPC | Posición actual |
|---|---|---|---|---|---|
| diseño de paginas web | 2,400 | 56 | BAJA (0.25) | $1.56 | Sin ranking |
| diseño de paginas web en lima | 390 | 90 | BAJA (0.11) | $1.39 | Sin ranking |
| paginas web peru | 210 | 73 | MEDIA (0.51) | $1.34 | Sin ranking |
| diseño web lima | 170 | 72 | MEDIA (0.37) | $0.68 | Sin ranking |
| desarrollo web peru | 70 | — | MEDIA (0.36) | $0.96 | Sin ranking |
| cuanto cuesta una pagina web peru | 50 | — | MEDIA (0.46) | $0.60 | ~Pos 47 |
| creacion de pagina web peru | 30 | — | ALTA (0.80) | $1.70 | Sin ranking |

> **Nota sobre "diseño de paginas web en lima":** Tiene KD=90 pero competencia muy baja (0.11). Los sitios que rankean lo hacen gracias a backlinks acumulados, no a contenido superior. Es alcanzable a mediano plazo con link building local.

### Keywords en tendencia creciente (+)
| Keyword | Tendencia mensual | Tendencia trimestral |
|---|---|---|
| cuanto cuesta una pagina web peru | +75% | +133% |
| diseño de paginas web | +50% | +50% |
| diseño de paginas web en lima | +51% | +84% |
| creacion de pagina web peru | +50% | +200% |

Estas keywords están en crecimiento acelerado — actuar ahora tiene mayor ROI que hacerlo en 6 meses.

---

## 3. Quick Wins Identificados

La página `/cuanto-cuesta-pagina-web` tiene **371 impresiones** en posición promedio **26** (sin clics). Varias queries ya posicionan en página 1–2 de Google:

| Query | Posición actual | Impresiones | Acción |
|---|---|---|---|
| `precio de pagina web` | **6** | 1 | Incluir en title/H1 |
| `paginas web precio` | **8** | 2 | Incluir en title/H1 |
| `precios de paginas web` | **9** | 6 | Incluir en title/H1 |
| `precio pagina web` | **12** | 1 | Reforzar con schema |
| `precio paginas web` | **11** | 1 | Reforzar con schema |
| `cotizacion de una pagina web` | **17** | 1 | Crear sección específica |
| `cuanto cuesta una pagina web` | **47** | 34 | Mejorar contenido y links internos |
| `creacion de pagina web precio` | **68** | 34 | Crear H2 dedicado |
| `precio de una pagina web` | **64** | 30 | Mejorar posición con contenido |

**Potencial estimado:** Si esta página sube al Top 10, puede generar 30–60 clics/mes adicionales solo con el tráfico existing.

---

## 4. Análisis Competitivo

### Competidor principal: paginasweb.pe
| Métrica | Valor |
|---|---|
| Keywords con ranking en Perú | 28 |
| Tráfico orgánico estimado | ~828 visitas/mes |
| Posición #1 | 1 keyword |
| Top 3 | 3 keywords |
| Top 10 | 7 keywords |
| Keywords en caída | **13 (46%)** — oportunidad de captura |
| Keywords nuevas | 8 |

**Debilidad del competidor:** Sin presencia en keywords de nicho específico (veterinarias, restaurantes, salones). Es el espacio donde webparatunegocio.pe puede dominar sin competencia directa.

---

## 5. Estrategia en 4 Fases

---

### FASE 1 — Correcciones Técnicas Urgentes
**Plazo:** Semana 1–2
**Objetivo:** Consolidar autoridad del dominio y corregir problemas que frenan el posicionamiento

#### Acción 1.1 — Resolver canonical www/non-www
- **Decisión:** usar `https://webparatunegocio.pe/` (sin www) como versión canónica
- Agregar redirect 301 permanente en `next.config.ts`:
  ```js
  // Redirigir www → non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.webparatunegocio.pe' }],
        destination: 'https://webparatunegocio.pe/:path*',
        permanent: true,
      },
    ]
  }
  ```
- Verificar que `metadataBase` en `src/app/layout.tsx` use `https://webparatunegocio.pe`
- Verificar que `src/app/sitemap.ts` genere URLs sin `www`
- Después: reenviar sitemap en Google Search Console

#### Acción 1.2 — Optimizar metadata de `/cuanto-cuesta-pagina-web`
Página con mayor potencial inmediato (371 impresiones). Cambios sugeridos:

**Title actual:** optimizar hacia:
```
Precios y Costos de Páginas Web en Perú 2026 — Cotiza Gratis | Web Para Tu Negocio
```

**Meta description sugerida:**
```
¿Cuánto cuesta una página web en Perú? Precios desde S/699. Plan Esencial, Profesional y Avanzado. Cotización gratis en 24 horas. ✓ Incluye hosting, SSL y SEO.
```

**H1 sugerido:**
```
¿Cuánto Cuesta una Página Web en Perú? Precios y Cotización 2026
```

- Archivo: `src/app/cuanto-cuesta-pagina-web/page.tsx`

#### Acción 1.3 — Corregir "Unnamed items" en Structured Data
En GSC, los Rich Results de FAQ y Breadcrumbs aparecen sin nombre. Revisar:
- Todos los componentes JSON-LD con `@type: "FAQPage"` → asegurar que cada `Question` tenga `name` explícito
- Todos los `BreadcrumbList` → cada `ListItem` debe tener `name` y `item` completos
- Archivos a revisar: `src/app/cuanto-cuesta-pagina-web/page.tsx` + componentes compartidos de schema

---

### FASE 2 — Contenido de Autoridad
**Plazo:** Semana 2–6
**Objetivo:** Construir topical authority para que Google entienda el dominio de expertise del sitio

#### Acción 2.1 — Fortalecer páginas SEO principales

Prioridad por volumen / KD más accesible:

| Página | Keyword objetivo | KD | Acción | Urgencia |
|---|---|---|---|---|
| `/diseno-paginas-web` | "diseño de paginas web" | 56 | Expandir a 1,500+ palabras, agregar comparativas, ejemplos | 🔴 Alta |
| `/paginas-web-lima` | "diseño de paginas web en lima" | 90 | Agregar testimonios de clientes en Lima, dirección local, fotos reales | 🔴 Alta |
| `/paginas-web-peru` | "paginas web peru" | 73 | Reforzar E-E-A-T: portafolio, años de experiencia, casos de éxito | 🟡 Media |
| `/cuanto-cuesta-pagina-web` | cluster "precio/costo/cotización" | — | Reestructurar H2s por tipo de negocio, tabla comparativa | 🔴 Alta |
| `/desarrollo-web-peru` | "desarrollo web peru" | — | Diferenciar semánticamente de "diseño web" (lenguajes, frameworks, apps) | 🟡 Media |

#### Acción 2.2 — Crear sección de Blog
El sitio no tiene contenido editorial. Esta es la mayor debilidad vs. competidores con autoridad acumulada.

**Artículos prioritarios** (basados en queries reales de GSC):

1. **"¿Cuánto cuesta una página web en Perú en 2026? Precios reales"**
   - Apunta al cluster con 371 impresiones ya ganadas
   - Incluir tabla por tipo de negocio, rangos de precio, qué incluye cada plan
   - Keyword principal: `cuanto cuesta una pagina web peru` (+75% tendencia)

2. **"¿Página web o redes sociales? La respuesta definitiva para negocios en Perú"**
   - Intención: informacional con conversión
   - Aborda la objeción más común de prospectos

3. **"Guía completa: Página web para veterinarias en Lima 2026"**
   - Keyword de nicho sin competencia directa
   - Interna linkear a `/veterinarias`

4. **"Cómo una página web puede multiplicar ventas de tu restaurante"**
   - Interna linkear a `/restaurantes`
   - Casos de uso específicos del mercado peruano

5. **"10 cosas que no puede faltar en una página web profesional [Checklist]"**
   - Linkeable, compartible, posicionable por long tails

**Ruta técnica:** `src/app/blog/[slug]/page.tsx` con generación estática (SSG)

#### Acción 2.3 — Optimizar páginas de nicho con mayor tracción
Páginas que ya tienen impresiones pero aún sin clics:

| Página | Impresiones | Pos. avg | Acción |
|---|---|---|---|
| `/artesania` | 14 | 18 | Mejorar title, H1, agregar keyword "artesanía peruana online" |
| `/reparaciones` | 11 | 22 | Optimizar meta description con CTA, agregar keywords locales |
| `/salones-belleza` | 6 | 24 | Agregar keywords como "salón de belleza lima", "spa lima" |
| `/limpieza` | 8 | ~30 | Mejorar contenido, agregar FAQ con preguntas sobre servicio |

---

### FASE 3 — Construcción de Autoridad de Dominio
**Plazo:** Mes 2–3
**Objetivo:** Elevar el Domain Rating para poder competir en keywords de KD 70+

Para rankear en keywords como "paginas web peru" (KD:73) o "diseño web lima" (KD:72), el dominio necesita backlinks de calidad. El competidor paginasweb.pe los tiene acumulados históricamente.

#### Acción 3.1 — Link building local en Perú
- **Directorios gratuitos:** Páginas Amarillas PE, Kompass Perú, CIX, Prompex
- **SUNAT / Registros:** Perfil de empresa verificado
- **Cámaras de comercio:** Lima, Miraflores, San Isidro
- **Portales de freelancers:** Workana, Freelancer.pe (perfil de empresa)

#### Acción 3.2 — Google Business Profile
- Crear/verificar perfil GBP para "Web Para Tu Negocio"
- Categorías: "Diseñador de sitios web", "Empresa de informática"
- Agregar: fotos del equipo/trabajo, servicios, precio referencial, horarios
- Solicitar reseñas a clientes actuales
- **Impacto:** señales locales para búsquedas en Lima + aparición en Maps

#### Acción 3.3 — Citaciones NAP consistentes
Nombre + Dirección + Teléfono idénticos en cada directorio:
```
Nombre:    Web Para Tu Negocio
Ciudad:    Lima, Perú
Teléfono:  [WhatsApp business number]
Web:       https://webparatunegocio.pe
```

#### Acción 3.4 — Contenido linkeable
- **Infografía:** "Precios de páginas web en Perú vs. Latinoamérica 2026" (shareable)
- **Estudio de caso:** "Cómo [cliente] aumentó sus ventas 3x con una página web" (testimonial real)

---

### FASE 4 — Monitoreo y Optimización Continua
**Plazo:** Mensual (a partir del mes 2)
**Objetivo:** Detectar oportunidades y prevenir caídas antes de que sean visibles

#### Dashboard mensual en GSC — qué revisar:
1. **Queries pos. 8–20 con impresiones crecientes** → candidatos prioritarios de optimización
2. **Páginas con impresiones sin clics** → revisar title y meta description (CTR)
3. **Nuevas queries emergentes** → oportunidades no previstas en el keyword plan
4. **Caídas de impresiones** → detectar si alguna página fue deindexada o afectada por cambio de algoritmo

#### Verificación mensual con DataForSEO:
- Correr `domain_rank_overview` en Perú para rastrear primeros rankings
- Monitorear rankings del competidor paginasweb.pe (13 keywords en caída — capturar)

---

## 6. Objetivos a 6 Meses

| Métrica | Estado actual | Objetivo (6 meses) |
|---|---|---|
| Keywords con ranking en Perú | **0** | **25+** |
| Impresiones totales / mes | ~160 | **3,000+** |
| Clics / mes | <1 | **80+** |
| Posición promedio `/cuanto-cuesta-pagina-web` | 26 | **≤10** |
| Posición promedio `/diseno-paginas-web` | >100 | **≤30** |
| Domain Rating (DataForSEO) | 0 | **15+** |
| Artículos de blog publicados | 0 | **5–8** |

---

## 7. Prioridades Inmediatas (Esta Semana)

| # | Acción | Impacto | Esfuerzo | Archivos |
|---|---|---|---|---|
| 1 | 🔴 Resolver canonical www/non-www | Muy alto | Bajo | `next.config.ts`, `layout.tsx`, `sitemap.ts` |
| 2 | 🔴 Optimizar title/H1/meta de `/cuanto-cuesta-pagina-web` | Alto | Bajo | `src/app/cuanto-cuesta-pagina-web/page.tsx` |
| 3 | 🟡 Corregir "Unnamed items" en Structured Data | Medio | Bajo | Componentes JSON-LD |
| 4 | 🟡 Expandir contenido de `/diseno-paginas-web` | Alto | Medio | `src/app/diseno-paginas-web/page.tsx` |
| 5 | 🟢 Iniciar sección `/blog` con artículo de precios | Alto | Alto | Crear `src/app/blog/` |

---

## 8. Archivos Críticos del Proyecto

| Archivo | Acción SEO |
|---|---|
| `src/app/layout.tsx` | Verificar `metadataBase` apunta a `https://webparatunegocio.pe` |
| `next.config.ts` | Agregar redirect 301 `www` → `non-www` |
| `src/app/sitemap.ts` | Verificar que todas las URLs generadas sean sin `www` |
| `src/app/cuanto-cuesta-pagina-web/page.tsx` | Optimizar title, H1, meta desc, FAQ schema |
| `src/app/diseno-paginas-web/page.tsx` | Expandir a 1,500+ palabras con keyword clustering |
| `src/app/paginas-web-lima/page.tsx` | Agregar proof local (testimonios, dirección Lima) |
| `src/app/artesania/page.tsx` | Optimizar H1 + title para keywords objetivo |
| Componentes schema JSON-LD | Corregir campo `name` en FAQPage, BreadcrumbList, Service |

---

## 9. Checklist de Verificación

### Técnico
- [ ] Redirect 301 de `www.webparatunegocio.pe` → `webparatunegocio.pe` activo
- [ ] GSC muestra todas las URLs bajo una sola versión del dominio
- [ ] Sitemap reenvíado en GSC tras los cambios
- [ ] Rich Results: FAQ y Breadcrumbs muestran nombres (no "Unnamed item")
- [ ] `metadataBase` en `layout.tsx` usa versión sin `www`

### Contenido
- [ ] `/cuanto-cuesta-pagina-web` tiene nuevo title/H1/meta description
- [ ] `/diseno-paginas-web` expandido a 1,500+ palabras
- [ ] Primera entrada de blog creada y publicada
- [ ] Páginas de nicho con impresiones (artesanía, reparaciones, salones) con title optimizado

### Autoridad
- [ ] Google Business Profile creado y verificado
- [ ] Perfil en al menos 5 directorios locales con NAP consistente
- [ ] Primer backlink editorial conseguido

### Monitoreo
- [ ] Alertas de GSC configuradas
- [ ] `/cuanto-cuesta-pagina-web` en posición ≤15 a los 30 días de los cambios
- [ ] DataForSEO `domain_rank_overview` corrido a los 30 días para confirmar primeros rankings

---

*Generado con datos reales de Google Search Console + DataForSEO Labs — Marzo 2026*
