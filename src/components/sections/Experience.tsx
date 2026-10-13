"use client";

import { useState } from "react";
import { experience, type Experience as ExperienceType } from "@/data/experience";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

export function Experience() {
  const featuredExperience = experience.filter((e) => e.featured);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);

  const handleOpenModal = (exp: ExperienceType) => {
    setSelectedExperience(exp);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <>
      <Section id="experience" size="lg">
        <SectionHeader
          title="Experiencia"
          subtitle="Roles en consultoras, proyectos pro-bono y mentoría"
        />
        <div className="space-y-6">
          {featuredExperience.map((exp, index) => (
            <article key={exp.company} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <Card variant="outlined" padding="md">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
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

                <ul className="space-y-2 mb-4" role="list">
                  {exp.description.slice(0, 2).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                      <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2" role="list" aria-label={`${exp.company} stack`}>
                    {exp.stack.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" size="sm" role="listitem">
                        {tech}
                      </Badge>
                    ))}
                    {exp.stack.length > 3 && (
                      <Badge variant="secondary" size="sm" role="listitem">
                        +{exp.stack.length - 3} más
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenModal(exp)}
                  >
                    Ver detalle
                  </Button>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </Section>

      {selectedExperience && (
        <Modal
          isOpen={!!selectedExperience}
          onClose={handleCloseModal}
          title={selectedExperience.role}
          size="xl"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary" size="sm" className="px-3 py-1 text-xs">
                {selectedExperience.company}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {selectedExperience.period} • {selectedExperience.location}
              </span>
            </div>

            <ul className="space-y-3" role="list">
              {selectedExperience.description.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${selectedExperience.company} stack completo`}>
                {selectedExperience.stack.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" size="sm" role="listitem">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
