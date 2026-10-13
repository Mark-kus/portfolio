export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  stack: string[];
  featured: boolean;
};

export const experience: Experience[] = [
  {
    company: "EEST N°1 San Antonio de Areco",
    role: "Desarrollador Full Stack (pro-bono)",
    period: "Septiembre 2026 – presente",
    location: "San Antonio de Areco, Buenos Aires",
    description: [
      "Sistema de comunicaciones escolares (PWA) — iniciativa propia: detecté necesidad de reemplazar cuaderno físico y alternativas costosas/inseguras; diseñé, desarrollé y desplegué solución completa.",
      "Arquitectura TDD con IA (OpenCode): specs → tests → implementación, validación human-in-the-loop; ~1 semana desarrollo + 1 semana refinamiento/pilotaje con directivos.",
      "Stack moderno serverless: TypeScript/React, Cloudflare Pages/Workers, Supabase (PostgreSQL + RLS + Auth + Edge Functions), Resend, Web Push API + VAPID.",
      "Features: autenticación por invitación vía email (tokens), roles (admin/editor/lector), comunicados dirigidos por curso técnico, notificaciones push, PWA instalable.",
      "En producción desde sep 2026: piloto activo ~50 usuarios (2 cursos técnicos); plan escuela: rollout total 2027; costo $0/mes en free tiers (solo dominio), soporta 1000+ usuarios.",
    ],
    stack: ["TypeScript", "React", "Cloudflare Workers/Pages", "Supabase", "Resend", "Web Push API", "PWA"],
    featured: true,
  },
  {
    company: "EPAM Systems",
    role: "Ingeniero de Software (part-time)",
    period: "Marzo 2024 – Septiembre 2025",
    location: "Buenos Aires, Argentina (remoto)",
    description: [
      "App full stack de planes de comida personalizados (Next.js + FastAPI + PostgreSQL): llevé a producción una aplicación con panel de administración para gestión de usuarios y proveedores; 3+ usuarios reales (pacientes) usando el sistema activamente.",
      "Refactor integral sin frenar entregas: normalicé la base de datos, optimicé gestión de estado React y limpié arquitectura legacy manteniendo cadencia de sprints; resultado: código mantenible, tests estables, velocidad de features intacta.",
      "Prácticas de equipo (3 personas): establecí convenciones REST, principios KISS, revisión de código; mentoré a un compañero en tecnologías clave (FastAPI, React hooks, patterns de testing) mejorando delegación y calidad.",
      "Metodología: Scrum, sprints de 2 semanas, entrega continua, retrospectivas accionables.",
    ],
    stack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "REST APIs", "Git", "Scrum"],
    featured: true,
  },
  {
    company: "Vates Software",
    role: "Desarrollador Full Stack (part-time)",
    period: "Agosto 2023 – Marzo 2024",
    location: "Buenos Aires, Argentina (remoto)",
    description: [
      "API de Índice de Calidad Ponderado (IPCs) — Backend core (Python/FastAPI/PostgreSQL): computaba scores de calidad a partir de métricas cargadas manualmente; adoptada por múltiples proyectos internos de Vates como estándar de medición.",
      "Frontend de Cálculo de Comisiones (Next.js/React + componentes Vuexy sobre diseño Figma): UI pixel-perfect reutilizando library de componentes; calculaba comisiones para Project Managers.",
      "Scrum riguroso: daily standups, planning, review, retro; foco en entrega rápida y soluciones eficientes.",
      "Vates fue adquirida por EPAM; transición interna en marzo 2024.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Next.js", "React", "TypeScript", "Figma", "Vuexy", "REST"],
    featured: true,
  },
  {
    company: "Hueney Ruca (Bootcamp SoyHenry)",
    role: "Desarrollador Full Stack (proyecto final)",
    period: "Abril 2023 – Mayo 2023",
    location: "Remoto",
    description: [
      "E-commerce de alquileres vacacionales end-to-end (Next.js + Supabase + Stripe): reservas, pagos, panel de administración de listados, autenticación, base de datos relacional.",
      "Construido solo en 6 semanas: arquitectura, frontend, backend, deployment (Vercel), testing interno.",
      "Repo público: https://github.com/Mark-kus/hueney-ruca",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Git"],
    featured: true,
  },
  {
    company: "SoyHenry",
    role: "Asistente de Enseñanza (TA)",
    period: "Febrero 2023 – Abril 2023",
    location: "Remoto",
    description: [
      "Mentoreé estudiantes de bootcamp Full Stack (≥1 hora diaria): debugging, code review, explicación de conceptos (React, Node, SQL, Git), apoyo emocional/técnico.",
      "Colaboré con instructores en dinámicas de aula y resolución de bloqueos comunes.",
    ],
    stack: ["React", "Node", "SQL", "Git", "Mentoring"],
    featured: false,
  },
];