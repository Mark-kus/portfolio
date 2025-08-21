"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import ProjectPreview from "./ProjectPreview";

import hueneyRuca from "@/assets/projects/hueneyRuca.webp";
import toolbox from "@/assets/projects/toolbox.webp";
import turnero from "@/assets/projects/turnero.webp";

export function EmblaCarousel({ lang, dictionary }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [
      AutoScroll({
        startDelay: 1,
        speed: 1.5,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <div className="w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Object.values(projects).map((project, index) => (
            <div key={index} className="embla__slide px-4 pt-2 pb-6">
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_20px_rgba(0,0,0,0.12)] dark:bg-black/20 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
                <div className="flex h-full flex-col">
                  {/* Project Header */}
                  <ProjectPreview.Header project={project} lang={lang} />

                  {/* Project Image and Actions */}
                  <div className="mb-4 flex-shrink-0">
                    <ProjectPreview>
                      <ProjectPreview.Image project={project} lang={lang} />
                      <ProjectPreview.Actions
                        project={project}
                        dictionary={dictionary.card}
                      />
                    </ProjectPreview>
                  </div>

                  {/* Project Content */}
                  <ProjectPreview.Content project={project} lang={lang} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = {
  hueneyRuca: {
    date: {
      en: "2023 / May - June",
      es: "2023 / Mayo - Junio",
    },
    title: {
      en: "Hueney Ruca",
      es: "Hueney Ruca",
    },
    content: {
      en: "Team-built ecommerce platform as SoyHenry's final project. Production-ready application with secure data handling, payments and user authentication.",
      es: "Plataforma de ecommerce desarrollada en equipo como proyecto final de SoyHenry. Aplicación lista para producción con manejo seguro de datos, pagos y autenticación de usuarios.",
    },
    image: hueneyRuca,
    alt: {
      en: "Hueney Ruca ecommerce platform",
      es: "Plataforma de ecommerce Hueney Ruca",
    },
    websiteUrl: null,
    repositoryUrl: "https://github.com/Mark-kus/hueney-ruca",
  },
  toolbox: {
    date: {
      en: "2025 / August - September",
      es: "2025 / Agosto - Septiembre",
    },
    title: {
      en: "Toolbox",
      es: "Toolbox",
    },
    content: {
      en: "Cross-platform mobile application for tool management and tracking. Built for a technical high school with a focus on organization and efficiency.",
      es: "Aplicación móvil multiplataforma para la gestión de un pañol. Promete organización y eficiencia en el seguimiento de las herramientas prestadas. Creada para una escuela secundaria técnica.",
    },
    image: toolbox,
    alt: {
      en: "Toolbox Mobile App Interface",
      es: "Interfaz de la App Toolbox",
    },
    websiteUrl: null,
    repositoryUrl: "https://github.com/Mark-kus/toolbox",
  },
  turnero: {
    date: {
      en: "2024 / March - Present",
      es: "2024 / Marzo - Presente",
    },
    title: {
      en: "Medical Appointment Scheduler (In Development)",
      es: "Turnero (En Desarrollo)",
    },
    content: {
      en: "Multi-tenant SaaS platform for healthcare clinics. Subscription-based service enabling clinics to manage professionals and patients to book appointments seamlessly.",
      es: "Plataforma SaaS multi-tenant para clínicas médicas. Servicio por suscripción que permite a las clínicas gestionar profesionales y a los pacientes reservar citas fácilmente.",
    },
    image: turnero,
    alt: {
      en: "Turnero Healthcare Management Platform",
      es: "Plataforma de Gestión Médica Turnero",
    },
    websiteUrl: null,
    repositoryUrl: "https://github.com/Mark-kus/turnero",
  },
};
