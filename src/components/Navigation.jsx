"use client";

import { useEffect, useState } from "react";
import SVGMoon from "./svgs/SVGMoon";
import SVGPersonalLogo from "./svgs/SVGPersonalLogo";
import SVGSun from "./svgs/SVGSun";

export default function Navigation() {
  const handleTheme = () => {};

  return (
    <nav className="flex justify-between md:justify-end items-center p-3 bg-slate-800 dark:bg-green-800">
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
          <li className="py-2 px-4 rounded-3xl">
            <select
              className="bg-slate-800 text-white border border-gray-600 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
          <button
            onChange={handleTheme}
            className="p-2 rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-orange-300"
          >
            <SVGSun />
          </button>
          <button
            onChange={handleTheme}
            className="p-2 rounded-full transition-all hover:ring-2 hover:ring-gray-300 bg-black"
          >
            <SVGMoon />
          </button>
        </ul>
      </div>
    </nav>
  );
}
