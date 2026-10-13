export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  objective: string;
  architecture: string;
  stack: string[];
  role: string;
  contributions: string[];
  result: string;
  learnings: string;
  status: "En producción" | "Completado" | "En desarrollo";
  links: {
    demo?: string;
    repo?: string;
    article?: string;
  };
  images?: string[];
  featured: boolean;
  startDate: string;
  endDate?: string;
};

export const projects: Project[] = [
  {
    slug: "sistema-escolar-pwa",
    title: "Sistema de Comunicaciones Escolares (PWA)",
    shortDescription: "PWA serverless para reemplazar cuaderno físico y alternativas costosas; ~50 usuarios piloto, $0/mes infraestructura.",
    description: "Iniciativa propia para la EEST N°1 San Antonio de Areco. Detecté la necesidad de reemplazar el cuaderno de comunicaciones físico y alternativas costosas/inseguras (EduWeb). Diseñé, desarrollé y desplegué una solución completa en ~1 semana de desarrollo + 1 semana de refinamiento/pilotaje con directivos.",
    problem: "Las escuelas usan cuadernos físicos o plataformas costosas e inseguras para comunicaciones entre docentes, directivos y familias. No hay trazabilidad, las notificaciones no llegan a tiempo y la gestión de permisos es manual.",
    objective: "Crear un sistema de comunicaciones escolares instalable (PWA), seguro, gratuito de operar y replicable a otras escuelas, con notificaciones push, roles granulares y autenticación por invitación.",
    architecture: "Arquitectura TDD con IA (OpenCode): specs → tests → implementación, validación human-in-the-loop. Stack serverless: Cloudflare Pages/Workers (edge), Supabase (PostgreSQL + RLS + Auth + Edge Functions), Resend (email transaccional), Web Push API + VAPID. Service Worker manual para PWA instalable (display: standalone). Autenticación por tokens de invitación vía email. RLS en Supabase para aislamiento por curso/rol. Costo $0/mes en free tiers (solo dominio), soporta 1000+ usuarios, zero-maintenance.",
    stack: ["TypeScript", "React", "Cloudflare Pages/Workers", "Supabase (PostgreSQL, Auth, RLS, Edge Functions)", "Resend", "Web Push API / VAPID", "PWA / Service Worker"],
    role: "Desarrollador Full Stack (iniciativa propia, pro-bono)",
    contributions: [
      "Detección de necesidad y definición de requisitos con directivos",
      "Arquitectura completa: auth por invitación, roles (admin/editor/lector), comunicados por curso técnico",
      "Implementación TDD asistida por IA (OpenCode): specs, tests, implementación, validación",
      "PWA instalable con Service Worker manual y notificaciones push nativas",
      "Deploy en Cloudflare Pages + Workers, configuración de dominio y DNS",
      "Pilotaje activo con ~50 usuarios (2 cursos técnicos); plan rollout total 2027",
    ],
    result: "En producción desde septiembre 2026. Piloto activo ~50 usuarios en 2 cursos técnicos. Costo $0/mes en free tiers (solo dominio). Arquitectura replicable a otras escuelas. Soporte para 1000+ usuarios sin cambios de infraestructura.",
    learnings: "TDD asistido por IA acelera desarrollo sin sacrificar calidad. Serverless en Cloudflare + Supabase elimina ops. RLS en Postgres simplifica authz. PWA + Push API nativo alcanza engagement móvil sin app store.",
    status: "En producción",
    links: {
      demo: "https://eestn1areco.com/",
    },
    featured: true,
    startDate: "2026-09",
  },
  {
    slug: "meal-planning-app",
    title: "App de Planes de Comida Personalizados",
    shortDescription: "Full stack (Next.js + FastAPI + PostgreSQL) con panel de admin; 3+ usuarios reales (pacientes) en producción.",
    description: "Aplicación full stack desarrollada en EPAM Systems para una nutricionista cliente. Permite crear planes de comida personalizados, gestión de usuarios y proveedores. Llevada a producción con usuarios reales activos.",
    problem: "La nutricionista necesitaba digitalizar la creación y entrega de planes alimentarios personalizados, gestionar pacientes y proveedores, y reemplazar procesos manuales en planillas/email.",
    objective: "Entregar MVP funcional en producción con panel de administración, autenticación, y flujo completo de creación/entrega de planes, manteniendo cadencia de sprints Scrum.",
    architecture: "Arquitectura monolítica modular: Frontend Next.js (App Router, TypeScript, React) + Backend FastAPI (Python, PostgreSQL). API REST versionada. Base de datos normalizada. Gestión de estado React optimizada. Refactor integral sin frenar entregas: normalización DB, limpieza arquitectura legacy, tests estables.",
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "REST APIs", "Git", "Scrum"],
    role: "Ingeniero de Software (part-time, team of 3)",
    contributions: [
      "Llevé a producción app full stack con panel de admin para gestión de usuarios/proveedores",
      "Refactor integral sin frenar entregas: normalicé DB, optimicé estado React, limpié arquitectura legacy",
      "Establecí convenciones REST, principios KISS, code review; mentoré a compañero en FastAPI, React hooks, testing",
      "3+ usuarios reales (pacientes) usando el sistema activamente en producción",
    ],
    result: "App en producción con 3+ usuarios reales. Código mantenible, tests estables, velocidad de features intacta. Equipo de 3 personas con prácticas de ingeniería establecidas.",
    learnings: "Refactor continuo es posible sin romper cadencia. Convenciones claras + code review + mentoring escalan calidad en equipos pequeños. FastAPI + Next.js combina DX y performance.",
    status: "Completado",
    links: {},
    featured: true,
    startDate: "2024-03",
    endDate: "2025-09",
  },
  {
    slug: "hueney-ruca",
    title: "Hueney Ruca — E-commerce de Alquileres Vacacionales",
    shortDescription: "E-commerce end-to-end (Next.js + Supabase + Stripe) construido solo en 6 semanas: reservas, pagos, panel admin, auth, DB relacional.",
    description: "Proyecto final del bootcamp SoyHenry. E-commerce completo de alquileres vacacionales con reservas, pagos con Stripe, panel de administración de listados, autenticación y base de datos relacional. Desplegado en Vercel.",
    problem: "Demostrar competencias full stack end-to-end en proyecto final de bootcamp: arquitectura, frontend, backend, deployment, testing, todo en 6 semanas trabajando solo.",
    objective: "Construir e-commerce funcional y desplegado que integre auth, pagos, panel admin y base de datos relacional, aplicando Scrum y prácticas de ingeniería aprendidas.",
    architecture: "Next.js (App Router) + Supabase (PostgreSQL, Auth, RLS) + Stripe. Arquitectura serverless. RLS para seguridad a nivel fila. Componentes reutilizables. Testing interno. Deploy en Vercel.",
    stack: ["Next.js", "React", "TypeScript", "Supabase (PostgreSQL, Auth, RLS)", "Stripe", "Git", "Vercel"],
    role: "Desarrollador Full Stack (solo, proyecto final bootcamp)",
    contributions: [
      "Arquitectura completa: frontend, backend, DB, auth, pagos, deployment",
      "Panel de administración de listados con CRUD y gestión de imágenes",
      "Integración Stripe para pagos de reservas",
      "Autenticación y autorización con Supabase Auth + RLS",
      "Deploy en Vercel con CI/CD automático",
      "Repo público: https://github.com/Mark-kus/hueney-ruca",
    ],
    result: "E-commerce funcional desplegado en 6 semanas. Código abierto en GitHub. Demuestra ownership end-to-end y capacidad de entrega rápida.",
    learnings: "Supabase + Next.js acelera full stack drásticamente. RLS reemplaza lógica de authz en backend. Stripe integration es directa con webhooks. Working solo exige priorización ruthless.",
    status: "Completado",
    links: {
      repo: "https://github.com/Mark-kus/hueney-ruca",
    },
    featured: true,
    startDate: "2023-04",
    endDate: "2023-05",
  },
];