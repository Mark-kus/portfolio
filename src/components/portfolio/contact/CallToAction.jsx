"use client";

import React, { useState } from "react";
import { EMAIL, GITHUB, LINKEDIN } from "@/seeds/socialLinks";
import GitHub from "@/components/svgs/media/GitHub";
import LinkedIn from "@/components/svgs/media/LinkedIn";
import Mail from "@/components/svgs/media/Mail";

const CallToAction = ({ lang, dictionary }) => {
  const [copied, setCopied] = useState(false);

  const styles = {
    container:
      "flex flex-col border-b-2 md:w-full md:border-b-0 border-gray-300 m-8 mt-6 mb-0 pb-8 md:m-0 md:mt-0 md:mb-0 md:pb-0",
    title: "text-2xl font-bold mt-6 md:mt-0",
    subtitle: "py-4 md:pb-12 md:w-2/3",
    list: "flex flex-col gap-y-2",
    listItem: "flex items-center gap-x-2 w-fit",
    resumeButton:
      "inline-block px-4 py-1 rounded-3xl border-2 cursor-pointer dark:hover:bg-gray-700 hover:bg-white/40 active:scale-95 transition-all font-semibold md:text-lg",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
        <li className="flex align-middle">
          <a
            href={`mailto:${EMAIL.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.listItem}
          >
            <Mail />
            {EMAIL.username}
          </a>
          <div className="tooltip ml-2" data-tip={copied ? "Copied!" : "Copy"}>
            <button
              onClick={() => copyToClipboard(EMAIL.username)}
              className="h-7 w-7 cursor-pointer rounded-md p-0.5 transition-colors hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    opacity="0.4"
                    d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
                    className="stroke-black dark:stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
                    className="stroke-black dark:stroke-white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498"
                    className={`stroke-black transition-opacity dark:stroke-white ${copied || "opacity-0"}`}
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
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
