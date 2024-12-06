"use client";

import Moon from "./svgs/generic/Moon";
import PersonalLogo from "./svgs/PersonalLogo";
import Sun from "./svgs/generic/Sun";
import LanguageSelector from "./LanguageSelector";
import { useDarkModeContext } from "@/context/DarkModeContext";

export default function Navigation({ lang, dictionary }) {
  // Estado para manejar el tema
  const { toggleDarkMode } = useDarkModeContext();

  const classnames = {
    nav: "flex justify-between md:justify-end items-center p-3 bg-amber-700 dark:bg-slate-800 text-white transition-colors duration-500",
    logo: "md:ml-20 md:absolute md:left-0",
    menuItems: "flex list-none gap-3 items-center mr-5",
    themeButton: "text-white p-2 flex rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-orange-300 dark:bg-black",
    sunIcon: "transition-all duration-500 opacity-100 dark:opacity-0 dark:translate-x-5",
    moonIcon: "transition-all duration-500 opacity-0 -translate-x-5 dark:opacity-100 dark:-translate-x-0",
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("data-section");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={classnames.nav}
      role="navigation"
      aria-label="Main Navigation"
    >
      <span className={classnames.logo}>
        <PersonalLogo aria-label="Personal Logo" />
      </span>

      <ul className={classnames.menuItems}>
        <li>
          <button
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#landing"
            aria-label={dictionary.home}
            onClick={handleScroll}
          >
            {dictionary.home}
          </button>
        </li>
        <li>
          <button
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#projects"
            aria-label={dictionary.projects}
            onClick={handleScroll}
          >
            {dictionary.projects}
          </button>
        </li>
        <li>
          <button
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#contact"
            aria-label={dictionary.contact}
            onClick={handleScroll}
          >
            {dictionary.contact}
          </button>
        </li>
      </ul>
      <div className="hidden md:block h-6 w-0.5 bg-white bg-opacity-20"></div>
      <div className="hidden md:block mr-20 ml-5">
        <ul className={classnames.menuItems}>
          <li className="rounded-3xl">
            <LanguageSelector lang={lang} />
          </li>
          <li>
            <button
              name="Toggle dark mode"
              onClick={toggleDarkMode}
              className={classnames.themeButton}
              aria-label="Toggle dark mode"
            >
              <picture className={classnames.sunIcon}>
                <Sun aria-hidden="true" />
              </picture>
              <picture className={classnames.moonIcon}>
                <Moon aria-hidden="true" />
              </picture>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
