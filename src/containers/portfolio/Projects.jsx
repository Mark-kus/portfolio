"use client";

import hueneyRuca from "@/assets/projects/hueneyRuca.webp";
import rickAndMorty from "@/assets/projects/rickAndMorty.webp";
import dogs from "@/assets/projects/dogs.webp";
import ReactJS from "@/components/svgs/techonologies/ReactJS";
import NextJS from "@/components/svgs/techonologies/NextJS";
import OnConstruction from "@/components/svgs/generic/OnConstruction";
import Mail from "@/components/svgs/media/Mail";
import { useState } from "react";

export default function Projects({ lang, dictionary }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const leftStyle = "timeline-start mb-10 md:text-end";
  const rightStyle = "timeline-end md:mb-10";

  const filters = Array.from(
    new Set(
      Object.keys(projects)
        .map((project) => {
          return projects[project].tags;
        })
        .filter((tag) => tag)
        .flat(),
    ),
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const lastProjectWithFilter = Object.keys(projects)
    .reverse()
    .find((project) => {
      return projects[project].tags?.includes(activeFilter);
    });

  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="bg-gradient-gold dark:bg-gradient-marine mb-8 bg-clip-text pb-2 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <form className="filter not-sm:flex not-sm:gap-2 not-sm:justify-center">
        <input
          className="btn btn-square bg-error border-white"
          type="reset"
          value="×"
          onClick={() => setActiveFilter(null)}
        />
        {filters.map((filter) => (
          <input
            key={filter}
            className="btn border-none bg-black font-medium shadow-none dark:bg-white dark:text-black"
            type="radio"
            name="filter"
            aria-label={filter}
            value={filter}
            onChange={() => handleFilterChange(filter)}
          />
        ))}
      </form>
      <article className="mt-4 w-full md:max-w-6xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={rightStyle}>
              <time className="font-mono italic">
                {projects.onConstruction.date[lang]}
              </time>
              <div className="text-lg font-black">
                {projects.onConstruction.title[lang]}
              </div>
              {projects.onConstruction.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>
          {(projects.emailTemplateEditor.tags.includes(activeFilter) ||
            !activeFilter) && (
            <li>
              <hr className="dark:bg-white" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={leftStyle}>
                <time className="font-mono italic">
                  {projects.emailTemplateEditor.date[lang]}
                </time>
                <div className="text-lg font-black">
                  {projects.emailTemplateEditor.title[lang]}
                </div>
                {projects.emailTemplateEditor.content[lang]}
              </div>
              {(!activeFilter ||
                !Object.is(
                  projects[lastProjectWithFilter],
                  projects.emailTemplateEditor,
                )) && <hr className="dark:bg-white" />}
            </li>
          )}
          {(projects.hueneyRuca.tags.includes(activeFilter) ||
            !activeFilter) && (
            <li>
              <hr className="dark:bg-white" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={rightStyle}>
                <time className="font-mono italic">
                  {projects.hueneyRuca.date[lang]}
                </time>
                <div className="text-lg font-black">
                  {projects.hueneyRuca.title[lang]}
                </div>
                {projects.hueneyRuca.content[lang]}
              </div>
              {(!activeFilter ||
                !Object.is(
                  projects[lastProjectWithFilter],
                  projects.hueneyRuca,
                )) && <hr className="dark:bg-white" />}
            </li>
          )}
          {(projects.dogsAPI.tags.includes(activeFilter) || !activeFilter) && (
            <li>
              <hr className="dark:bg-white" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={leftStyle}>
                <time className="font-mono italic">
                  {projects.dogsAPI.date[lang]}
                </time>
                <div className="text-lg font-black">
                  {projects.dogsAPI.title[lang]}
                </div>
                {projects.dogsAPI.content[lang]}
              </div>
              {(!activeFilter ||
                !Object.is(
                  projects[lastProjectWithFilter],
                  projects.dogsAPI,
                )) && <hr className="dark:bg-white" />}
            </li>
          )}
          {(projects.rickAndMortyAPI.tags.includes(activeFilter) ||
            !activeFilter) && (
            <li>
              <hr className="dark:bg-white" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={rightStyle}>
                <time className="font-mono italic">
                  {projects.rickAndMortyAPI.date[lang]}
                </time>
                <div className="text-lg font-black">
                  {projects.rickAndMortyAPI.title[lang]}
                </div>
                {projects.rickAndMortyAPI.content[lang]}
              </div>
            </li>
          )}
        </ul>
      </article>
    </section>
  );
}

const projects = {
  onConstruction: {
    icon: <OnConstruction />,
    date: {
      en: null,
      es: null,
    },
    title: {
      en: "Working on something...",
      es: "Trabajando en algo...",
    },
    content: {
      en: null,
      es: null,
    },
    image: null,
    tags: null,
    alt: {
      en: null,
      es: null,
    },
    websiteUrl: null,
    repositoryUrl: null,
  },
  emailTemplateEditor: {
    icon: <Mail />,
    date: {
      en: "2025 / February",
      es: "2025 / Febrero",
    },
    title: {
      en: "Email Template Editor",
      es: "Editor de Plantillas de Correo",
    },
    content: {
      en: "Someone had many email templates, all with different purposes. They replaced the content of some brackets with the corresponding text. This MVP uses local data persistence so that anyone can save their own templates, load content into them, and copy the result to the clipboard after a preview.",
      es: "Alguien tenía muchas plantillas de emails, todas con propósitos distintos. Reemplazaba el contenido de unos corchetes por el texto que correspondía. Este MVP utiliza persistencia de datos local para que cualquiera pueda guardar sus propias plantillas, cargarles contenido y copiar el resultado al portapapeles tras una vista previa.",
    },
    image: null,
    tags: ["React", "Tailwind CSS", "Local Storage"],
    alt: {
      en: "Email Template Editor",
      es: "Editor de Plantillas de Correo",
    },
    websiteUrl: "https://mark-kus.vercel.app/en/projects/email-template-editor",
    repositoryUrl: null,
  },
  hueneyRuca: {
    icon: <NextJS />,
    date: {
      en: "2023 / May - June",
      es: "2023 / Mayo - Junio",
    },
    title: {
      en: "Hueney Ruca",
      es: "Hueney Ruca",
    },
    content: {
      en: "Development of an ecommerce web application in a team, as a final project in SoyHenry, using Next.js for the UI along with the back-end logic and Supabase for managing the PostgreSQL database. Ended up in an production-ready application, following good practices for handling sensitive data and presenting an enjoyable and fluid website.",
      es: "Desarrollo de una aplicación web de ecommerce en equipo, como proyecto final en SoyHenry, utilizando Next.js para la UI junto con la lógica del back-end y Supabase para la gestión de la base de datos PostgreSQL. Terminó siendo una aplicación lista para producción, siguiendo buenas prácticas para el manejo de datos sensibles y presentando un sitio web agradable y fluido.",
    },
    image: hueneyRuca,
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    alt: {
      en: "Hueney Ruca",
      es: "Hueney Ruca",
    },
    websiteUrl: null,
    repositoryUrl: "https://github.com/Mark-kus/hueney-ruca",
  },
  dogsAPI: {
    icon: <ReactJS />,
    date: {
      en: "2023 / April - May",
      es: "2023 / Abril - Mayo",
    },
    title: {
      en: "Dogs API",
      es: "Dogs API",
    },
    content: {
      en: "Developed a website by my own to demonstrate what was learned during the front, back and database modules of SoyHenry, as an integrating project, using React for the UI, Express in the back-end and Sequelize for database management.",
      es: "Desarrollé un sitio web por mi cuenta para demostrar lo aprendido durante los módulos de front, back y base de datos de SoyHenry, como proyecto integrador, utilizando React para la UI, Express en el back-end y Sequelize para la gestión de la base de datos.",
    },
    image: dogs,
    tags: ["React", "Express", "Sequelize"],
    alt: {
      en: "Dogs API",
      es: "Dogs API",
    },
    websiteUrl: "https://dogs-api-kfmi.onrender.com/",
    repositoryUrl: "https://github.com/Mark-kus/dogs-api",
  },
  rickAndMortyAPI: {
    icon: <ReactJS />,
    date: {
      en: "2023 / March - April",
      es: "2023 / Marzo - Abril",
    },
    title: {
      en: "Rick and Morty API",
      es: "Rick y Morty API",
    },
    content: {
      en: "I carried out a project using the Rick and Morty API, to implement what I learned in the front and back modules of SoyHenry on the fly. I used React for the UI and Express in the back-end.",
      es: "Desarrollé un proyecto con el uso de la API de Rick y Morty, para implementar lo aprendido en los módulos de front y back de SoyHenry sobre la marcha. Utilicé React para la UI y Express en el back-end.",
    },
    image: rickAndMorty,
    tags: ["React", "Express"],
    alt: {
      en: "Rick and Morty API",
      es: "Rick y Morty API",
    },
    websiteUrl: "https://rick-and-morty-api-ofpv.onrender.com/",
    repositoryUrl: "https://github.com/Mark-kus/rick-and-morty-api",
  },
};
