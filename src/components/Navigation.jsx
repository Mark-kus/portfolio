"use client";

import Moon from "@/components/svgs/generic/Moon";
import PersonalLogo from "@/components/svgs/PersonalLogo";
import Sun from "@/components/svgs/generic/Sun";
import LanguageSelector from "@/components/LanguageSelector";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";

export default function Navigation({ lang, dictionary }) {
  // Estado para manejar el tema
  const { toggleDarkMode } = useDarkMode();

  const classnames = {
    nav: "flex justify-between md:justify-end items-center p-3 bg-amber-700 dark:bg-slate-800 text-white transition-colors duration-500",
    logo: "md:ml-20 md:absolute md:left-0",
    menuItems: "flex list-none gap-3 items-center mr-5",
    themeButton:
      "text-white p-2 flex rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-orange-300 dark:bg-black",
    sunIcon:
      "transition-all duration-500 opacity-100 dark:opacity-0 dark:translate-x-5",
    moonIcon:
      "transition-all duration-500 opacity-0 -translate-x-5 dark:opacity-100 dark:-translate-x-0",
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
          <Link
            href={`/`}
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white text-sm md:text-base px-2 py-2 md:px-4"
            data-section="#about"
            aria-label={dictionary.home}
          >
            {dictionary.home}
          </Link>
        </li>
        <li>
          <Link
            href={`/#career`}
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white text-sm md:text-base px-2 py-2 md:px-4"
            data-section="#career"
            aria-label={dictionary.career}
          >
            {dictionary.career}
          </Link>
        </li>
        <li>
          <Link
            href={`/#contact`}
            className="transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white text-sm md:text-base px-2 py-2 md:px-4"
            data-section="#contact"
            aria-label={dictionary.contact}
          >
            {dictionary.contact}
          </Link>
        </li>
      </ul>
      <div className="hidden md:block h-6 w-0.5 bg-white bg-opacity-20"></div>
      <div className="hidden sm:block md:mr-20 ml-5">
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
