import Skill from "../components/Skill"

export default function Skills() {
    const techSkills = ['html', 'css', 'javascript']
    return (
        <section className="flex">
            {techSkills.map((skill, i) => <Skill key={i} skill={skill} />)}
        </section>
    )
}