"use client";

import { useEffect, useState } from "react";
import SVGMoon from "./svgs/SVGMoon";
import SVGPersonalLogo from "./svgs/SVGPersonalLogo";
import SVGSun from "./svgs/SVGSun";
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
    menuButton: "md:hidden",
    menuIcon: "w-6 h-6",
    menuList: "hidden md:block",
    menuItems: "flex list-none gap-3 items-center",
    menuItem: "py-2 px-4 rounded-3xl",
    languageSelector:
      "bg-transparent h-9 py-1 px-2 outline-none ring-2 ring-gray-300 rounded-3xl cursor-pointer",
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
        <SVGPersonalLogo aria-label="Personal Logo" />
      </span>
      <div className={classnames.menuButton}>
        <button
          aria-label="Menu"
          aria-expanded="false"
          aria-controls="menu-list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={classnames.menuIcon}
          >
            <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className={classnames.menuList} id="menu-list">
        <ul className={classnames.menuItems}>
          <li className={classnames.menuItem}>
            <a data-section="#landing" href="/#" aria-label={dictionary.home}>
              {dictionary.home}
            </a>
          </li>
          <li className={classnames.menuItem}>
            <a
              data-section="#projects"
              href="/#projects"
              aria-label={dictionary.projects}
            >
              {dictionary.projects}
            </a>
          </li>
          <li className={classnames.menuItem}>
            <a
              data-section="#contact"
              href="/#contact"
              aria-label={dictionary.contact}
            >
              {dictionary.contact}
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block mr-20 ml-10">
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
                <SVGSun aria-hidden="true" />
              </picture>
              <picture className={classnames.moonIcon}>
                <SVGMoon aria-hidden="true" />
              </picture>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
