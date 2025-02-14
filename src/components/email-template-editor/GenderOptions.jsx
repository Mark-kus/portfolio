import React from "react";

const GenderOptions = ({ selectedSex, handleSexChange, dictionary }) => {
  return (
    <div className="flex gap-4">
      <label
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
          selectedSex === "M" &&
          "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
        }`}
      >
        <input
          type="radio"
          name="sex"
          value="M"
          checked={selectedSex === "M"}
          onChange={handleSexChange}
          className="hidden"
        />
        {dictionary.genders.male}
      </label>
      <label
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-orange-500 bg-orange-500 p-1 transition-colors dark:border-slate-700 dark:bg-slate-900 ${
          selectedSex === "W" &&
          "border-black bg-orange-700! text-slate-200 dark:border-white dark:bg-slate-700!"
        }`}
      >
        <input
          type="radio"
          name="sex"
          value="W"
          checked={selectedSex === "W"}
          onChange={handleSexChange}
          className="hidden"
        />
        {dictionary.genders.female}
      </label>
    </div>
  );
};

export default GenderOptions;
