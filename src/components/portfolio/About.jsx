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
};

export default function About({ dictionary }) {
  return (
    <article className={classNames.container}>
      <Image
        loading="eager"
        src={profile}
        alt="Image of Marco Tignanelli"
        className={`${classNames.image}`}
        width={320} // Ajusta según el diseño (sm:w-80 = 20rem = 320px)
        height={320} // Mantén la proporción de la imagen
        sizes="(max-width: 640px) 80vw, 320px" // Define tamaños para responsive
        priority
      />
      <article className={classNames.textContainer}>
        <header className={classNames.header}>{dictionary.name}</header>
        <h4 className={classNames.subHeader}>{dictionary.job}</h4>
        <p className={classNames.paragraph}>
          <span className="text-red-700 dark:text-red-500">TL;DR;</span>{" "}
          {dictionary.part1}{" "}
          <a href='https://www.udemy.com/' target='_blank' className='text-violet-700 dark:text-violet-400 underline'>Udemy</a>
          , {dictionary.part2}{" "}
          <a href='https://www.soyhenry.com/' target='_blank' className='text-orange-800 dark:text-yellow-400 underline'>SoyHenry</a>
          , {dictionary.part3}{" "}
          <span className='text-blue-700 dark:text-blue-400'>{dictionary.myOwn}</span>{" "}
          {dictionary.part4}{" "}
          <span className='text-green-800 dark:text-green-400'>{dictionary.college}</span>. <br />
          {dictionary.part5}{" "}
          <span className='text-blue-700 dark:text-blue-400'>{dictionary.blue}</span>{" "}
          {dictionary.part6}{" "}
          <span className='text-orange-800 dark:text-orange-400'>{dictionary.tangerines}</span>.{" "}
          {dictionary.part7}
        </p>
      </article>
    </article>
  );
}
