import Skill from "../components/Skill"
import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import javscript from '../assets/tech/javascript.svg'
import nextjs from '../assets/tech/nextjs.svg'
import nodejs from '../assets/tech/nodejs.svg'
import postgres from '../assets/tech/postgres.svg'
import react from '../assets/tech/react.svg'
import redux from '../assets/tech/redux.svg'
import sequelize from '../assets/tech/sequelize.svg'

export default function Skills() {
    const techSkills = [html, css, javscript, nodejs, react, nextjs, redux, postgres, sequelize]
    return (
        <section className="flex flex-col">
            <header className="text-lg">Tech Skills</header>
            <article className="flex flex-wrap justify-center">
                {techSkills.map((skill, i) => <Skill key={i} skill={skill} />)}
            </article>
        </section>
    )
}