import Projects from "./Projects";
import Skills from "./Skills";
import About from "@/components/About";
import Contact from "./Contact";

export default function Content() {
  return (
    <section className="space-y-10">
      <div className="border border-slate-700 rounded-3xl m-10">
        <About />
        <Skills />
      </div>
      <Projects />
      <Contact />
    </section>
  );
}
