import People from "@/components/svgs/brands/People";
import SoyHenry from "@/components/svgs/brands/SoyHenry";
import Epam from "@/components/svgs/brands/Epam";
import Udemy from "@/components/svgs/brands/Udemy";
import UTN from "@/components/svgs/brands/UTN";

export default function Career({ lang, dictionary }) {
  const leftStyle = "timeline-start mb-10 md:text-end";
  const rightStyle = "timeline-end md:mb-10";

  return (
    <section id="career" className="flex flex-col items-center">
      <header className="bg-gradient-gold dark:bg-gradient-marine mb-8 bg-clip-text pb-2 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <article className="w-full md:max-w-6xl">
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
              <time className="font-mono italic">{career.utn.date[lang]}</time>
              <div className="text-lg font-black">{career.utn.title[lang]}</div>
              {career.utn.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>
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
              <time className="font-mono italic">{career.epam.date[lang]}</time>
              <div className="text-lg font-black">
                {career.epam.title[lang]}
              </div>
              {career.epam.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>
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
                {career.people.date[lang]}
              </time>
              <div className="text-lg font-black">
                {career.people.title[lang]}
              </div>
              {career.people.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>
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
                {career.soyHenry.date[lang]}
              </time>
              <div className="text-lg font-black">
                {career.soyHenry.title[lang]}
              </div>
              {career.soyHenry.content[lang]}
            </div>
            <hr className="dark:bg-white" />
          </li>
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
                {career.udemy.date[lang]}
              </time>
              <div className="text-lg font-black">
                {career.udemy.title[lang]}
              </div>
              {career.udemy.content[lang]}
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

const career = {
  utn: {
    icon: <UTN />,
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
  epam: {
    icon: <Epam />,
    date: {
      en: "2023 - Present",
      es: "2023 - Presente",
    },
    title: {
      en: "Vates Software, an EPAM Company",
      es: "Vates Software, una empresa de EPAM",
    },
    content: {
      en: "I participated in the full stack development team, as a junior and as a leader, using React.js with Next.js along with Python with FastAPI. We implemented Scrum practices, focusing on the fast delivery of customized and quality products according to the client's needs.",
      es: "Participé en el equipo de desarrollo full stack, como junior y como lider, utilizando React.js con Next.js junto a Python con FastAPI. Implementamos prácticas de Scrum, enfocándonos en la entrega rápida de productos personalizados y de calidad según las necesidades del cliente.",
    },
  },
  people: {
    icon: <People />,
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
    icon: <SoyHenry />,
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
    icon: <Udemy />,
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
