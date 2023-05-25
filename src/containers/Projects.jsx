import Project from "../components/Project";
import myProjects from "../seeds/projects.js"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    const settings = {
        dots: true,
        arrows: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    }

    return (
        <section className="flex flex-col">
            <header>Projects</header>
            <article className="w-full">
                <Slider {...settings} >
                    {myProjects.map((project, i) => <Project key={i} project={project} />)}
                </Slider>
            </article>
        </section>
    )
}