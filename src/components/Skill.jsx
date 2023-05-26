export default function Skill({ skill }) {
    return (
        <figure>
            <img src={skill} alt={skill.slice(-4)} 
            className="w-12 md:w-24"/>
        </figure>
    )
}