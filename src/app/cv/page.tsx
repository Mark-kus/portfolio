import { personal } from "@/data/personal";
import { experience } from "@/data/experience";
import { education, certifications, languages } from "@/data/education";
import { skills } from "@/data/skills";

export const metadata = {
  title: `CV — ${personal.name}`,
  description: `Curriculum Vitae de ${personal.name}`,
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      <div className="max-w-4xl mx-auto px-8 py-12 print:px-0 print:py-0 print:max-w-none">
        <header className="mb-8 pb-6 border-b-2 border-gray-900">
          <h1 className="text-4xl font-bold mb-2">{personal.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{personal.title}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{personal.location}</span>
            <a href={`mailto:${personal.email}`} className="hover:underline">
              {personal.email}
            </a>
            <span>{personal.phone}</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href={personal.links.portfolio} target="_blank" rel="noopener noreferrer" className="hover:underline">
              Portfolio
            </a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3 uppercase tracking-wide border-b border-gray-300 pb-1">
            Resumen Profesional
          </h2>
          <p className="text-sm leading-relaxed">
            Desarrollador Full Stack con experiencia en consultoras de software (EPAM Systems, Vates Software)
            construyendo aplicaciones escalables de extremo a extremo con Python, FastAPI, React y Next.js.
            Ingeniero en Sistemas en formación (UTN) con foco en código limpio, mantenible y de impacto de negocio.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Experiencia Profesional
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.period}`}>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base">{exp.role}</h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-700 italic mb-2">
                  {exp.company} — {exp.location}
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Formación Académica
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.institution}>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="font-bold text-base">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">{edu.period}</span>
                </div>
                <p className="text-sm text-gray-700 italic mb-1">{edu.institution} — {edu.location}</p>
                <ul className="list-disc list-inside text-sm">
                  {edu.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Tecnologías & Herramientas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.categories.map((cat) => (
              <div key={cat.name}>
                <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-700">{cat.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Idiomas
          </h2>
          <ul className="text-sm space-y-1">
            {languages.map((lang) => (
              <li key={lang.name}>
                <span className="font-semibold">{lang.name}:</span> {lang.level}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide border-b border-gray-300 pb-1">
            Certificaciones
          </h2>
          <ul className="text-sm space-y-1">
            {certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name} — {cert.issuer} ({cert.year})
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          Referencias disponibles bajo solicitud
        </div>
      </div>
    </div>
  );
}
