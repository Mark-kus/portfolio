import { certifications, languages } from "@/data/education";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Education() {
  return (
    <Section id="education" variant="alt" size="lg">
      <SectionHeader
        title="Educación y certificaciones"
        subtitle="Formación académica y certificaciones técnicas"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <article className="animate-slide-up delay-100">
          <Card variant="outlined" padding="lg" className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>Ingeniería en Sistemas de Información</CardTitle>
                  <p className="mt-1 text-lg text-foreground">Universidad Tecnológica Nacional (UTN)</p>
                </div>
                <Badge variant="primary" size="sm" className="flex-shrink-0">
                  Abril 2024 – presente
                </Badge>
              </div>
            </CardHeader>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground mb-4">Buenos Aires, Argentina</p>
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li className="flex gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Graduación estimada: 2029</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Part-time hasta septiembre 2025, full-time desde entonces</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Materias base cursadas: Algoritmos, Estructuras de Datos, Arquitectura, SO, Redes, Bases de Datos, Ingeniería de Software</span>
                </li>
              </ul>
            </div>
          </Card>
        </article>

        <article className="animate-slide-up delay-200">
          <Card variant="outlined" padding="lg" className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>Desarrollo Web Full Stack</CardTitle>
                  <p className="mt-1 text-lg text-foreground">Bootcamp SoyHenry</p>
                </div>
                <Badge variant="primary" size="sm" className="flex-shrink-0">
                  Febrero 2023 – Abril 2023
                </Badge>
              </div>
            </CardHeader>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground mb-4">Remoto (intensivo 9 semanas)</p>
              <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                <li className="flex gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Full stack JavaScript/TypeScript: React, Node, Express, PostgreSQL, Git, Scrum, testing</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Proyecto final: Hueney Ruca (ver proyectos)</span>
                </li>
              </ul>
            </div>
          </Card>
        </article>

        <article className="animate-slide-up delay-100">
          <Card variant="outlined" padding="lg" className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <CardTitle>Certificaciones</CardTitle>
                <Badge variant="primary" size="sm" className="flex-shrink-0">5 certificaciones técnicas</Badge>
              </div>
            </CardHeader>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2" role="list" aria-label="Certificaciones">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" size="md" role="listitem" className="text-sm">
                    <span className="font-medium">{cert.name}</span>
                    <span className="text-muted-foreground ml-1">— {cert.issuer} ({cert.year})</span>
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </article>

        <article className="animate-slide-up delay-200">
          <Card variant="outlined" padding="lg" className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <CardTitle>Idiomas</CardTitle>
                <Badge variant="primary" size="sm" className="flex-shrink-0">3 idiomas</Badge>
              </div>
            </CardHeader>
            <div className="p-6 pt-0">
              <dl className="space-y-3" role="list">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between gap-4 p-3 rounded-lg bg-muted/50" role="listitem">
                    <dt className="font-medium">{lang.name}</dt>
                    <dd className="text-muted-foreground text-sm">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Card>
        </article>
      </div>
    </Section>
  );
}