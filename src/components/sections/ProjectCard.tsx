import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const delayClass = `delay-${(index + 1) * 100}`;

  return (
    <article className={`animate-slide-up ${delayClass}`}>
      <Card variant="default" className="h-full flex flex-col">
        <CardContent className="flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-balance">
                {project.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
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
            {project.stack.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 5 && (
              <Badge variant="secondary" size="sm">
                +{project.stack.length - 5} más
              </Badge>
            )}
          </div>

          <div className="flex-1 mt-auto pt-4 border-t border-border">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Ver más
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}