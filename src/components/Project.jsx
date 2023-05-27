import { useState } from "react";

export default function Project({ project }) {
    const [title, setTitle] = useState('');

    const showTitle = () => setTitle(project.name);
    const hideTitle = () => setTitle('');
    const clsImage = title ? 'md:scale-110' : ''
    const clsTitle = title ? 'block' : ''

    return (
        <article className="md:w-3/4 md:h-60 border md:rounded-lg md:mx-auto overflow-hidden"
        onMouseEnter={showTitle}
        onMouseLeave={hideTitle}>
            <img src={project.image} alt={project.name} className={`object-cover w-full h-full
            transition-all ${clsImage}`} />
            <h1 className={`p-2 hidden absolute bottom-0 md:block border-t border-slate-500 bg-slate-400
             ${clsTitle}`}>{title}</h1>
            <h1 className="m-2 md:hidden">{project.name}</h1>
        </article>
    )
}