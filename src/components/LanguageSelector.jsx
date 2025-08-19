"use client";

import { useState } from "react";
import Cookies from "js-cookie";
import { allowedLanguages } from "@/middleware";

const LanguageSelector = ({ lang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language) => {
    Cookies.set("lang", language, { expires: 365 });
    setSelectedLanguage(language);
    setIsOpen(false);
    window.location.reload();
  };

  const handleKeyDown = (event) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleOptionKeyDown = (event, language) => {
    const { key } = event;
    if (key === "Enter" || key === " ") {
      event.preventDefault();
      handleSelect(language);
    }
  };

  const handleBlur = (event) => {
    if (!allowedLanguages.includes(event.relatedTarget?.id)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block" onBlur={handleBlur}>
      <button
        className="cursor-pointer rounded-sm px-4 py-2 ring-orange-300 transition-colors hover:bg-white/20 hover:ring-gray-300 focus:ring-2 dark:ring-current dark:hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        {selectedLanguage}
      </button>
      {isOpen && (
        <ul
          className="absolute top-11 left-0 w-full rounded-sm border border-gray-300 bg-amber-700 shadow-lg ring-2 dark:bg-slate-800"
          role="listbox"
          aria-activedescendant={selectedLanguage}
        >
          {allowedLanguages.map((language) => (
            <li
              key={language}
              id={language}
              role="option"
              aria-selected={language === selectedLanguage}
              className={`z-1 cursor-pointer p-2 text-center transition-all ${
                language === selectedLanguage
                  ? "bg-black/40 dark:bg-blue-800"
                  : "hover:bg-black/40 dark:hover:bg-blue-800"
              }`}
              onClick={() => {
                return language !== selectedLanguage && handleSelect(language);
              }}
              onKeyDown={(event) => handleOptionKeyDown(event, language)}
              tabIndex={0}
            >
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
