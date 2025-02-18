import { useState } from "react";
import LanguageOptions from "./LanguageOptions";
import GenderOptions from "./GenderOptions";

const EmailTemplateModal = ({
  saveTemplates,
  templates,
  selectedTemplate,
  dictionary,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedSex, setSelectedSex] = useState("M");
  const [content, setContent] = useState(
    selectedTemplate?.content || {
      en: { M: "", W: "" },
      es: { M: "", W: "" },
      pt: { M: "", W: "" },
    },
  );

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSexChange = (event) => {
    setSelectedSex(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent({
      ...content,
      [selectedLanguage]: {
        ...content[selectedLanguage],
        [selectedSex]: event.target.value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTemplate = {
      name: formData.get("name"),
      content,
    };

    if (selectedTemplate) {
      const newTemplates = [...templates];
      const templateIndex = templates.findIndex(
        (template) => template.name === selectedTemplate.name,
      );
      newTemplates[templateIndex] = newTemplate;
      saveTemplates(newTemplates);
      return;
    } else {
      saveTemplates([...templates, newTemplate]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20">
      <div className="z-10 mx-4 w-full max-w-lg rounded-lg bg-orange-300 p-5 dark:bg-gray-900">
        <h1 className="mb-5 text-2xl">{dictionary.addModal.title}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="mb-2 block">
              {dictionary.addModal.templateName}
              <input
                type="text"
                name="name"
                defaultValue={selectedTemplate?.name}
                className="w-full border border-gray-300 bg-black/10 p-2 text-black dark:bg-white/10 dark:text-white"
                required
              />
            </label>
          </div>
          <div className="mb-5">
            <LanguageOptions
              selectedLanguage={selectedLanguage}
              handleLanguageChange={handleLanguageChange}
              dictionary={dictionary}
            />
          </div>
          <div className="mb-5">
            <GenderOptions
              selectedSex={selectedSex}
              handleSexChange={handleSexChange}
              dictionary={dictionary}
            />
          </div>
          <div className="mb-5">
            <label className="mb-2 block">
              {dictionary.addModal.templateContent}
              <textarea
                name="content"
                value={content[selectedLanguage][selectedSex]}
                onChange={handleContentChange}
                className="w-full border border-gray-300 bg-black/10 p-2 text-black dark:bg-white/10 dark:text-white"
                rows="10"
                required
                placeholder={dictionary.addModal.templateContentPlaceholder}
              />
            </label>
          </div>
          <div className="flex justify-end gap-10">
            <button
              type="button"
              className="w-3/12 cursor-pointer bg-gray-500 p-2 text-white"
              onClick={() => saveTemplates(templates)}
            >
              {dictionary.addModal.cancel}
            </button>
            <button
              type="submit"
              className="w-3/12 cursor-pointer bg-orange-500 p-2 text-white dark:bg-gray-700"
            >
              {dictionary.addModal.save}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailTemplateModal;
