import Skill from "@/components/Skill";
import techSkills from "@/seeds/techSkills";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col md:m-5 items-center">
      <header className="text-3xl md:text-5xl font-extrabold pb-2 mb-8 text-center bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine">Main Technologies</header>
      <article className="flex flex-wrap justify-center">
        {techSkills.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </article>
    </section>
  );
}
