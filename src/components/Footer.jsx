"use client";

import gmail from "@/assets/contact/gmail.svg";

import { useEffect, useState } from "react";
import Image from "next/image";
import projects from "@/seeds/projects";
import socialLinks from "@/seeds/social";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    projects.forEach((project) => {
      if (project.deploy) {
        if (sessionStorage.getItem(project.deploy)) return;

        fetch(project.deploy);
        sessionStorage.setItem(project.deploy, true);
      }
    });
  }, []);

  const handleCopy = () => {
    if (!copied) {
      navigator.clipboard.writeText("tignanellimarco@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <footer className="flex justify-between mt-16 border-t border-slate-500 bg-slate-600">
      <p onClick={handleCopy} className="flex items-center cursor-pointer">
        <Image src={gmail} alt="gmail link" className="w-8 md:w-12" />
        <span
          className={`absolute left-12 transition-opacity ${
            copied ? "opacity-0" : "opacity-100"
          }`}
        >
          tignanellimarco@gmail.com
        </span>
        <span
          className={`absolute left-12 transition-opacity ${
            copied ? "opacity-100" : "opacity-0"
          }`}
        >
          Copied to clipboard!
        </span>
      </p>

      <div className="flex">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank">
            <Image
              src={link.src}
              className="w-8 md:mr-4 md:w-12"
              alt={link.alt}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
