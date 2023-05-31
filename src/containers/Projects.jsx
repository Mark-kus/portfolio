import Project from "../components/Project";
import myProjects from "../seeds/projects.js"
import Slider from "react-slick";
import swipe from '../assets/swipe.svg'

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
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            }
        ]
    }

    return (
        <section className="flex flex-col">
            <header className="md:mx-10 flex text-xl md:text-3xl mb-2">
                Projects
                <img src={swipe} alt="swipe indicator" className="ml-2 w-5 xl:hidden" />
            </header>
            <article>
                <Slider {...settings} >
                    {myProjects.map((project, i) => <Project key={i} project={project} />)}
                </Slider>
            </article>
        </section>
    )
}