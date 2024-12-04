"use client";

import projects from "@/seeds/projects";
import { useEffect, useState } from "react";

export default function Skill({ skill, render }) {
  useEffect(() => {
    projects.forEach((project) => {
      if (project.websiteUrl && project.websiteUrl.includes("render")) {
        if (sessionStorage.getItem(project.websiteUrl)) return;

        fetch(project.websiteUrl);
        sessionStorage.setItem(project.websiteUrl, true);
      }
    });
  }, []);

  const [name, setName] = useState("");
  const showName = () => setName(skill.name);
  const hideName = () => setName("");

  return (
    <figure className="flex justify-center items-center m-2">
      <div
        onMouseEnter={showName}
        onMouseLeave={hideName}
        className="hover:blur-2xl transition-all w-20 md:w-28 m-2"
      >
        {render}
      </div>
      <h1 className="absolute pointer-events-none md:text-xl">{name}</h1>
    </figure>
  );
}
