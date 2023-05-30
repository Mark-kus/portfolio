import { useState } from "react";

export default function Project({ project }) {
    const [toggle, setToggle] = useState(false);

    const showToggle = () => setToggle(true);
    const hideToggle = () => setToggle(false);

    const clsImage = toggle ? 'md:scale-105' : ''

    return (
        <article className="xl:w-[400px] md:w-[375px] md:h-60 border md:rounded-lg md:mx-auto overflow-hidden">

            <img src={project.image} alt={project.name} className={`object-cover w-full 
            transition-all h-52 ${clsImage}`}
                onMouseEnter={showToggle}
                onMouseLeave={hideToggle} />

            <div className={`flex justify-between bg-slate-600`}>
                <h1 className="p-1">{project.name}</h1>
                <a href={project.deploy || project.repo} target="_blank"
                    className="p-1 bg-slate-800 hover:bg-slate-950">{project.deploy ? 'Go to deploy' : 'Go to repository'}</a>
            </div>

        </article>
    )
}