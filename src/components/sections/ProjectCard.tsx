"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, index = 0, onOpenModal }: ProjectCardProps) {
  const delayClass = `delay-${(index + 1) * 100}`;

  return (
    <article className={cn("animate-slide-up", delayClass)}>
      <Card variant="default" className="h-full flex flex-col group relative">
        <CardContent className="flex flex-col flex-1 p-6">
          <Badge variant="primary" size="sm" className="absolute top-6 right-6">
            {project.status}
          </Badge>

          <div className="flex flex-col flex-1">
            <div className="pb-4">
              <h3 className="text-xl font-semibold tracking-tight text-balance">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="outline" size="sm" className="px-3 py-1 text-xs">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 5 && (
                <Badge variant="secondary" size="sm" className="px-3 py-1 text-xs">
                  +{project.stack.length - 5} más
                </Badge>
              )}
            </div>

            <div className="mt-auto pt-4 border-t border-border">
              <Button
                variant="primary"
                size="md"
                className="w-full h-12"
                onClick={() => onOpenModal(project)}
              >
                Ver detalle
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}