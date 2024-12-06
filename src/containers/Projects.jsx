"use client";

import Project from "@/components/Project";
import Plus from "@/components/svgs/generic/Plus";
import { useDarkModeContext } from "@/context/DarkModeContext";
import projects from "@/seeds/projects.js";
import { useState } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ProjectsAlert from "@/components/ProjectsAlert";

export default function Projects({ lang, dictionary }) {
  const [elements, setElements] = useState(projects.slice(0, 3));
  const { isDarkMode } = useDarkModeContext();

  const loadMore = () => {
    setElements((prevElements) => [
      ...prevElements,
      ...projects.slice(prevElements.length, prevElements.length + 3),
    ]);
  };

  const getTimelineElements = (lang = "en", dictionary) => {
    return elements.map(({ props, data }, index) => (
      <VerticalTimelineElement
        key={index}
        {...props}
        textClassName={
          data.image ? props?.textClassName : `md:mb-12 ${props?.textClassName}`
        }
        className="text-black dark:text-white"
        contentStyle={{
          backgroundColor: isDarkMode ? "#000" : "#FFF",
          color: isDarkMode ? "#FFF" : "#000",
        }}
        contentArrowStyle={{
          borderRight: isDarkMode ? "7px solid #000" : "7px solid #FFF",
        }}
        date={
          <div>
            <span className="dark:md:text-white md:text-black">
              {data.date[lang]}
            </span>
            <p className="dark:md:text-white md:text-black">
              {data.content[lang]}
            </p>
          </div>
        }
      >
        <Project lang={lang} project={data} dictionary={dictionary.card} />
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="projects" className="flex flex-col items-center">
      <header className="text-3xl md:text-5xl font-extrabold mb-8 pb-2 bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine">
        {dictionary.title}
      </header>

      {/* Bolita de advertencia e inicio de timeline */}
      <div className="w-full ml-[0.8rem] md:ml-0 md:w-auto">
        <ProjectsAlert dictionary={dictionary} />
      </div>

      <article className="w-full md:max-w-6xl">
        <VerticalTimeline>
          {getTimelineElements(lang, dictionary)}
          {elements.length < projects.length && (
            <VerticalTimelineElement
              iconClassName="vertical-timeline-element-icon--button cursor-pointer bg-slate-100 hover:bg-slate-300 transition-colors dark:bg-slate-700 dark:hover:bg-slate-800 active:bg-slate-400 dark:active:bg-slate-900"
              iconOnClick={loadMore}
              icon={<Plus />}
            />
          )}
        </VerticalTimeline>
      </article>

      {/* Bolita final de timeline */}
      <div className="w-full ml-[0.8rem] md:ml-0 md:w-auto">
        <div className="rounded-full w-12 h-12 bg-white"></div>
      </div>
    </section>
  );
}
