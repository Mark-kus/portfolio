"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleOpenModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Section id="projects" variant="alt" size="lg">
        <SectionHeader
          title="Proyectos destacados"
          subtitle="Soluciones completas: del problema de negocio a la implementación técnica"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </Section>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          title={selectedProject.title}
          size="xl"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="primary" size="md">
                {selectedProject.status}
              </Badge>
              {selectedProject.featured && <Badge variant="outline" size="sm">Destacado</Badge>}
            </div>

            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div>
                <h4 className="font-medium mb-2">Rol</h4>
                <p className="text-muted-foreground">{selectedProject.role}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Resultado</h4>
                <p className="text-muted-foreground whitespace-pre-wrap">{selectedProject.result}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Aprendizajes</h4>
                <p className="text-muted-foreground whitespace-pre-wrap">{selectedProject.learnings}</p>
              </div>
            </div>

            {(selectedProject.links.demo || selectedProject.links.repo) && (
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {selectedProject.links.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Ver demo
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                {selectedProject.links.repo && (
                  <a
                    href={selectedProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Código
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}