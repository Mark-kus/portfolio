"use client";

import { useState } from "react";

export default function Skill({ skill, render }) {
  const [name, setName] = useState("");

  const showName = () => setName(skill.name);
  const hideName = () => setName("");

  return (
    <figure className="m-2 flex items-center justify-center">
      <div
        onMouseEnter={showName}
        onMouseLeave={hideName}
        className={`m-2 w-20 transition-all md:w-28 ${name ? "blur-2xl" : ""}`}
      >
        {render}
      </div>
      <h1 className="pointer-events-none absolute md:text-xl">{name}</h1>
    </figure>
  );
}
