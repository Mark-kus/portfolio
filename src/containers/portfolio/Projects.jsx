"use client";

import { memo, useMemo, useState, useCallback } from "react";
import dynamic from "next/dynamic";

// Import images normally (not dynamically)
import hueneyRuca from "@/assets/projects/hueneyRuca.webp";
import rickAndMorty from "@/assets/projects/rickAndMorty.webp";
import dogs from "@/assets/projects/dogs.webp";
import emailTemplateEditor from "@/assets/projects/email-template-editor.webp";

// Dynamic import for ProjectPreview
const ProjectPreview = dynamic(() => import("@/components/portfolio/ProjectPreview"), {
  loading: () => <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg" />
});

// Memoized SVG component
const TimelineIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
));
TimelineIcon.displayName = 'TimelineIcon';

// Memoized filter tags component
const FilterTags = memo(({ tags, activeFilter, onFilterChange }) => {
  return tags.map((tag, index) => (
    <button
      onClick={() => onFilterChange(tag)}
      key={index}
      className={`btn border-none font-medium shadow-none hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/70 ${
        activeFilter === tag && "bg-orange-300 text-black hover:bg-orange-300 dark:bg-gray-700! dark:text-white"
      }`}
    >
      {tag}
    </button>
  ));
});
FilterTags.displayName = 'FilterTags';

export default memo(function Projects({ lang, dictionary }) {
  const [activeFilter, setActiveFilter] = useState(null);
  
  const leftStyle = "timeline-start mb-10 md:text-end";
  const rightStyle = "timeline-end md:mb-10";

  // Memoize projects data
  const projects = useMemo(() => ({
    onConstruction: {
      date: { en: null, es: null },
      title: {
        en: "Working on something...",
        es: "Trabajando en algo...",
      },
      content: { en: null, es: null },
      image: null,
      tags: null,
      alt: { en: null, es: null },
      websiteUrl: null,
      repositoryUrl: null,
    },
    emailTemplateEditor: {
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
      image: emailTemplateEditor,
      tags: ["React", "Next.js", "Tailwind CSS"],
      alt: {
        en: "Email Template Editor",
        es: "Editor de Plantillas de Correo",
      },
      websiteUrl: "https://mark-kus.vercel.app/projects/email-template-editor",
      repositoryUrl: null,
    },
    hueneyRuca: {
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
      tags: ["React", "Express", "PostgreSQL"],
      alt: {
        en: "Dogs API",
        es: "Dogs API",
      },
      websiteUrl: "https://dogs-api-kfmi.onrender.com/",
      repositoryUrl: "https://github.com/Mark-kus/dogs-api",
    },
    rickAndMortyAPI: {
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
  }), []);

  // Memoize filters calculation
  const filters = useMemo(() => {
    return Array.from(
      new Set(
        Object.keys(projects)
          .map((project) => projects[project].tags)
          .filter((tag) => tag)
          .flat(),
      ),
    );
  }, [projects]);

  // Memoized callback for filter changes
  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  // Memoize last project with filter
  const lastProjectWithFilter = useMemo(() => {
    return Object.keys(projects)
      .reverse()
      .find((project) => {
        return projects[project].tags?.includes(activeFilter);
      });
  }, [projects, activeFilter]);

  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    if (!activeFilter) return Object.keys(projects);
    return Object.keys(projects).filter(key => 
      projects[key].tags?.includes(activeFilter)
    );
  }, [projects, activeFilter]);

  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="bg-gradient-gold dark:bg-gradient-marine mb-8 bg-clip-text pb-2 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <form className="filter not-sm:flex not-sm:justify-center not-sm:gap-2">
        <input
          className="btn btn-square border-none bg-gray-50 text-black shadow-none dark:bg-black dark:text-white"
          type="reset"
          value="×"
          onClick={() => setActiveFilter(null)}
        />
        {filters.map((filter) => (
          <input
            key={filter}
            className={`btn border-none font-medium shadow-none shadow-black hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/70 ${
              activeFilter === filter && "bg-orange-300 text-black hover:bg-orange-300 dark:bg-gray-700! dark:text-white"
            }`}
            type="radio"
            name="filter"
            aria-label={filter}
            value={filter}
            checked={activeFilter === filter}
            onChange={() => handleFilterChange(filter)}
          />
        ))}
      </form>
      
      <article className="mt-4 w-full md:max-w-6xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <TimelineIcon />
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
          
          {filteredProjects.map((projectKey, index) => {
            if (projectKey === 'onConstruction') return null;
            
            const project = projects[projectKey];
            const isLeft = index % 2 === 0;
            const isLastFiltered = projectKey === lastProjectWithFilter;
            
            return (
              <li key={projectKey}>
                <hr className="dark:bg-white" />
                <div className="timeline-middle">
                  <TimelineIcon />
                </div>
                <div className={isLeft ? leftStyle : rightStyle}>
                  <time className="font-mono italic">
                    {project.date[lang]}
                  </time>
                  <div className="text-lg font-black">
                    {project.title[lang]}
                  </div>
                  {project.content[lang]}
                  <ProjectPreview
                    lang={lang}
                    project={project}
                    dictionary={dictionary.card}
                  />
                  <div className={`mt-2 flex gap-1 ${isLeft ? 'md:justify-end' : ''}`}>
                    <FilterTags 
                      tags={project.tags} 
                      activeFilter={activeFilter}
                      onFilterChange={handleFilterChange}
                    />
                  </div>
                </div>
                {(!activeFilter || !isLastFiltered) && (
                  <hr className="dark:bg-white" />
                )}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
});
