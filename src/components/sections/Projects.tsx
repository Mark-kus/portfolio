import { projects } from "@/data/projects";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects" variant="alt" size="lg">
      <SectionHeader
        title="Proyectos destacados"
        subtitle="Soluciones completas: del problema de negocio a la implementación técnica"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}