"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import Moon from "@/components/svgs/Moon";
import Sun from "@/components/svgs/Sun";

const ThemeSelector = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <>
      <button
        name="Toggle dark mode"
        onClick={toggleDarkMode}
        className="flex rounded-full bg-orange-300 p-2 text-white transition-all hover:ring-2 hover:ring-gray-300 dark:bg-black"
        aria-label="Toggle dark mode"
      >
        <picture className="opacity-100 transition-all duration-500 dark:translate-x-5 dark:opacity-0">
          <Sun aria-hidden="true" />
        </picture>
        <picture className="-translate-x-5 opacity-0 transition-all duration-500 dark:-translate-x-0 dark:opacity-100">
          <Moon aria-hidden="true" />
        </picture>
      </button>
    </>
  );
};

export default ThemeSelector;
