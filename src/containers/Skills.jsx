import Skill from "../components/Skill"
import html from '../assets/tech/html.svg'
import css from '../assets/tech/css.svg'
import javascript from '../assets/tech/javascript.svg'
import nextjs from '../assets/tech/nextjs.svg'
import nodejs from '../assets/tech/nodejs.svg'
import postgres from '../assets/tech/postgres.svg'
import react from '../assets/tech/react.svg'
import redux from '../assets/tech/redux.svg'
import sequelize from '../assets/tech/sequelize.svg'
import mongodb from '../assets/tech/mongodb.svg'

export default function Skills() {
    const techSkills = [{
        tech: html,
        name: 'HTML'
    }, {
        tech: css,
        name: 'CSS'
    }, {
        tech: javascript,
        name: 'Javascript'
    }, {
        tech: nodejs,
        name: 'Node.JS'
    }, {
        tech: react,
        name: 'React.JS'
    }, {
        tech: nextjs,
        name: 'Next.JS'
    }, {
        tech: redux,
        name: 'Redux.JS'
    }, {
        tech: sequelize,
        name: 'Sequelize'
    }, {
        tech: postgres,
        name: 'PostgreSQL'
    }, {
        tech: mongodb,
        name: 'MongoDB'
    }]
    return (
        <section className="flex flex-col md:m-10">
            <header className="text-lg">Tech Skills</header>
            <article className="flex flex-wrap justify-center md:justify-start">
                {techSkills.map((skill, i) => <Skill key={i} skill={skill} />)}
            </article>
        </section>
    )
}