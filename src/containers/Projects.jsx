"use client";

import Project from "@/components/Project";
import SVGPlus from "@/components/svgs/SVGPlus";
import projects from "@/seeds/projects.js";
import { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Projects() {
  const [elements, setElements] = useState(projects.slice(0, 3));

  const loadMore = () => {
    setElements((prevElements) => [
      ...prevElements,
      ...projects.slice(prevElements.length, prevElements.length + 3),
    ]);
  };

  const getTimelineElements = () => {
    return elements.map((project, index) => {
      return (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          dateClassName="text-gray-900 dark:text-white"
          date={
            <div>
              <h3>{project.date}</h3>
              <p>{project.description}</p>
            </div>
          }
          iconStyle={{ background: "rgb(45, 55, 72)", color: "#fff" }}
          icon={
            <div className="font-semibold flex justify-center items-center h-full text-lg">
              {projects.length - index}
            </div>
          }
        >
          <Project project={project} />
        </VerticalTimelineElement>
      );
    });
  };

  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="text-3xl md:text-5xl font-extrabold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine">
        Projects
      </header>
      <article className="w-full">
        <VerticalTimeline>
          {getTimelineElements()}
          {elements.length < projects.length && (
            <VerticalTimelineElement
              iconClassName="vertical-timeline-element-icon--button cursor-pointer bg-slate-700 hover:bg-slate-800 transition-colors"
              iconOnClick={loadMore}
              icon={
                <SVGPlus />
              }
            />
          )}
        </VerticalTimeline>
      </article>
    </section>
  );
}
