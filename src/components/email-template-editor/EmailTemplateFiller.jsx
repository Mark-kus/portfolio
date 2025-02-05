import React, { useState } from "react";
import ActionButtons from "@/components/email-template-editor/ActionButtons";

const EmailTemplateFiller = ({
  selectedTemplate,
  setShowAddModal,
  setShowDeleteModal,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedSex, setSelectedSex] = useState("M");
  const [fieldValues, setFieldValues] = useState({});
  const [copied, setCopied] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleSexChange = (e) => {
    setSelectedSex(e.target.value);
  };

  const handleFieldChange = (e) => {
    setFieldValues({
      ...fieldValues,
      [e.target.id]: e.target.value,
    });
  };

  const copyEmail = () => {
    let finalEmail = selectedTemplate.content[selectedLanguage][selectedSex];
    const matches = finalEmail.match(/\[([^\]]+)\]/g);
    if (matches) {
      matches.forEach((match) => {
        const fieldName = match.replace(/\[|\]/g, "");
        const fieldValue = fieldValues[fieldName] || "";
        finalEmail = finalEmail.replace(match, fieldValue);
      });
      navigator.clipboard.writeText(finalEmail).then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
    }
  };

  const fillTemplateFields =
    selectedTemplate.content[selectedLanguage][selectedSex].match(
      /\[([^\]]+)\]/g
    );

  const previewEmail = () => {
    let preview = selectedTemplate.content[selectedLanguage][selectedSex];
    if (fillTemplateFields) {
      fillTemplateFields.forEach((match) => {
        const fieldName = match.replace(/\[|\]/g, "");
        const fieldValue = `<span class="bg-orange-300 dark:bg-green-600">${
          fieldValues[fieldName] ? fieldValues[fieldName] : match
        }</span>`;
        preview = preview.replace(match, fieldValue);
      });
    }
    preview = preview.replace(/\n/g, "<br />");
    return { __html: preview };
  };

  return (
    <div className="w-3/4 flex">
      <div className="w-1/2 pr-4">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl">{selectedTemplate.name}</h1>
          <ActionButtons
            setShowAddModal={setShowAddModal}
            setShowDeleteModal={setShowDeleteModal}
          />
        </div>
        <div className="mb-5">
          <div className="flex gap-4">
            <label
              className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-700 dark:bg-slate-900 ${
                selectedLanguage === "en" &&
                "border-black !bg-orange-700 text-slate-200 dark:!bg-slate-700"
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
              English
            </label>
            <label
              className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-700 dark:bg-slate-900 ${
                selectedLanguage === "es" &&
                "border-black !bg-orange-700 text-slate-200 dark:!bg-slate-700"
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
              Spanish
            </label>
            <label
              className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-700 dark:bg-slate-900 ${
                selectedLanguage === "pt" &&
                "border-black !bg-orange-700 text-slate-200 dark:!bg-slate-700"
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
              Portuguese
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex gap-4">
            <label
              className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-700 dark:bg-slate-900 ${
                selectedSex === "M" &&
                "border-black !bg-orange-700 text-slate-200 dark:!bg-slate-700"
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
              Male
            </label>
            <label
              className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-700 dark:bg-slate-900 ${
                selectedSex === "W" &&
                "border-black !bg-orange-700 text-slate-200 dark:!bg-slate-700"
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
              Female
            </label>
          </div>
        </div>
        <div>
          {fillTemplateFields
            ? fillTemplateFields.map((match, index) => {
                const fieldName = match.replace(/\[|\]/g, "");
                return (
                  <div key={index} className="mb-5">
                    <label className="block mb-2">
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    </label>
                    <input
                      type="text"
                      id={fieldName}
                      value={fieldValues[fieldName] || ""}
                      onChange={handleFieldChange}
                      className="w-full p-2 border border-gray-300 text-black"
                    />
                  </div>
                );
              })
            : "No hay valores para cargar"}
        </div>
      </div>
      <div className="w-1/2 pl-4 p-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl">Preview</h2>
          <button
            className="bg-black bg-opacity-40 p-2 w-10"
            onClick={copyEmail}
          >
            {copied ? "✔" : "📝"}
          </button>
        </div>
        <div
          className="p-4 border border-gray-300 bg-gray-100 dark:bg-gray-800"
          dangerouslySetInnerHTML={previewEmail()}
        />
      </div>
    </div>
  );
};

export default EmailTemplateFiller;
