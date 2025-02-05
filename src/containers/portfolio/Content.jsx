import Projects from "@/containers/portfolio/Projects";
import Skills from "@/containers/portfolio/Skills";
import About from "@/components/portfolio/About";
import Contact from "@/containers/portfolio/Contact";

export default function Content({ lang, dictionary }) {
  return (
    <section className="space-y-10 overflow-y-hidden pb-16">
      <div className="border-2 border-amber-900 dark:border-slate-700 rounded-3xl m-10">
        <About dictionary={dictionary.about} />
      </div>
      <Skills dictionary={dictionary.technologies} />
      <Projects lang={lang} dictionary={dictionary.projects} />
      <Contact lang={lang} dictionary={dictionary.contact} />
    </section>
  );
}
