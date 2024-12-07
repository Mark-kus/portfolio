"use client";

import React, { useState } from "react";

const ProjectsAlert = ({ dictionary }) => {
  const [showPopover, setShowPopover] = useState(true);
  const [hasFocused, setHasFocused] = useState(false);

  const handleFocus = () => {
    setShowPopover(true);
    setHasFocused(true);
  };

  const handleBlur = () => {
    if (hasFocused) {
      setShowPopover(false);
    }
  };

  return (
    <button
      className="relative w-full"
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <p className="border-2 border-orange-400 text-orange-400 bg-red-200 bg-opacity-20 dark:border-yellow-300 dark:text-yellow-300 dark:bg-yellow-200 dark:bg-opacity-20 rounded-full w-12 h-12 flex justify-center items-center font-semibold">
        !
      </p>
      <div
        className={`-rotate-90 absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-orange-400 dark:border-b-yellow-300 top-5 left-11 transition-opacity ${
          showPopover ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute bg-orange-400 dark:bg-yellow-300 p-2 -top-5 left-14 rounded-lg text-black z-10 w-[85%] min-[1170px]:w-96 transition-opacity ${
          showPopover ? "opacity-100" : "opacity-0"
        }`}
      >
        {dictionary.alert}
      </div>
    </button>
  );
};

export default ProjectsAlert;
