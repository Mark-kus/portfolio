"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (data: ContactFormData): string[] => {
    const errors: string[] = [];
    if (!data.name.trim()) errors.push("Nombre es requerido");
    if (!data.email.trim()) errors.push("Email es requerido");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push("Email inválido");
    if (!data.subject.trim()) errors.push("Asunto es requerido");
    if (!data.message.trim()) errors.push("Mensaje es requerido");
    if (data.message.trim().length < 10) errors.push("Mensaje muy corto (mín. 10 caracteres)");
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    const errors = validateForm(formData);
    if (errors.length > 0) {
      setErrorMessage(errors.join(". "));
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido. Intenta de nuevo.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const hasCalendly = calendlyUrl && calendlyUrl !== "https://calendly.com/tu-usuario";

  const contactItems = [
    {
      label: "Email",
      href: `mailto:${personal.email}`,
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      external: false,
    },
    {
      label: "LinkedIn",
      href: personal.links.linkedin,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      external: true,
    },
    {
      label: "GitHub",
      href: personal.links.github,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      external: true,
    },
    {
      label: "CV",
      href: "/cv",
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      external: true,
    },
  ];

  return (
    <Section id="contact" size="lg">
      <SectionHeader
        title="Contacto"
        subtitle="¿Tienes un proyecto en mente? Hablemos."
      />
      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        <div className="animate-slide-up delay-100">
          <Card variant="outlined" padding="lg" className="h-full">
            <CardHeader>
              <CardTitle>Canales directos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-4" role="list" aria-label="Canales de contacto">
                {contactItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="btn-secondary w-full justify-center flex items-center gap-3 py-3"
                    aria-label={item.label}
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>

              {hasCalendly && (
                <div className="pt-4 border-t border-border">
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <a
                      href={calendlyUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Agendar llamada
                    </a>
                  </Button>
                </div>
              )}

              {!hasCalendly && (
                <div className="pt-4 border-t border-border">
                  <Button variant="secondary" size="lg" className="w-full" disabled>
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Configurar Calendly (NEXT_PUBLIC_CALENDLY_URL)
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="animate-slide-up delay-200">
          <Card variant="outlined" padding="lg">
            <CardHeader>
              <CardTitle>Enviar mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-lg border bg-background px-4 py-3 text-sm transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                        "placeholder:text-muted-foreground/50"
                      )}
                      placeholder="Tu nombre"
                      required
                      autoComplete="name"
                      disabled={status === "submitting"}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full rounded-lg border bg-background px-4 py-3 text-sm transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                        "placeholder:text-muted-foreground/50"
                      )}
                      placeholder="tu@email.com"
                      required
                      autoComplete="email"
                      disabled={status === "submitting"}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border bg-background px-4 py-3 text-sm transition-colors",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "placeholder:text-muted-foreground/50"
                    )}
                    placeholder="Sobre qué quieres hablar"
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      "w-full rounded-lg border bg-background px-4 py-3 text-sm transition-colors resize-y",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      "placeholder:text-muted-foreground/50"
                    )}
                    placeholder="Cuéntame sobre tu proyecto, consulta o propuesta..."
                    required
                    disabled={status === "submitting"}
                  />
                </div>
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                {status === "error" && (
                  <div
                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    role="alert"
                    aria-live="polite"
                  >
                    {errorMessage}
                  </div>
                )}

                {status === "success" && (
                  <div
                    className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                    role="status"
                    aria-live="polite"
                  >
                    ¡Mensaje enviado! Te responderé pronto.
                  </div>
                )}

                <div className="flex flex-col gap-4 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    loading={status === "submitting"}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Tu email no se comparte ni se usa para spam.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}