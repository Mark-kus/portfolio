import Skill from "../components/Skill"
import techSkills from "../seeds/techSkills"

export default function Skills() {
    return (
        <section className="flex flex-col md:m-10">
            <header className="text-lg">Tech Skills</header>
            <article className="flex flex-wrap justify-center md:justify-start">
                {techSkills.map((skill, i) => <Skill key={i} skill={skill} />)}
            </article>
        </section>
    )
}