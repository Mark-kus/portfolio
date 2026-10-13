import { skills } from "@/data/skills";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Skills() {
  return (
    <Section id="skills" size="lg">
      <SectionHeader
        title="Habilidades"
        subtitle="Tecnologías y prácticas con evidencia en proyectos reales"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:auto] [align-items:start]">
        {skills.categories.map((category, catIndex) => (
          <article key={category.name} className="animate-slide-up" style={{ animationDelay: `${(catIndex + 1) * 100}ms` }}>
            <Card variant="outlined" padding="lg" className="h-full">
              <div className="mb-4">
                <h3 className="text-lg font-semibold tracking-tight">{category.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{category.items.length} tecnologías</p>
              </div>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.name} skills`}>
                {category.items.map((item, itemIndex) => (
                  <Badge key={itemIndex} variant="secondary" size="sm" role="listitem" className="text-xs">
                    {item}
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
