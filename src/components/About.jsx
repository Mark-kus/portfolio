import Image from "next/image";
import profile from "@/assets/markkus-dark.webp";

const classNames = {
  container: "flex flex-col items-center m-5 md:flex-row",
  image: "w-5/6 sm:w-80 rounded-full",
  textContainer: "text-center md:m-6 md:ml-2 flex flex-col items-center",
  header:
    "text-5xl font-extrabold leading-snug bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine",
  subHeader:
    "text-2xl mb-2 bg-clip-text text-transparent bg-gradient-marine dark:bg-gradient-gold",
  paragraph: "md:text-lg",
  linkYellow: "text-yellow-600 dark:text-yellow-400 hover:underline",
  linkViolet: "text-violet-600 dark:text-violet-400 hover:underline",
  textSky: "text-sky-600 dark:text-sky-400",
};

export default function About({ dictionary }) {
  return (
    <article className={classNames.container}>
      <Image
        src={profile}
        alt="Image of Marco Tignanelli"
        className={`${classNames.image}`}
      />
      <article className={classNames.textContainer}>
        <header className={classNames.header}>{dictionary.name}</header>
        <h4 className={classNames.subHeader}>{dictionary.title}</h4>
        <p className={classNames.paragraph}>
          {dictionary.graduatedFrom}{" "}
          <a
            href="https://www.soyhenry.com/"
            target="_blank"
            className={classNames.linkYellow}
          >
            SoyHenry
          </a>
          , {dictionary.studiedWith}{" "}
          <a
            href="https://www.udemy.com/"
            target="_blank"
            className={classNames.linkViolet}
          >
            Udemy
          </a>
          , {dictionary.toLater}{" "}
          <span className={classNames.textSky}>{dictionary.selfTaught}</span>.{" "}
          <br />
          {dictionary.knowledge} <br />
          {dictionary.continueLearning} <br />
          {dictionary.contactMe}
        </p>
      </article>
    </article>
  );
}
