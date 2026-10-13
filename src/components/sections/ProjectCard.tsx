"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const delayClass = `delay-${(index + 1) * 100}`;
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <article className={cn("animate-slide-up", delayClass)}>
      <Card variant="default" className="h-full flex flex-col group">
        <CardContent className="flex flex-col flex-1 p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-balance">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {project.shortDescription}
              </p>
            </div>
            <span className="flex-shrink-0">
              <Badge variant="primary" size="sm">
                {project.status}
              </Badge>
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 3 && !expanded && (
              <Badge variant="secondary" size="sm">
                +{project.stack.length - 3} más
              </Badge>
            )}
          </div>

          <div className="flex-1 mt-auto pt-4 border-t border-border space-y-3">
            {expanded && (
              <div className="space-y-3 text-sm text-muted-foreground" id={`project-${project.slug}-details`}>
                <p className="leading-relaxed">{project.description}</p>
                <p><strong>Rol:</strong> {project.role}</p>
                <p className="line-clamp-2"><strong>Resultado:</strong> {project.result}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={toggleExpand}
              className="w-full inline-flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline transition-colors"
              aria-expanded={expanded}
              aria-controls={`project-${project.slug}-details`}
            >
              {expanded ? "Ver menos" : "Ver más"}
              <svg
                className={cn("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <Link
              href={`/projects/${project.slug}`}
              className="w-full inline-flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline border border-primary/30 rounded-lg px-4 py-2 transition-colors"
            >
              Ver detalle completo
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}