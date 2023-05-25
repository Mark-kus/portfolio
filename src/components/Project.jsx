export default function Project({ project }) {
    return (
        <article>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
        </article>
    )
}