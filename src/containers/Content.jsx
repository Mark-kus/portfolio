import Projects from "./Projects";
import Skills from "./Skills";
import About from "../components/About";

export default function Content() {
    return (
        <section className="space-y-10">
            <About />
            <Skills />
            <Projects />
        </section>
    )
}