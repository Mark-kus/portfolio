import { education, certifications, languages } from "@/data/education";
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
        <div className="space-y-6 animate-slide-up delay-100">
          {education.map((edu, index) => (
            <article key={edu.institution} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <p className="mt-1 text-lg text-foreground">{edu.institution}</p>
                    </div>
                    <Badge variant="primary" size="sm" className="flex-shrink-0">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{edu.location}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground" role="list">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex gap-2">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </article>
          ))}
        </div>

        <div className="space-y-6 animate-slide-up delay-200">
          <article>
            <Card variant="outlined" padding="lg">
              <CardHeader>
                <CardTitle>Certificaciones</CardTitle>
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

          <article>
            <Card variant="outlined" padding="lg">
              <CardHeader>
                <CardTitle>Idiomas</CardTitle>
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
      </div>
    </Section>
  );
}