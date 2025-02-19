import { useState } from "react";
import LanguageOptions from "@/components/email-template-editor/LanguageOptions";
import GenderOptions from "@/components/email-template-editor/GenderOptions";

const EmailTemplateModal = ({
  saveTemplates,
  templates,
  selectedTemplate,
  dictionary,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedSex, setSelectedSex] = useState("m");

  const [content, setContent] = useState(() => {
    const defaultContent = {
      en: { m: "", f: "" },
      es: { m: "", f: "" },
      pt: { m: "", f: "" },
    };

    if (selectedTemplate?.content) {
      Object.keys(defaultContent).forEach((lang) => {
        if (selectedTemplate.content[lang]) {
          defaultContent[lang] = {
            m: selectedTemplate.content[lang].m || "",
            f: selectedTemplate.content[lang].f || "",
          };
        }
      });
    }

    return defaultContent;
  });

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

    // Remove languages that don't have any data in their masculine or feminine dictionaries
    Object.keys(newTemplate.content).forEach((language) => {
      if (
        !newTemplate.content[language].m &&
        !newTemplate.content[language].f
      ) {
        delete newTemplate.content[language];
      }
    });

    // Remove genders of the remaining languages that don't have any data in them
    Object.keys(newTemplate.content).forEach((language) => {
      if (!newTemplate.content[language].m) {
        delete newTemplate.content[language].m;
      }
      if (!newTemplate.content[language].f) {
        delete newTemplate.content[language].f;
      }
    });

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

  const languageInclude = Object.keys(content);
  const genderInclude = Object.keys(content[selectedLanguage]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/20">
      <div className="z-10 mx-4 w-full max-w-3xl h-[560px] rounded-lg bg-orange-300 p-5 dark:bg-gray-900">
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
          <div className="mb-5">
            <label className="mb-2 block">
              {dictionary.addModal.templateContent}
              <textarea
                name="content"
                value={content[selectedLanguage][selectedSex]}
                onChange={handleContentChange}
                className="w-full resize-none border border-gray-300 bg-black/10 p-2 text-black dark:bg-white/10 dark:text-white"
                rows="7"
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
