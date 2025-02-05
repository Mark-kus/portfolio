import ActionButtons from "./ActionButtons";

const EmailTemplateFiller = ({
  selectedTemplate,
  copyEmailText,
  setCopyEmailText,
  setShowAddModal,
  setShowDeleteModal,
}) => {
  const copyEmail = () => {
    let finalEmail = selectedTemplate.content;
    const matches = finalEmail.match(/\[([^\]]+)\]/g);
    if (matches) {
      matches.forEach((match) => {
        const fieldName = match.replace(/\[|\]/g, "");
        const fieldValue = document.getElementById(fieldName).value;
        finalEmail = finalEmail.replace(match, fieldValue);
      });
      navigator.clipboard.writeText(finalEmail).then(() => {
        setCopyEmailText("Copied!");
        setTimeout(() => {
          setCopyEmailText("Copy Email to Clipboard");
        }, 2000);
      });
    }
  };

  const fillTemplateFields = selectedTemplate.content.match(/\[([^\]]+)\]/g);

  return (
    <div className="w-3/4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl">{selectedTemplate.name}</h1>
        <ActionButtons
          setShowAddModal={setShowAddModal}
          setShowDeleteModal={setShowDeleteModal}
        />
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
                    className="w-full p-2 border border-gray-300"
                  />
                </div>
              );
            })
          : "No hay valores para cargar"}
        <button
          className="bg-orange-500 dark:bg-teal-500 text-white p-2"
          onClick={copyEmail}
        >
          {copyEmailText}
        </button>
      </div>
    </div>
  );
};

export default EmailTemplateFiller;
