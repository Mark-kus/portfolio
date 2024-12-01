"use client";

import { useEffect, useState } from "react";
import SVGMoon from "./svgs/SVGMoon";
import SVGPersonalLogo from "./svgs/SVGPersonalLogo";
import SVGSun from "./svgs/SVGSun";

export default function Navigation() {
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

  // Función para cambiar el lenguaje
  const changeLanguage = ({ target: { value } }) => {
    // Cambiar el idioma de la página
    document.documentElement.lang = value;
    localStorage.setItem("lang", value);
    // Recargar la página para que los cambios surtan efecto
    window.location.reload();
  };

  return (
    <nav className="flex justify-between md:justify-end items-center p-3 bg-amber-700 dark:bg-slate-800 text-white">
      <a className="md:ml-20 md:absolute md:left-0" href="/">
        <SVGPersonalLogo />
      </a>
      <div className="md:hidden">
        <button aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:block">
        <ul className="flex list-none gap-3 items-center">
          <li className="py-2 px-4 rounded-3xl">
            <a data-section="#landing" href="/#">
              Home
            </a>
          </li>
          <li className="py-2 px-4 rounded-3xl">
            <a data-section="#projects" href="/#projects">
              Projects
            </a>
          </li>
          <li className="py-2 px-4 rounded-3xl">
            <a data-section="#contact" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block mr-20 ml-10">
        <ul className="flex list-none gap-3 items-center">
          <li className="rounded-3xl">
            <select
              onChange={changeLanguage}
              className="bg-transparent h-9 py-1 px-2 outline-none ring-2 ring-gray-300 rounded-3xl cursor-pointer"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
          <button
            onClick={toggleTheme}
            className={`text-white p-2 flex rounded-full transition-all hover:ring-2 hover:ring-gray-300 ${
              !isDarkMode ? "bg-orange-300" : "bg-black"
            }`}
          >
            <picture
              className={`transition-all ${
                !isDarkMode ? " opacity-100" : "opacity-0 translate-x-5"
              }`}
            >
              <SVGSun />
            </picture>
            <picture
              className={`transition-all ${
                !isDarkMode ? " opacity-0 -translate-x-5" : "opacity-100"
              }`}
            >
              <SVGMoon />
            </picture>
          </button>
        </ul>
      </div>
    </nav>
  );
}
