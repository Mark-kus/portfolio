import { useState } from "react"

export default function Skill({ skill }) {
    const [name, setName] = useState('');
    const showName = () => setName(skill.name);
    const hideName = () => setName('');
    return (
        <figure className="flex justify-center items-center" >
            <img src={skill.tech} alt={skill.name}
                className="w-12 md:w-24 hover:blur-xl transition-all"
                onMouseEnter={showName}
                onMouseLeave={hideName} />
            <h1 className="absolute pointer-events-none">{name}</h1>
        </figure>
    )
}