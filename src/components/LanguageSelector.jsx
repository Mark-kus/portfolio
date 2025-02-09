import React, { useState } from "react";
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
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block" onBlur={handleBlur}>
      <button
        className="cursor-pointer focus:ring-2 dark:ring-current ring-orange-300 hover:ring-gray-300 transition-colors rounded hover:bg-opacity-20 dark:hover:bg-opacity-10 hover:bg-white py-2 px-2"
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
          className="absolute top-full left-0 bg-amber-700 dark:bg-slate-800 border border-gray-300 w-full shadow-lg"
          onMouseLeave={() => setIsOpen(false)}
          role="listbox"
          aria-activedescendant={selectedLanguage}
        >
          {allowedLanguages.map((language) => (
            <li
              key={language}
              id={language}
              role="option"
              aria-selected={language === selectedLanguage}
              className={`p-2 cursor-pointer transition-all bg-opacity-20 dark:active:bg-opacity-50 active:bg-opacity-50 ${
                language === selectedLanguage
                  ? "dark:bg-blue-500 dark:bg-opacity-20 bg-amber-300"
                  : "dark:hover:bg-blue-500 hover:bg-orange-400"
              }`}
              onClick={() =>
                language !== selectedLanguage && handleSelect(language)
              }
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
