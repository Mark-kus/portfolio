import { about } from "@/data/about";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export function About() {
  return (
    <Section id="about" variant="alt" size="lg">
      <SectionHeader
        title="Sobre mí"
        subtitle="Ingeniero en Sistemas en formación con experiencia construyendo soluciones end-to-end"
      />
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none space-y-6">
          {about.summary.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3" role="list" aria-label="Destacados profesionales">
          {about.highlights.map((highlight, index) => (
            <Badge key={index} variant="outline" size="md" className="text-sm" role="listitem">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}