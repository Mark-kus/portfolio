"use client"

import Project from "@/components/Project";
import myProjects from "@/seeds/projects.js"
import Slider from "react-slick";
import swipe from '@/assets/swipe.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
                <Image src={swipe} width={22} alt="Indicator, for swiping the screen" className="ml-2" />
            </header>
            <article>
                <Slider {...settings} >
                    <span style={{
                        fontSize: "0.1rem",
                        opacity: 0.5,
                    }}>Algunos proyectos son hosteados en páginas gratuitas que, con el fin de optimizar recursos, entran en suspensión si no son visitadas con frecuencia, por lo que pueden llegar a tomar alrededor de 60 segundos en hacer la primera carga</span>
                    {myProjects.map((project, i) => <Project key={i} project={project} />)}
                </Slider>
            </article>
        </section>
    )
}