import React from "react";

const LanguageOptions = ({
  include,
  selectedLanguage,
  handleLanguageChange,
  dictionary,
}) => {
  return (
    <div className="flex gap-4">
      {include.map((includedLanguage) => (
        <label
          key={includedLanguage}
          className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
            selectedLanguage === includedLanguage &&
            "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
          }`}
        >
          <input
            type="radio"
            name="language"
            value={includedLanguage}
            checked={selectedLanguage === includedLanguage}
            onChange={handleLanguageChange}
            className="hidden"
          />
          {dictionary.languages[includedLanguage]}
        </label>
      ))}
    </div>
  );
};

export default LanguageOptions;
