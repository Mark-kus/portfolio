export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
};

export const education: Education[] = [
  {
    institution: "Universidad Tecnológica Nacional (UTN)",
    degree: "Ingeniería en Sistemas de Información",
    period: "Abril 2024 – presente",
    location: "Buenos Aires, Argentina",
    details: [
      "Graduación estimada: 2029",
      "Part-time hasta septiembre 2025, full-time desde entonces",
      "Materias base cursadas: Algoritmos, Estructuras de Datos, Arquitectura, SO, Redes, Bases de Datos, Ingeniería de Software",
    ],
  },
  {
    institution: "Bootcamp SoyHenry",
    degree: "Desarrollo Web Full Stack",
    period: "Febrero 2023 – Abril 2023",
    location: "Remoto (intensivo 9 semanas)",
    details: [
      "Full stack JavaScript/TypeScript: React, Node, Express, PostgreSQL, Git, Scrum, testing",
      "Proyecto final: Hueney Ruca (ver proyectos)",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: number;
};

export const certifications: Certification[] = [
  { name: "Python 3 Avanzado", issuer: "UTN FRBA", year: 2024 },
  { name: "Docker y Kubernetes", issuer: "UTN FRBA", year: 2024 },
  { name: "FastAPI", issuer: "Udemy", year: 2023 },
  { name: "Diseño UI", issuer: "Talento Tech / GCBA", year: 2025 },
  { name: "Unity 2D", issuer: "Talento Tech / GCBA", year: 2026 },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B2 (CEFR) — lectura técnica fluida" },
  { name: "Portugués (Brasil)", level: "Fluidez conversacional" },
];