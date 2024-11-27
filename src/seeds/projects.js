import hueneyRuca from "@/assets/projects/hueneyRuca.jpeg";
import rym from "@/assets/projects/rym.jpeg";
import dogApi from "@/assets/projects/dogApi.jpeg";

const projects = [
  {
    name: "Hueney Ruca",
    image: hueneyRuca,
    alt: "Hueney Ruca",
    deploy: "https://hueney-ruca-three.vercel.app/",
    repo: "https://github.com/Mark-kus/hueney-ruca",
    date: "May of 2023",
    description: "Development of an ecommerce web application in a team, as a final project in SoyHenry, using Next.js for the UI along with the back-end logic and Supabase for managing the PostgreSQL database. Ended up in an production-ready application, following good practices for handling sensitive data and presenting an enjoyable and fluid website.",
  },
  {
    name: "Dogs API",
    image: dogApi,
    alt: "Dogs API",
    deploy: "https://dogs-api-kfmi.onrender.com/",
    repo: "https://github.com/Mark-kus/dogs-api",
    date: "April of 2023",
    description: "Developed a website by my own to demonstrate what was learned during the front, back and database modules of SoyHenry, as an integrating project, using React for the UI, Express in the back-end and Sequelize for database management.",
  },
  {
    name: "Rick and Morty API",
    image: rym,
    alt: "Rick and Morty API",
    deploy: "https://rick-and-morty-api-ofpv.onrender.com/",
    repo: "https://github.com/Mark-kus/rick-and-morty-api",
    date: "March of 2023",
    description: "lorem ipsum dolor sit amet",
  },
];

export default projects;
