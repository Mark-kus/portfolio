import About from "@/components/About";
import Projects from "./Projects";
import Career from "./Career";
import Contact from "./Contact";

export default function Content({ lang, dictionary }) {
  return (
    <section className="space-y-10 overflow-y-hidden pb-16">
      <About dictionary={dictionary.about} />
      <Projects lang={lang} dictionary={dictionary.projects} />
      <Career lang={lang} dictionary={dictionary.career} />
      <Contact lang={lang} dictionary={dictionary.contact} />
    </section>
  );
}
