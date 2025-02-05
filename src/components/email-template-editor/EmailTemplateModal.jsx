import { useState } from "react";

const EmailTemplateModal = ({ saveTemplates, templates, selectedTemplate }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedSex, setSelectedSex] = useState("M");
  const [content, setContent] = useState(
    selectedTemplate?.content || {
      en: { M: "", W: "" },
      es: { M: "", W: "" },
      pt: { M: "", W: "" },
    }
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
        (template) => template.name === selectedTemplate.name
      );
      newTemplates[templateIndex] = newTemplate;
      saveTemplates(newTemplates);
      return;
    } else {
      saveTemplates([...templates, newTemplate]);
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-black flex justify-center items-center">
      <div className="p-5 rounded-lg w-4/6 bg-orange-300 dark:bg-green-900 z-10">
        <h1 className="text-2xl mb-5">Add Email Template</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-2">Template Name</label>
            <input
              type="text"
              name="name"
              defaultValue={selectedTemplate?.name}
              className="w-full p-2 border border-gray-300 text-black"
              required
            />
          </div>
          <div className="mb-5">
            <div className="flex gap-4">
              <label
                className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-900 dark:bg-slate-900 ${
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
                className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-900 dark:bg-slate-900 ${
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
                className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-900 dark:bg-slate-900 ${
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
                className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-900 dark:bg-slate-900 ${
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
                className={`border-2 p-1 rounded-md w-full flex justify-center items-center cursor-pointer border-orange-500 bg-orange-500 dark:border-slate-900 dark:bg-slate-900 ${
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
          <div className="mb-5">
            <label className="block mb-2">Email Template</label>
            <textarea
              name="content"
              value={content[selectedLanguage][selectedSex]}
              onChange={handleContentChange}
              className="w-full p-2 border border-gray-300 text-black"
              rows="5"
              required
            />
          </div>
          <div className="flex justify-end gap-10">
            <button
              type="button"
              className="bg-gray-500 text-white p-2 w-3/12"
              onClick={() => saveTemplates(templates)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 dark:bg-green-700 text-white p-2 w-3/12"
            >
              Save Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailTemplateModal;
