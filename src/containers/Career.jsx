import TimelineIcon from "@/components/svgs/TimelineIcon";

export default function Career({ lang, dictionary }) {
  return (
    <section id="career" className="flex flex-col items-center">
      <header className="bg-gradient-gold dark:bg-gradient-marine mb-8 bg-clip-text pb-2 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <article className="w-full md:max-w-6xl">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* UTN */}
          <li>
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={rightStyle}>
              <time className="font-mono italic">{career.utn.date[lang]}</time>
              <div className="text-lg italic">{career.utn.title[lang]}</div>
              {career.utn.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>

          {/* EPAM Systems */}
          <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={leftStyle}>
              <time className="font-mono italic">
                {career.epamSystems.date[lang]}
              </time>
              <div className="text-lg italic">
                {career.epamSystems.title[lang]}
              </div>
              {career.epamSystems.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>

          {/* Vates Software */}
          <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={rightStyle}>
              <time className="font-mono italic">
                {career.vatesSoftware.date[lang]}
              </time>
              <div className="text-lg italic">
                {career.vatesSoftware.title[lang]}
              </div>
              {career.vatesSoftware.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>

          {/* People */}
          {/* <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={rightStyle}>
              <time className="font-mono italic">
                {career.people.date[lang]}
              </time>
              <div className="text-lg italic">{career.people.title[lang]}</div>
              {career.people.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li> */}

          {/* SoyHenry */}
          <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={leftStyle}>
              <time className="font-mono italic">
                {career.soyHenry.date[lang]}
              </time>
              <div className="text-lg italic">
                {career.soyHenry.title[lang]}
              </div>
              {career.soyHenry.content[lang]}
            </div>
            {/* <hr className="dark:bg-white" /> */}
          </li>

          {/* Udemy */}
          {/* <li>
            <hr className="dark:bg-white" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className={rightStyle}>
              <time className="font-mono italic">
                {career.udemy.date[lang]}
              </time>
              <div className="text-lg italic">{career.udemy.title[lang]}</div>
              {career.udemy.content[lang]}
            </div>
          </li> */}
        </ul>
      </article>
    </section>
  );
}

const leftStyle = "timeline-start mb-10 md:text-end";
const rightStyle = "timeline-end md:mb-10";

const career = {
  utn: {
    date: {
      en: "2024 - Present",
      es: "2024 - Presente",
    },
    title: {
      en: "National Technological University",
      es: "Universidad Tecnológica Nacional",
    },
    content: {
      en: "Intrigued by technology and programming, I decided to start the Systems Engineering career at the National Technological University, to continue learning about it from a more formal and structured perspective.",
      es: "Intrigado por la tecnología y la programación, decidí comenzar la carrera de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, para seguir aprendiendo sobre ello desde una perspectiva más formal y estructurada.",
    },
  },
  epamSystems: {
    date: {
      en: "March 2024 - September 2025",
      es: "Marzo 2024 - Septiembre 2025",
    },
    title: {
      en: "EPAM Systems - Software Engineer",
      es: "EPAM Systems - Ingeniero de Software",
    },
    content: {
      en: "Developed a full-stack application for personalized meal plans with an admin dashboard. Refactored a RESTful API, normalized database structures, and optimized React state management, reducing code size by over 20%. Coordinated team efforts, improved workflows, and mentored a team member in key technologies for better code quality.",
      es: "Desarrollé una aplicación full-stack para generar planes de comidas personalizados con un panel de administración. Refactoricé una API RESTful, normalicé estructuras de base de datos y optimicé la gestión de estado en React, reduciendo el código en más de 20%. Coordiné esfuerzos del equipo, mejoré flujos de trabajo y brindé mentoría en tecnologías clave.",
    },
  },
  vatesSoftware: {
    date: {
      en: "August 2023 - March 2024",
      es: "Agosto 2023 - Marzo 2024",
    },
    title: {
      en: "Vates Software - Full Stack Developer",
      es: "Vates Software - Desarrollador Full Stack",
    },
    content: {
      en: "Built two key applications for internal operations: a commission calculation system and a weighted quality index platform. Designed and implemented backend APIs with Python, FastAPI, and PostgreSQL. Collaborated in front-end development using React and Next.js, converting Figma designs into pixel-perfect interfaces while following Scrum best practices.",
      es: "Construí dos aplicaciones clave para operaciones internas: un sistema de cálculo de comisiones y una plataforma de índice de calidad ponderado. Diseñé e implementé APIs backend con Python, FastAPI y PostgreSQL. Colaboré en el desarrollo frontend utilizando React y Next.js, transformando diseños de Figma en interfaces pixel-perfect siguiendo las mejores prácticas de Scrum.",
    },
  },
  people: {
    date: {
      en: "2023 / July - August",
      es: "2023 / Julio - Agosto",
    },
    title: {
      en: "PPOL Internship",
      es: "Pasantía en PPOL",
    },
    content: {
      en: "Managed to develop the implementation of various APIs, such as Github, Google Maps and Spotify, using React, to deliver a styled product to embed in the final application.",
      es: "Me encargué de desarrollar la implementación de varias APIs, como Github, Google Maps y Spotify, utilizando React, para entregar un producto estilizado que incrustar en la aplicación final.",
    },
  },
  soyHenry: {
    date: {
      en: "2023 / February - June",
      es: "2023 / Febrero - Junio",
    },
    title: {
      en: "SoyHenry Bootcamp",
      es: "Bootcamp de SoyHenry",
    },
    content: {
      en: "Made an intensive full-stack web development bootcamp at SoyHenry, covering front-end, back-end, and database management. The career included technologies such as JavaScript, React, Node.js, Express, and PostgreSQL.",
      es: "Realicé un bootcamp intensivo de desarrollo web full-stack en SoyHenry, cubriendo front-end, back-end y gestión de bases de datos. El plan de estudios incluyó tecnologías como JavaScript, React, Node.js, Express y PostgreSQL.",
    },
  },
  udemy: {
    date: {
      en: "2022 - 2023",
      es: "2022 - 2023",
    },
    title: {
      en: "Udemy Web Development Course",
      es: "Curso de Desarrollo Web de Udemy",
    },
    content: {
      en: "I started my journey in the world of programming by taking a full-stack web development course on Udemy, with Colt Steele as the teacher (a great guy), where I learned the fundamentals of HTML, CSS, JavaScript, Node.js, Express, and MongoDB. That's how I got the hang of programming.",
      es: "Acá empezó todo. Me anoté en un curso de desarrollo web full stack en Udemy, con Colt Steele como profesor (un tipazo), donde aprendí los fundamentos de HTML, CSS, JavaScript, Node.js, Express y MongoDB. Así le agarré el gustito a la programación.",
    },
  },
};
