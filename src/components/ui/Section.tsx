import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Section({ children, className, id, variant = "default", size = "lg" }: SectionProps) {
  const variants = {
    default: "",
    alt: "bg-muted/30",
    muted: "bg-muted/50",
  };

  const sizes = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-28 lg:py-36",
    xl: "py-24 sm:py-32 lg:py-40",
  };

  return (
    <section
      id={id}
      className={cn("w-full", variants[variant], sizes[size], className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, className, action }: SectionHeaderProps) {
  return (
    <header className={cn("mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4", className)}>
      <div>
        <h2 id={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`} className="section-title text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="section-subtitle">{subtitle}</p>
        )}
      </div>
      {action && <div className="mt-4 sm:mt-0">{action}</div>}
    </header>
  );
}