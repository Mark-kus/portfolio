import Project from "../components/Project";

export default function Projects() {
    const myProjects = ['cesarHospedajes', 'HueneyRuca', 'dogsApi']
    return (
        <section className="flex">
            {myProjects.map((project, i) => <Project key={i} project={project} />)}
        </section>
    )
}