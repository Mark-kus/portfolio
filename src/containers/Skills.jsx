import Skill from "@/components/Skill";
import techSkills from "@/seeds/techSkills";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col md:m-5">
      <header className="text-xl md:text-3xl mb-10 text-center">Main Technologies</header>
      <article className="flex flex-wrap justify-center">
        {techSkills.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </article>
    </section>
  );
}
