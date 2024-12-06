import React from "react";
import { EMAIL, GITHUB, LINKEDIN } from "@/seeds/socialLinks";
import GitHub from "@/components/svgs/media/GitHub";
import LinkedIn from "@/components/svgs/media/LinkedIn";
import Mail from "@/components/svgs/media/Mail";

const CallToAction = ({ lang, dictionary }) => {
  const styles = {
    container:
      "flex flex-col lg:w-1/2 border-b-2 md:border-b-0 border-gray-300 m-8 mb-0 pb-8 md:mx-12",
    title: "text-2xl font-bold mt-6 md:mt-0",
    subtitle: "py-4 md:pb-12",
    list: "flex flex-col gap-y-2",
    listItem: "flex items-center gap-x-2 w-fit",
    resumeButton:
      "inline-block px-4 py-1 rounded-3xl border-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-300 active:scale-95 transition-all font-semibold md:text-lg",
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{dictionary.title}</h2>
      <p className={styles.subtitle}>{dictionary.subtitle}</p>
      <ul className={styles.list}>
        <li>
          <a
            href={GITHUB.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <GitHub />
            {GITHUB.username}
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <LinkedIn />
            {LINKEDIN.username}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${EMAIL.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <Mail />
            {EMAIL.username}
          </a>
        </li>
        <li>
          <a
            href={lang === "es" ? "/curriculum.pdf" : "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            {dictionary.openResume}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CallToAction;
