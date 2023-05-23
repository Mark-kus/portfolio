import Projects from "./Projects";
import Skills from "./Skills";
import About from "../components/About";

export default function Content() {
    return (
        <section>
            <Skills />
            <Projects />
            <About />
        </section>
    )
}