import PersonalImage from "./PersonalImage";

const classNames = {
  link: "underline transition-colors duration-200",
};

const About = ({ dictionary }) => {
  return (
    <div className="m-10 rounded-3xl border-2 border-amber-900 dark:border-slate-700">
      <article className="m-5 flex flex-col items-center lg:flex-row">
        <PersonalImage />
        <article className="flex flex-col items-center text-center md:m-6 md:ml-2">
          <header className="bg-gradient-gold dark:bg-gradient-marine bg-clip-text text-5xl leading-snug font-extrabold text-transparent">
            {dictionary.name}
          </header>
          <h4 className="bg-gradient-marine dark:bg-gradient-gold mb-2 bg-clip-text text-2xl text-transparent">
            {dictionary.job}
          </h4>
          <p className="max-w-[900px] md:text-lg xl:max-w-[1200px]">
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
            .
          </p>
        </article>
      </article>
    </div>
  );
};

export default About;
