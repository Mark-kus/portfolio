"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ProjectsAlert = ({ dictionary }) => {
  const hasSeenAlert = Cookies.get("hasSeenAlert");
  const [showPopover, setShowPopover] = useState(false);
  const [hasFocused, setHasFocused] = useState(false);

  useEffect(() => {
    if (!hasSeenAlert) {
      setShowPopover(true);
    }
  }, [hasSeenAlert]);

  const handleFocus = () => {
    if (!hasSeenAlert) Cookies.set("hasSeenAlert", "true", { expires: 365 });
    setShowPopover(true);
    setHasFocused(true);
  };

  const handleBlur = () => {
    if (hasFocused) {
      setShowPopover(false);
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="border-2 border-orange-400 text-orange-400 bg-red-200 bg-white/20 dark:border-yellow-300 dark:text-yellow-300 dark:bg-yellow-200 dark:bg-white/20 rounded-full w-12 h-12 flex justify-center items-center font-semibold focus:ring-2 transition-all"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        !
      </button>
      <div
        className={`-rotate-90 absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-orange-400 dark:border-b-yellow-300 top-5 left-11 transition-opacity ${
          showPopover ? "opacity-100" : "opacity-0"
        }`}
      />
      <p
        className={`absolute bg-orange-400 dark:bg-yellow-300 p-2 -bottom-5 md:bottom-1 left-[3.4rem] rounded-lg text-black z-10 w-[85%] min-[1170px]:w-[460px] max-w-lg transition-opacity ${
          showPopover ? "opacity-100" : "opacity-0"
        }`}
      >
        {dictionary.alert}
      </p>
    </div>
  );
};

export default ProjectsAlert;
