import Image from "next/image";

export default function Project({ project }) {
    return (
        <article className="xl:w-[400px] md:w-[375px] md:h-60 border md:rounded-lg md:mx-auto overflow-hidden">

            <div className="overflow-hidden">
                <Image src={project.image} alt={project.name} className="object-cover w-full 
                transition-all h-52 hover:scale-110 duration-500" />
            </div>

            <div className={`flex justify-between bg-slate-600`}>
                <h1 className="p-1">{project.name}</h1>
                <a href={project.deploy || project.repo} target="_blank"
                    className="p-1 transition-opacity hover:opacity-70">{project.deploy ? 'Go to deploy' : 'Go to repository'}</a>
            </div>

        </article>
    )
}