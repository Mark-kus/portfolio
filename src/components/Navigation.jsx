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
    nav: "flex justify-between md:justify-end items-center bg-amber-700 dark:bg-slate-800 text-white transition-colors duration-500",
    logo: "md:ml-10 ml-6 md:absolute md:left-0",
    menuItems: "flex list-none gap-3 items-center mr-10",
    themeButton:
      "text-white p-2 flex rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-orange-300 dark:bg-black",
    sunIcon:
      "transition-all duration-500 opacity-100 dark:opacity-0 dark:translate-x-5",
    moonIcon:
      "transition-all duration-500 opacity-0 -translate-x-5 dark:opacity-100 dark:-translate-x-0",
  };

  const NavigationLinks = () => {
    return (
      <>
        <li>
          <Link
            href={`/`}
            className="rounded-sm px-2 py-2 text-sm transition-colors hover:bg-white/20 md:px-4 md:text-base dark:hover:bg-white/10"
            data-section="#about"
            aria-label={`${dictionary.home} button`}
          >
            {dictionary.home}
          </Link>
        </li>
        <li>
          <Link
            href={`/#projects`}
            className="rounded-sm px-2 py-2 text-sm transition-colors hover:bg-white/20 md:px-4 md:text-base dark:hover:bg-white/10"
            data-section="#projects"
            aria-label={`${dictionary.projects} button`}
          >
            {dictionary.projects}
          </Link>
        </li>
        <li>
          <Link
            href={`/#career`}
            className="rounded-sm px-2 py-2 text-sm transition-colors hover:bg-white/20 md:px-4 md:text-base dark:hover:bg-white/10"
            data-section="#career"
            aria-label={`${dictionary.career} button`}
          >
            {dictionary.career}
          </Link>
        </li>
        <li>
          <Link
            href={`/#contact`}
            className="rounded-sm px-2 py-2 text-sm transition-colors hover:bg-white/20 md:px-4 md:text-base dark:hover:bg-white/10"
            data-section="#contact"
            aria-label={`${dictionary.contact} button`}
          >
            {dictionary.contact}
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav
      className={classnames.nav}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar justify-between md:w-fit">
        <span className={classnames.logo}>
          <PersonalLogo aria-label="Personal Logo" />
        </span>
        <div className="navbar-end mr-6">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost ml-2 focus:bg-gray-700 active:bg-gray-600 md:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box text-base-content z-[1] mt-3 w-32 p-2 shadow dark:bg-gray-700"
            >
              <NavigationLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center mr-4 hidden md:flex md:mr-0">
          <ul className="menu menu-horizontal px-1">
            <NavigationLinks />
          </ul>
        </div>
       <hr 
          className="hidden md:block border-l transition-all border-gray-300 dark:border-gray-600 h-8 mx-4"
       />
        <div className="hidden md:block">
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
      </div>
    </nav>
  );
}
