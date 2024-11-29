"use client";

import Project from "@/components/Project";
import myProjects from "@/seeds/projects.js";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col">
      <header className="text-3xl md:text-5xl font-extrabold mb-8 pb-2 bg-clip-text-gradient">Projects</header>
      <article>
        <VerticalTimeline>
          {myProjects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#fff" }}
              date={
                <div>
                  <h3>{project.date}</h3>
                  <p>{project.description}</p>
                </div>
              }
              iconStyle={{ background: "rgb(45, 55, 72)", color: "#fff" }}
              icon={
                <div className="font-semibold flex justify-center items-center h-full text-lg text-white">
                  {myProjects.length - index}
                </div>
              }
            >
              <Project project={project} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </article>
    </section>
  );
}
