# Portfolio - Marco Tignanelli

Portfolio web personal desarrollado con Next.js 15, TypeScript y Tailwind CSS.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Deploy**: Vercel / Cloudflare Pages
- **Formularios**: Resend (API route)
- **Calendario**: Calendly (embed/botón)

## Estructura del proyecto

```
src/
├── app/
│   ├── api/contact/route.ts    # API route para Resend
│   ├── projects/[slug]/page.tsx # Detalle de proyectos (SSG)
│   ├── globals.css             # Estilos globales + tema
│   ├── layout.tsx              # Layout raíz + ThemeProvider
│   └── page.tsx                # Home con todas las secciones
├── components/
│   ├── sections/               # Secciones de la home
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/                     # Componentes reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Section.tsx
│       ├── ThemeProvider.tsx
│       └── ThemeToggle.tsx
├── data/                       # Contenido estructurado (fuente de verdad)
│   ├── personal.ts
│   ├── about.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   └── education.ts
└── lib/
    └── utils.ts                # Utilidades (cn, formatDate, etc.)
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `NEXT_PUBLIC_CALENDLY_URL` | URL de tu evento Calendly (ej: `https://calendly.com/tu-usuario/30min`) | No (placeholder en dev) |
| `RESEND_API_KEY` | API key de Resend (formato `re_...`) | No (formulario deshabilitado si falta) |
| `CONTACT_FROM_EMAIL` | Email verificado en Resend (ej: `portfolio@tudominio.com`) | No |
| `CONTACT_TO_EMAIL` | Email destino para recibir mensajes | No |

**Nota**: Si faltan variables de Resend, el formulario muestra un error controlado y no rompe el build. Calendly muestra un botón deshabilitado con instrucciones si no está configurado.

## Deploy

### Vercel (recomendado)

1. Conecta el repositorio en Vercel
2. Configura las variables de entorno en Project Settings → Environment Variables
3. Deploy automático en cada push a `main`

### Cloudflare Pages

1. Conecta el repositorio en Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `.next`
4. Configura las variables de entorno

## Personalización del contenido

Todo el contenido está en `src/data/`. Edita estos archivos para actualizar el portfolio sin tocar componentes:

- `personal.ts` — Nombre, título, tagline, links, contacto
- `about.ts` — Resumen y highlights
- `skills.ts` — Categorías y tecnologías
- `projects.ts` — Proyectos (cards + vistas detalle)
- `experience.ts` — Experiencia laboral
- `education.ts` — Educación, certificaciones, idiomas

### Agregar un proyecto

1. Añade entrada en `src/data/projects.ts` siguiendo el tipo `Project`
2. El slug genera automáticamente la ruta `/projects/[slug]`
3. Incluye `featured: true` para que aparezca en la home

## SEO y metadata

- `metadata` en `layout.tsx` (global) y `projects/[slug]/page.tsx` (por proyecto)
- Open Graph y Twitter cards configurados
- `metadataBase` pendiente: configura en `layout.tsx` con tu dominio real
- Favicon: añade `favicon.ico` en `public/`

## Accesibilidad

- Semántica HTML5 correcta (`header`, `main`, `section`, `footer`, `nav`, `article`)
- Navegación por teclado completa
- Contraste AA en modo oscuro y claro
- `prefers-reduced-motion` respetado
- Focus visible en elementos interactivos
- `aria-label` en iconos y botones sin texto
- `role="list"` / `role="listitem"` en listas de skills/proyectos

## Scripts disponibles

```bash
npm run dev       # Desarrollo con Turbopack
npm run build     # Build de producción
npm run start     # Servidor de producción
npm run lint      # ESLint
```

## Licencia

MIT — Libre para uso personal y comercial.