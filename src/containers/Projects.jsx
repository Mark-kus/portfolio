import hueneyRuca from "@/assets/projects/hueneyRuca.webp";

import ProjectPreview from "@/components/ProjectPreview";
import TimelineIcon from "@/components/svgs/TimelineIcon";

export default function Projects({ lang, dictionary }) {
  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="bg-gradient-gold dark:bg-gradient-marine mb-8 bg-clip-text pb-2 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <article className="mt-4 w-full md:max-w-6xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Turnero */}
          {/* <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={leftStyle}>
              <time className="font-mono italic">
                {projects.turnero.date[lang]}
              </time>
              <div className="text-lg font-black">
                {projects.turnero.title[lang]}
              </div>
              {projects.turnero.content[lang]}
              <ProjectPreview
                lang={lang}
                project={projects.turnero}
                dictionary={dictionary.card}
              />
            </div>
            <hr className="dark:bg-white" />
          </li> */}

          {/* Hueney Ruca */}
          <li>
            {/* <hr className="dark:bg-white" /> */}
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={leftStyle}>
              <time className="font-mono italic">
                {projects.hueneyRuca.date[lang]}
              </time>
              <div className="text-lg font-black">
                {projects.hueneyRuca.title[lang]}
              </div>
              {projects.hueneyRuca.content[lang]}
              <ProjectPreview
                lang={lang}
                project={projects.hueneyRuca}
                dictionary={dictionary.card}
              />
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

const leftStyle = "timeline-start mb-10 md:text-end";
const rightStyle = "timeline-end md:mb-10";

const projects = {
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
    alt: {
      en: "Hueney Ruca",
      es: "Hueney Ruca",
    },
    websiteUrl: null,
    repositoryUrl: "https://github.com/Mark-kus/hueney-ruca",
  },
};
