import Skill from "@/components/portfolio/Skill";
import skills from "@/seeds/skills";

export default function Skills({ dictionary }) {
  return (
    <section id="skills" className="flex flex-col md:m-5 items-center">
      <header className="text-3xl md:text-5xl font-extrabold pb-2 mb-8 text-center bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine">
        {dictionary.title}
      </header>
      <article className="flex flex-wrap justify-center md:max-w-4xl">
        {skills.map((skill, i) => (
          <Skill key={i} skill={skill} render={skill.component} />
        ))}
      </article>
    </section>
  );
}
