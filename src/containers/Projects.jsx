import Project from "../components/Project";
import myProjects from "../seeds/projects.js"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "200px",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    }

    return (
        <section className="flex flex-col">
            <header className="md:mx-10">Projects</header>
            <article className="">
                    <Slider {...settings} >
                        {myProjects.map((project, i) => <Project key={i} project={project} />)}
                    </Slider>
            </article>
        </section>
    )
}