import { experience } from "@/data/experience";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const featuredExperience = experience.filter((e) => e.featured);

  return (
    <Section id="experience" size="lg">
      <SectionHeader
        title="Experiencia"
        subtitle="Roles en consultoras, proyectos pro-bono y mentoría"
      />
      <div className="space-y-6">
        {featuredExperience.map((exp, index) => (
          <article key={exp.company} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            <Card variant="outlined" padding="lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                    <Badge variant="primary" size="sm">
                      {exp.company}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6" role="list">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2" role="list" aria-label={`${exp.company} stack`}>
                {exp.stack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" size="sm" role="listitem">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
}