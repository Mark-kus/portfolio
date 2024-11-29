import Projects from "./Projects";
import Skills from "./Skills";
import About from "@/components/About";
import Contact from "./Contact";

export default function Content() {
  return (
    <section className="space-y-10">
      <div className="border-2 border-amber-900 dark:border-slate-700 rounded-3xl m-10">
        <About />
      </div>
        <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
