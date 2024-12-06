import hueneyRuca from "@/assets/projects/hueneyRuca.webp";
import rickAndMorty from "@/assets/projects/rickAndMorty.webp";
import dogs from "@/assets/projects/dogs.webp";

import ReactJS from "@/components/svgs/techonologies/ReactJS";
import NextJS from "@/components/svgs/techonologies/NextJS";
import People from "@/components/svgs/brands/People";
import SoyHenry from "@/components/svgs/brands/SoyHenry";
import Epam from "@/components/svgs/brands/Epam";
import Udemy from "@/components/svgs/brands/Udemy";
import UTN from "@/components/svgs/brands/UTN";

const projects = [
  {
    props: {
      className: "vertical-timeline-element--education",
      iconStyle: { background: "#FFF" },
      icon: <UTN />,
    },
    data: {
      date: {
        en: "2024 - Present",
        es: "2024 - Presente",
      },
      content: {
        en: "",
        es: "",
      },
      title: {
        en: "National Technological University",
        es: "Universidad Tecnológica Nacional",
      },
      image: null,
      alt: {
        en: "National Technological University",
        es: "Universidad Tecnológica Nacional",
      },
      websiteUrl: "https://utn.edu.ar/",
      repositoryUrl: null,
    },
  },
  {
    props: {
      className: "vertical-timeline-element--work",
      iconStyle: { background: "#FFF" },
      icon: <Epam />,
    },
    data: {
      date: {
        en: "2023 / August - Present",
        es: "2023 / Agosto - Presente",
      },
      content: {
        en: "I participated in the full stack development team, as a junior and as a leader, using React.js with Next.js along with Python with FastAPI. We implemented Scrum practices, focusing on the fast delivery of customized and quality products according to the client's needs.",
        es: "Participé en el equipo de desarrollo full stack, como junior y como lider, utilizando React.js con Next.js junto a Python con FastAPI. Implementamos prácticas de Scrum, enfocándonos en la entrega rápida de productos personalizados y de calidad según las necesidades del cliente.",
      },
      title: {
        en: "Vates Software, an EPAM Company",
        es: "Vates Software, una empresa de EPAM",
      },
      image: null,
      alt: {
        en: "Vates Software, an EPAM Company",
        es: "Vates Software, una empresa de EPAM",
      },
      websiteUrl: "https://vates.com/",
      repositoryUrl: null,
    },
  },
  {
    props: {
      className: "vertical-timeline-element--work",
      iconStyle: { background: "#000" },
      icon: <People />,
    },
    data: {
      date: {
        en: "2023 / July - August",
        es: "2023 / Julio - Agosto",
      },
      content: {
        en: "Managed to develop the implementation of various APIs, such as Github, Google Maps and Spotify, using React, to deliver a styled product to embed in the final application.",
        es: "Me encargué de desarrollar la implementación de varias APIs, como Github, Google Maps y Spotify, utilizando React, para entregar un producto estilizado que incrustar en la aplicación final.",
      },
      title: {
        en: "PPOL Internship",
        es: "Pasantía en PPOL",
      },
      image: null,
      alt: {
        en: "PPOL Internship",
        es: "Pasantía en PPOL",
      },
      websiteUrl: "https://ppol.io/",
      repositoryUrl: null,
    },
  },
  {
    props: {
      className: "vertical-timeline-element--work",
      iconStyle: { background: "#000" },
      icon: <NextJS />,
    },
    data: {
      date: {
        en: "2023 / May - June",
        es: "2023 / Mayo - Junio",
      },
      content: {
        en: "Development of an ecommerce web application in a team, as a final project in SoyHenry, using Next.js for the UI along with the back-end logic and Supabase for managing the PostgreSQL database. Ended up in an production-ready application, following good practices for handling sensitive data and presenting an enjoyable and fluid website.",
        es: "Desarrollo de una aplicación web de ecommerce en equipo, como proyecto final en SoyHenry, utilizando Next.js para la UI junto con la lógica del back-end y Supabase para la gestión de la base de datos PostgreSQL. Terminó siendo una aplicación lista para producción, siguiendo buenas prácticas para el manejo de datos sensibles y presentando un sitio web agradable y fluido.",
      },
      title: {
        en: "Hueney Ruca",
        es: "Hueney Ruca",
      },
      image: hueneyRuca,
      alt: {
        en: "Hueney Ruca",
        es: "Hueney Ruca",
      },
      websiteUrl: "https://hueney-ruca-three.vercel.app/",
      repositoryUrl: "https://github.com/Mark-kus/hueney-ruca",
    },
  },
  {
    props: {
      className: "vertical-timeline-element--work",
      iconStyle: { background: "#000" },
      icon: <ReactJS />,
    },
    data: {
      date: {
        en: "2023 / April - May",
        es: "2023 / Abril - Mayo",
      },
      content: {
        en: "Developed a website by my own to demonstrate what was learned during the front, back and database modules of SoyHenry, as an integrating project, using React for the UI, Express in the back-end and Sequelize for database management.",
        es: "Desarrollé un sitio web por mi cuenta para demostrar lo aprendido durante los módulos de front, back y base de datos de SoyHenry, como proyecto integrador, utilizando React para la UI, Express en el back-end y Sequelize para la gestión de la base de datos.",
      },
      title: {
        en: "Dogs API",
        es: "Dogs API",
      },
      image: dogs,
      alt: {
        en: "Dogs API",
        es: "Dogs API",
      },
      websiteUrl: "https://dogs-api-kfmi.onrender.com/",
      repositoryUrl: "https://github.com/Mark-kus/dogs-api",
    },
  },
  {
    props: {
      className: "vertical-timeline-element--work",
      iconStyle: { background: "#000" },
      icon: <ReactJS />,
    },
    data: {
      date: {
        en: "2023 / March - April",
        es: "2023 / Marzo - Abril",
      },
      content: {
        en: "I carried out a project using the Rick and Morty API, to implement what I learned in the front and back modules of SoyHenry on the fly. I used React for the UI and Express in the back-end.",
        es: "Desarrollé un proyecto con el uso de la API de Rick y Morty, para implementar lo aprendido en los módulos de front y back de SoyHenry sobre la marcha. Utilicé React para la UI y Express en el back-end.",
      },
      title: {
        en: "Rick and Morty API",
        es: "Rick y Morty API",
      },
      image: rickAndMorty,
      alt: {
        en: "Rick and Morty API",
        es: "Rick y Morty API",
      },
      websiteUrl: "https://rick-and-morty-api-ofpv.onrender.com/",
      repositoryUrl: "https://github.com/Mark-kus/rick-and-morty-api",
    },
  },
  {
    props: {
      className: "vertical-timeline-element--education",
      iconStyle: { background: "#000" },
      icon: <SoyHenry />,
    },
    data: {
      date: {
        en: "2023 / February - June",
        es: "2023 / Febrero - Junio",
      },
      content: {
        en: "Made an intensive full-stack web development bootcamp at SoyHenry, covering front-end, back-end, and database management. The career included technologies such as JavaScript, React, Node.js, Express, and PostgreSQL.",
        es: "Realicé un bootcamp intensivo de desarrollo web full-stack en SoyHenry, cubriendo front-end, back-end y gestión de bases de datos. El plan de estudios incluyó tecnologías como JavaScript, React, Node.js, Express y PostgreSQL.",
      },
      title: {
        en: "SoyHenry Bootcamp",
        es: "Bootcamp de SoyHenry",
      },
      image: null,
      alt: {
        en: "SoyHenry Bootcamp",
        es: "Bootcamp de SoyHenry",
      },
      websiteUrl: "https://www.soyhenry.com/",
      repositoryUrl: null,
    },
  },
  {
    props: {
      className: "vertical-timeline-element--education",
      iconStyle: { background: "#FFF" },
      icon: <Udemy />,
    },
    data: {
      date: {
        en: "2022 - 2023",
        es: "2022 - 2023",
      },
      content: {
        en: "I started my journey in the world of programming by taking a full-stack web development course on Udemy, with Colt Steele as the teacher (a great guy), where I learned the fundamentals of HTML, CSS, JavaScript, Node.js, Express, and MongoDB. That's how I got the hang of programming.",
        es: "Acá empezó todo. Me anoté en un curso de desarrollo web full stack en Udemy, con Colt Steele como profesor (un tipazo), donde aprendí los fundamentos de HTML, CSS, JavaScript, Node.js, Express y MongoDB. Así le agarré el gustito a la programación.",
      },
      title: {
        en: "Udemy Web Development Course",
        es: "Curso de Desarrollo Web de Udemy",
      },
      image: null,
      alt: {
        en: "Udemy Web Development Course",
        es: "Curso de Desarrollo Web de Udemy",
      },
      websiteUrl: "https://www.udemy.com/",
      repositoryUrl: null,
    },
  },
];

export default projects;
