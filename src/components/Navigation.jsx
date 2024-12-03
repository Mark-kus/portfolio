"use client";

import { useEffect, useState } from "react";
import Moon from "./svgs/generic/Moon";
import PersonalLogo from "./svgs/PersonalLogo";
import Sun from "./svgs/generic/Sun";
import LanguageSelector from "./LanguageSelector";

export default function Navigation({ lang, dictionary }) {
  // Estado para manejar el tema
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // Cambiar la clase en el <html> para activar el tema oscuro
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Comprobar si hay un tema guardado en el localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Guardar el tema en el localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const classnames = {
    nav: "flex justify-between md:justify-end items-center p-3 bg-amber-700 dark:bg-slate-800 text-white",
    logo: "md:ml-20 md:absolute md:left-0",
    menuItems: "flex list-none gap-3 items-center mr-5",
    themeButton: `text-white p-2 flex rounded-full transition-all hover:ring-2 hover:ring-gray-300 ${
      !isDarkMode ? "bg-orange-300" : "bg-black"
    }`,
    sunIcon: `transition-all ${
      !isDarkMode ? " opacity-100" : "opacity-0 translate-x-5"
    }`,
    moonIcon: `transition-all ${
      !isDarkMode ? " opacity-0 -translate-x-5" : "opacity-100"
    }`,
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
          <a
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#landing"
            href="/#"
            aria-label={dictionary.home}
          >
            {dictionary.home}
          </a>
        </li>
        <li>
          <a
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#projects"
            href="/#projects"
            aria-label={dictionary.projects}
          >
            {dictionary.projects}
          </a>
        </li>
        <li>
          <a
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-4"
            data-section="#contact"
            href="/#contact"
            aria-label={dictionary.contact}
          >
            {dictionary.contact}
          </a>
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
              onClick={toggleTheme}
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
