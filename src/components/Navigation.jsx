import PersonalLogo from "@/components/svgs/PersonalLogo";
import LanguageSelector from "@/components/LanguageSelector";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import Moon from "./svgs/Moon";

const NavigationLinks = ({ dictionary }) => {
  return (
    <>
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

export default function Navigation({ lang, dictionary }) {
  return (
    <nav
      className="flex items-center justify-between bg-amber-700 text-white transition-colors duration-500 md:justify-end dark:bg-slate-800"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="navbar justify-between md:w-fit">
        <span className="ml-6 md:absolute md:left-0 md:ml-10">
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
              className="menu menu-sm dropdown-content rounded-box text-base-content z-[10] mt-3 w-32 p-2 shadow dark:bg-gray-700"
            >
              <NavigationLinks dictionary={dictionary} />
            </ul>
          </div>
        </div>
        <div className="navbar-center mr-4 hidden md:mr-0 md:flex">
          <ul className="menu menu-horizontal px-1">
            <NavigationLinks dictionary={dictionary} />
          </ul>
        </div>
        <hr className="mx-4 hidden h-8 border-l border-gray-300 transition-all md:block dark:border-gray-600" />
        <div className="hidden md:block">
          <ul className="mr-10 flex list-none items-center gap-3">
            <li className="rounded-3xl">
              <LanguageSelector lang={lang} />
            </li>
            <li>
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
