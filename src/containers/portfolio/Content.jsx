import Career from "@/containers/portfolio/Career";
import About from "@/components/portfolio/About";
import Contact from "@/containers/portfolio/Contact";
import Projects from "@/containers/portfolio/Projects";

export default function Content({ lang, dictionary }) {
  return (
    <section className="space-y-10 overflow-y-hidden pb-16">
      <div className="m-10 rounded-3xl border-2 border-amber-900 dark:border-slate-700">
        <About dictionary={dictionary.about} />
      </div>
      <Projects lang={lang} dictionary={dictionary.projects} />
      <Career lang={lang} dictionary={dictionary.career} />
      <Contact lang={lang} dictionary={dictionary.contact} />
    </section>
  );
}
