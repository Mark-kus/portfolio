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
    stack: ["TypeScript", "React", "Cloudflare Pages/Workers", "Supabase", "Resend", "Web Push API / VAPID", "PWA / Service Worker"],
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
    slug: "kana-drill",
    title: "Kana Drill — Entrenador de Escritura de Kana",
    shortDescription: "Web app full-stack personal con motor de reconocimiento de trazos determinista (sin IA/ML); en producción (v2.0.0), repo público.",
    description: "Aplicación web full-stack personal para practicar escritura de kana japonés. La app muestra un romaji y el usuario dibuja el kana correspondiente en un canvas; un motor de reconocimiento de trazos determinista califica el dibujo y da pistas de corrección. Surgió de la necesidad personal de practicar escritura japonesa, una dirección poco cubierta por las apps existentes (que enseñan lectura: kana → romaji).",
    problem: "La mayoría de apps para practicar kana enseñan lectura (kana → romaji). La escritura (romaji → kana) —la dirección que mejor consolida la memorización— estaba poco cubierta.",
    objective: "Construir un entrenador de escritura de kana que califique el trazo dibujado en tiempo real, de forma rápida, reproducible y sin dependencias externas de inferencia, distinguiendo incluso kana muy parecidos entre sí.",
    architecture: "Motor de reconocimiento de trazos determinista (sin red neuronal ni servicios externos): rasteriza el dibujo a una grilla 128×128 invariante a posición y escala. Puntuación combinada: 60% distancia chamfer + 40% solapamiento F1, comparando contra 176 plantillas de referencia derivadas de KanjiVG. Búsqueda de rotación probando 9 ángulos (−16° a +16°) con máscaras precomputadas rotadas y dilatadas. Conjunto de confundibles: cachea por objetivo los 5 kana más cercanos por distancia chamfer. En lugar de clasificar entre los 143 kana (enfoque que fallaba con match completo o modelo entrenado en navegador), verifica únicamente contra el kana objetivo y su top-5 de confundibles. Señal de conteo de trazos para distinguir kana gemelos (dakuten/handakuten).",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest", "Vercel"],
    role: "Desarrollador Full Stack (proyecto personal)",
    contributions: [
      "Diseñé y desarrollé la app full-stack completa (v0 en marzo 2026)",
      "Construí el motor de reconocimiento de trazos determinista: grilla 128×128 invariante, puntuación 60% chamfer + 40% F1, contra 176 plantillas de KanjiVG",
      "Implementé búsqueda de rotación (9 ángulos de −16° a +16°) con máscaras precomputadas rotadas y dilatadas",
      "Rediseñé el algoritmo de clasificación (v0 → v2.0.0) en ~1 semana para eliminar falsos positivos entre kana parecidos",
      "Añadí señal de conteo de trazos para distinguir kana gemelos (dakuten/handakuten)",
      "UI multilingüe (EN/ES/PT), temas claro/oscuro/sistema, responsive, modos Hiragana/Katakana",
    ],
    result: "En producción (v2.0.0) con repo público. El rediseño del enfoque de clasificación resolvió los falsos positivos entre kana muy parecidos: en lugar de clasificar entre 143 kana, verifica contra el objetivo y su top-5 de confundibles precalculado. Feedback útil en caso de error (trazos de más/faltantes, kana más cercano o 'intenta ser más preciso'). Enfoque determinista → rápido, reproducible y sin dependencias externas de inferencia.",
    learnings: "Rediseñar el enfoque del algoritmo (de clasificación global a verificación contra objetivo + confundibles) fue más efectivo que intentar un match completo o un modelo en navegador. Un enfoque determinista da rapidez y reproducibilidad sin IA/ML en runtime.",
    status: "En producción",
    links: {
      demo: "https://the-kana-drill.vercel.app/",
      repo: "https://github.com/Mark-kus/kana-drill",
    },
    featured: true,
    startDate: "2026-03",
  },
  {
    slug: "hueney-ruca",
    title: "Hueney Ruca — E-commerce de Alquileres Vacacionales",
    shortDescription: "E-commerce end-to-end (Next.js + Supabase + Stripe) construido solo en 6 semanas: reservas, pagos, panel admin, auth, DB relacional.",
    description: "Proyecto final del bootcamp SoyHenry. E-commerce completo de alquileres vacacionales con reservas, pagos con Stripe, panel de administración de listados, autenticación y base de datos relacional. Desplegado en Vercel.",
    problem: "Demostrar competencias full stack end-to-end en proyecto final de bootcamp: arquitectura, frontend, backend, deployment, testing, todo en 6 semanas trabajando solo.",
    objective: "Construir e-commerce funcional y desplegado que integre auth, pagos, panel admin y base de datos relacional, aplicando Scrum y prácticas de ingeniería aprendidas.",
    architecture: "Next.js (App Router) + Supabase (PostgreSQL, Auth, RLS) + Stripe. Arquitectura serverless. RLS para seguridad a nivel fila. Componentes reutilizables. Testing interno. Deploy en Vercel.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Git", "Vercel"],
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
      demo: "https://henry-hueney-ruca.vercel.app",
      repo: "https://github.com/Mark-kus/hueney-ruca",
    },
    featured: true,
    startDate: "2023-04",
    endDate: "2023-05",
  },
];