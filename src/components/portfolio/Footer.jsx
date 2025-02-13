import { GITHUB, LINKEDIN } from "@/seeds/socialLinks";
import GitHub from "@/components/svgs/media/GitHub";
import LinkedIn from "@/components/svgs/media/LinkedIn";

const styles = {
  footer:
    "flex justify-between items-center text-black bg-white bg-white/50 backdrop-filter backdrop-blur-lg px-6 z-10 fixed bottom-0 w-full",
  paragraph: "flex items-center",
  span: "text-sm",
  iconLink:
    "p-1 m-1 transition-colors rounded-sm dark:hover:bg-white/20 hover:bg-black/20",
};

export default function Footer({ dictionary }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        <span className={styles.span}>
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
