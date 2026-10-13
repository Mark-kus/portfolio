import Link from "next/link";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  Contact,
} from "@/components/sections";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container-custom flex items-center justify-between h-16" aria-label="Navegación principal">
          <Link href="/" className="text-xl font-bold tracking-tight" aria-label="Marco Tignanelli — Inicio">
            MT
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Experiencia
            </a>
            <a href="#education" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Educación
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
          <ThemeToggle />
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Marco Tignanelli.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/mark-kus" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/marco-tignanelli/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="mailto:tignanellimarco@gmail.com" className="hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}