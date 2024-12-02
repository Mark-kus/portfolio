import React, { useState } from "react";

const LanguageSelector = ({ lang }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    window.location.href = `/${language}`;
    setIsOpen(false);
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
        className="cursor-pointer p-2 hover:ring-2 focus:ring-2 hover:ring-gray-300 rounded transition-all"
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
          {["en", "es"].map((language) => (
            <li
              key={language}
              id={language}
              role="option"
              aria-selected={language === selectedLanguage}
              className={`p-2 cursor-pointer transition-all bg-opacity-20 active:bg-opacity-50 ${
                language === selectedLanguage
                  ? "bg-blue-500 cursor-not-allowed"
                  : "hover:bg-blue-500"
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
