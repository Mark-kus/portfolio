import hueneyRuca from "@/assets/projects/hueneyRuca.jpeg";
import rym from "@/assets/projects/rym.jpeg";
import dogApi from "@/assets/projects/dogApi.jpeg";

import Mortarboard from "@/components/svgs/generic/Mortarboard";
import ReactJS from "@/components/svgs/techonologies/ReactJS";
import NextJS from "@/components/svgs/techonologies/NextJS";
import People from "@/components/svgs/brands/People";
import SoyHenry from "@/components/svgs/brands/SoyHenry";
import Epam from "@/components/svgs/brands/Epam";

const projects = [
  {
    props: {
      className: "vertical-timeline-element--work",
      contentStyle: {
        background: "#000",
        color: "#fff",
      },
      contentArrowStyle: { borderRight: "7px solid  #000" },
      iconStyle: { background: "#FFF", color: "#fff" },
      icon: <Epam />,
    },
    data: {
      date: {
        en: "2023 / July - August",
        es: "2023 / Julio - Agosto",
      },
      content: {
        en: "Completed a one-month internship at PPOL, where I gained practical experience in web development, working on various projects and collaborating with a professional team. This internship provided valuable insights into industry practices and enhanced my technical skills.",
        es: "Completé una pasantía de un mes en PPOL, donde adquirí experiencia práctica en desarrollo web, trabajando en varios proyectos y colaborando con un equipo profesional. Esta pasantía proporcionó valiosas ideas sobre las prácticas de la industria y mejoró mis habilidades técnicas.",
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
      contentStyle: {
        background: "#000",
        color: "#fff",
      },
      contentArrowStyle: { borderRight: "7px solid  #000" },
      iconStyle: { background: "#000", color: "#fff" },
      icon: <People />,
    },
    data: {
      date: {
        en: "2023 / July - August",
        es: "2023 / Julio - Agosto",
      },
      content: {
        en: "Completed a one-month internship at PPOL, where I gained practical experience in web development, working on various projects and collaborating with a professional team. This internship provided valuable insights into industry practices and enhanced my technical skills.",
        es: "Completé una pasantía de un mes en PPOL, donde adquirí experiencia práctica en desarrollo web, trabajando en varios proyectos y colaborando con un equipo profesional. Esta pasantía proporcionó valiosas ideas sobre las prácticas de la industria y mejoró mis habilidades técnicas.",
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
      contentStyle: { background: "#000", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  #000" },
      iconStyle: { background: "#000", color: "#fff" },
      icon: <NextJS />,
    },
    data: {
      date: {
        en: "2023 / May",
        es: "2023 / Mayo",
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
      contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      icon: <ReactJS />,
    },
    data: {
      date: {
        en: "2023 / April",
        es: "2023 / Abril",
      },
      content: {
        en: "Developed a website by my own to demonstrate what was learned during the front, back and database modules of SoyHenry, as an integrating project, using React for the UI, Express in the back-end and Sequelize for database management.",
        es: "Desarrollé un sitio web por mi cuenta para demostrar lo aprendido durante los módulos de front, back y base de datos de SoyHenry, como proyecto integrador, utilizando React para la UI, Express en el back-end y Sequelize para la gestión de la base de datos.",
      },
      title: {
        en: "Dogs API",
        es: "Dogs API",
      },
      image: dogApi,
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
      contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      icon: <ReactJS />,
    },
    data: {
      date: {
        en: "2023 / March",
        es: "2023 / Marzo",
      },
      content: {
        en: "I carried out a project using the Rick and Morty API, to implement what I learned in the front and back modules of SoyHenry on the fly. I used React for the UI and Express in the back-end.",
        es: "Desarrollé un proyecto con el uso de la API de Rick y Morty, para implementar lo aprendido en los módulos de front y back de SoyHenry sobre la marcha. Utilicé React para la UI y Express en el back-end.",
      },
      title: {
        en: "Rick and Morty API",
        es: "Rick y Morty API",
      },
      image: rym,
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
      contentStyle: {
        background: "#000",
        color: "yellow",
      },
      contentArrowStyle: { borderRight: "7px solid #000" },
      iconStyle: { background: "#000", color: "yellow" },
      icon: <SoyHenry />,
    },
    data: {
      date: {
        en: "2023 / February - June",
        es: "2023 / Febrero - Junio",
      },
      content: {
        en: "Made an intensive full-stack web development bootcamp at SoyHenry, covering front-end, back-end, and database management. The curriculum included technologies such as JavaScript, React, Node.js, Express, and PostgreSQL.",
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
];

export default projects;
