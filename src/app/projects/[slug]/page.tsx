import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { formatDateRange } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} | Marco Tignanelli`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const instant = false;

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Section id="project-detail" size="xl" className="pt-28">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 animate-fade-in">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver a proyectos
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="primary" size="md">
                {project.status}
              </Badge>
              {project.featured && <Badge variant="outline" size="sm">Destacado</Badge>}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </header>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8 animate-slide-up delay-100">
              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Contexto y problema</CardTitle>
                  <CardDescription>Qué problema de negocio resolví y por qué</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.problem}</p>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Objetivo</CardTitle>
                  <CardDescription>Qué buscaba lograr con la solución</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.objective}</p>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Arquitectura y decisiones técnicas</CardTitle>
                  <CardDescription>Elecciones de diseño, trade-offs y patrones aplicados</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.architecture}</p>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Rol y contribuciones</CardTitle>
                  <CardDescription>Mi participación concreta en el proyecto</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {project.contributions.map((contribution, index) => (
                      <li key={index} className="flex gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 animate-slide-up delay-200">
              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Resultado e impacto</CardTitle>
                  <CardDescription>Métricas, aprendizajes y estado actual</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap mb-6">{project.result}</p>
                  <div className="border-t border-border pt-6">
                    <h4 className="font-medium mb-3">Aprendizajes clave</h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{project.learnings}</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <CardTitle>Información del proyecto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <dl className="space-y-3 text-sm">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <dt className="text-muted-foreground">Período</dt>
                      <dd>{formatDateRange(project.startDate, project.endDate)}</dd>
                      <dt className="text-muted-foreground">Rol</dt>
                      <dd>{project.role}</dd>
                    </div>
                  </dl>
                  {(project.links.demo || project.links.repo || project.links.article) && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                      {project.links.demo && (
                        <Button variant="primary" size="sm" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            Ver demo
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button variant="secondary" size="sm" asChild>
                          <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                            Código
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}