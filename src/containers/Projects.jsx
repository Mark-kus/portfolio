"use client";

import Project from "@/components/Project";
import Plus from "@/components/svgs/generic/Plus";
import projects from "@/seeds/projects.js";
import { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Projects({ lang, dictionary }) {
  const [elements, setElements] = useState(projects.slice(0, 3));

  const loadMore = () => {
    setElements((prevElements) => [
      ...prevElements,
      ...projects.slice(prevElements.length, prevElements.length + 3),
    ]);
  };

  const getTimelineElements = (lang = "en", dictionary) => {
    return elements.map(({ props, data }, index) => {
      return (
        <VerticalTimelineElement
          key={index}
          {...props}
          textClassName={data.image ? props?.textClassName : `md:mb-12 ${props?.textClassName}`}
          dateClassName={data.image ? props?.iconClassName : `md:text-white ${props?.iconClassName}`}
          date={
            <div>
              <span>{data.date[lang]}</span>
              <p>{data.content[lang]}</p>
            </div>
          }
        >
          <Project lang={lang} project={data} dictionary={dictionary.card} />
        </VerticalTimelineElement>
      );
    });
  };

  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="text-3xl md:text-5xl font-extrabold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine">
        {dictionary.title}
      </header>
      <article className="w-full">
        <VerticalTimeline>
          {getTimelineElements(lang, dictionary)}
          {elements.length < projects.length && (
            <VerticalTimelineElement
              iconClassName="vertical-timeline-element-icon--button cursor-pointer bg-slate-700 hover:bg-slate-800 transition-colors"
              iconOnClick={loadMore}
              icon={<Plus />}
            />
          )}
        </VerticalTimeline>
      </article>
    </section>
  );
}
