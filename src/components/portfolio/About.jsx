import { memo } from "react";
import PersonalImage from "./PersonalImage";

const classNames = {
  container: "flex flex-col items-center m-5 lg:flex-row",
  textContainer: "text-center md:m-6 md:ml-2 flex flex-col items-center",
  header:
    "text-5xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine",
  subHeader:
    "text-2xl mb-2 bg-clip-text text-transparent bg-gradient-marine dark:bg-gradient-gold",
  paragraph: "md:text-lg max-w-[900px] xl:max-w-[1200px]",
  link: "underline transition-colors duration-200"
};

const About = memo(({ dictionary }) => {
  return (
    <article className={classNames.container}>
      <PersonalImage />
      <article className={classNames.textContainer}>
        <header className={classNames.header}>{dictionary.name}</header>
        <h4 className={classNames.subHeader}>{dictionary.job}</h4>
        <p className={classNames.paragraph}>
          <span className="text-red-700 dark:text-red-500">TL;DR;</span>{" "}
          {dictionary.part1}{" "}
          <a
            href="https://www.udemy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-violet-700 dark:text-violet-400 ${classNames.link}`}
          >
            Udemy
          </a>
          , {dictionary.part2}{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-orange-800 dark:text-yellow-400 ${classNames.link}`}
          >
            SoyHenry
          </a>
          , {dictionary.part3}{" "}
          <span className="text-blue-700 dark:text-blue-400">
            {dictionary.myOwn}
          </span>{" "}
          {dictionary.part4}{" "}
          <span className="text-green-800 dark:text-green-400">
            {dictionary.college}
          </span>
          . <br />
          {dictionary.part5}{" "}
          <span className="text-blue-700 dark:text-blue-400">
            {dictionary.blue}
          </span>{" "}
          {dictionary.part6}
        </p>
      </article>
    </article>
  );
});

About.displayName = 'About';

export default About;
