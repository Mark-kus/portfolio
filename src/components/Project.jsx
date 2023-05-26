export default function Project({ project }) {
    return (
        <article className="md:w-3/4 border md:rounded-lg md:mx-auto">
            <img src={project.image} alt={project.name} className="md:rounded-t-md" />
            {/* Hacer este h1, desplegable al hacer hover */}
            <h1 className="m-2">{project.name}</h1>
        </article>
    )
}