import { GITHUB, LINKEDIN } from "@/seeds/socialLinks";
import SVGGitHub from "./svgs/SVGGitHub";
import SVGLinkedIn from "./svgs/SVGLinkedIn";
import SVGInstagram from "./svgs/SVGInstagram";

export default function Footer({ dictionary }) {
  return (
    <footer className="flex justify-between items-center text-black bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg px-6 z-10 fixed bottom-0 w-full">
      <p className="flex items-center">
        <span className="text-sm">
          {new Date().toLocaleDateString()} - {dictionary.made}{" "}
          <span className="hidden dark:inline">🖤</span>
          <span className="dark:hidden">🤍</span> {dictionary.by}{" "}
          {GITHUB.username}
        </span>
      </p>

      <div className="flex">
        <a href={GITHUB.href} target="_BLANK" className="p-2" aria-label="GitHub">
          <SVGGitHub />
        </a>
        <a href={LINKEDIN.href} target="_BLANK" className="p-2" aria-label="LinkedIn">
          <SVGLinkedIn />
        </a>
        <a href={GITHUB.href} target="_BLANK" className="p-2" aria-label="Instagram">
          <SVGInstagram />
        </a>
      </div>
    </footer>
  );
}
