import React, { useState } from "react";
import ActionButtons from "@/components/email-template-editor/ActionButtons";
import LanguageOptions from "@/components/email-template-editor/LanguageOptions";
import GenderOptions from "@/components/email-template-editor/GenderOptions";

const EmailTemplateFiller = ({
  selectedTemplate,
  setShowAddModal,
  setShowDeleteModal,
  dictionary,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Object.keys(selectedTemplate.content)[0],
  );
  const [selectedSex, setSelectedSex] = useState(
    Object.keys(selectedTemplate.content[selectedLanguage])[0],
  );
  const [fieldValues, setFieldValues] = useState({});
  const [copied, setCopied] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setSelectedSex(
      Object.keys(selectedTemplate.content[event.target.value])[0],
    );
  };

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleFieldChange = (event) => {
    setFieldValues({
      ...fieldValues,
      [event.target.id]: event.target.value,
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
      /\[([^\]]+)\]/g,
    );

  const previewEmail = () => {
    let preview = selectedTemplate.content[selectedLanguage][selectedSex];
    if (fillTemplateFields) {
      fillTemplateFields.forEach((match) => {
        const fieldName = match.replace(/\[|\]/g, "");
        const fieldValue = `<span className="bg-orange-300 dark:bg-white/30">${
          fieldValues[fieldName] ? fieldValues[fieldName] : match
        }</span>`;
        preview = preview.replace(match, fieldValue);
      });
    }
    preview = preview.replace(/\n/g, "<br />");
    return { __html: preview };
  };

  const languageInclude = Object.keys(selectedTemplate.content);
  const genderInclude = Object.keys(selectedTemplate.content[selectedLanguage]);

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-4">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-2xl">{selectedTemplate.name}</h1>
          <ActionButtons
            setShowAddModal={setShowAddModal}
            setShowDeleteModal={setShowDeleteModal}
          />
        </div>
        <div className="mb-5">
          <LanguageOptions
            include={languageInclude}
            selectedLanguage={selectedLanguage}
            handleLanguageChange={handleLanguageChange}
            dictionary={dictionary}
          />
        </div>
        <div className="mb-5">
          <GenderOptions
            include={genderInclude}
            selectedSex={selectedSex}
            handleSexChange={handleSexChange}
            dictionary={dictionary}
          />
        </div>
        <div>
          {fillTemplateFields
            ? fillTemplateFields.map((match, index) => {
                const fieldName = match.replace(/\[|\]/g, "");
                return (
                  <div key={index} className="mb-5">
                    <label className="mb-2 block">
                      {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                      <input
                        type="text"
                        id={fieldName}
                        value={fieldValues[fieldName] || ""}
                        onChange={handleFieldChange}
                        className="w-full border border-gray-300 bg-orange-300 p-2 text-black dark:bg-gray-800 dark:text-white"
                      />
                    </label>
                  </div>
                );
              })
            : dictionary.noFields}
        </div>
      </div>
      <div className="mb-10 p-4 md:w-1/2 md:pl-4">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl">{dictionary.preview}</h2>
          <button
            className="w-10 cursor-pointer bg-white/40 p-2"
            onClick={copyEmail}
          >
            {copied ? "✔" : "📝"}
          </button>
        </div>
        <div
          className="border border-gray-300 bg-gray-100 p-4 dark:bg-gray-800"
          dangerouslySetInnerHTML={previewEmail()}
        />
      </div>
    </div>
  );
};

export default EmailTemplateFiller;
