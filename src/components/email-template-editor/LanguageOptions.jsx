import React from "react";

const LanguageOptions = ({
  selectedLanguage,
  handleLanguageChange,
  dictionary,
}) => {
  return (
    <div className="flex gap-4">
      <label
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
          selectedLanguage === "en" &&
          "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
        }`}
      >
        <input
          type="radio"
          name="language"
          value="en"
          checked={selectedLanguage === "en"}
          onChange={handleLanguageChange}
          className="hidden"
        />
        {dictionary.languages.english}
      </label>
      <label
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
          selectedLanguage === "es" &&
          "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
        }`}
      >
        <input
          type="radio"
          name="language"
          value="es"
          checked={selectedLanguage === "es"}
          onChange={handleLanguageChange}
          className="hidden"
        />
        {dictionary.languages.spanish}
      </label>
      <label
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
          selectedLanguage === "pt" &&
          "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
        }`}
      >
        <input
          type="radio"
          name="language"
          value="pt"
          checked={selectedLanguage === "pt"}
          onChange={handleLanguageChange}
          className="hidden"
        />
        {dictionary.languages.portuguese}
      </label>
    </div>
  );
};

export default LanguageOptions;
