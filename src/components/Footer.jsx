import { GITHUB, LINKEDIN } from "@/seeds/socialLinks";
import GitHub from "@/components/svgs/GitHub";
import LinkedIn from "@/components/svgs/LinkedIn";

const styles = {
  iconLink:
    "p-1 m-1 transition-colors rounded-sm dark:hover:bg-white/20 hover:bg-black/20",
};

export default function Footer({ dictionary }) {
  return (
    <footer className="fixed bottom-0 z-10 flex w-full items-center justify-between bg-white/50 px-6 text-black backdrop-blur-lg backdrop-filter">
      <p className="flex items-center">
        <span className="text-sm">
          <span className="hidden md:inline">
            {new Date().toLocaleDateString()} -{" "}
          </span>
          {dictionary.made} <span className="hidden dark:inline">🖤</span>
          <span className="dark:hidden">🤍</span> {dictionary.by}{" "}
          {GITHUB.username}
        </span>
      </p>

      <div className="flex">
        <a
          href={GITHUB.href}
          target="_BLANK"
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <GitHub />
        </a>
        <a
          href={LINKEDIN.href}
          target="_BLANK"
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
}
