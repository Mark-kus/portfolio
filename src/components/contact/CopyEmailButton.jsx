"use client";

import { EMAIL } from "@/seeds/socialLinks";
import { useState } from "react";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="tooltip ml-2" data-tip={copied ? "Copied!" : "Copy"}>
      <button
        onClick={() => copyToClipboard(EMAIL.username)}
        className="h-7 w-7 cursor-pointer rounded-md p-0.5 transition-colors hover:bg-white/20"
        aria-label="Copy email to clipboard"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              opacity="0.4"
              d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
              className="stroke-black dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
              className="stroke-black dark:stroke-white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.08008 14.9998L8.03008 16.9498L11.9201 13.0498"
              className={`stroke-black transition-opacity dark:stroke-white ${copied || "opacity-0"}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default CopyEmailButton;
