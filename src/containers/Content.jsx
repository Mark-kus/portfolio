import Projects from "./Projects";
import Skills from "./Skills";
import About from "@/components/About";
import Contact from "./Contact";

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
