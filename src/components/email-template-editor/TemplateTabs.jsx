const TemplateTabs = ({
  templates,
  currentTemplateIndex,
  setCurrentTemplateIndex,
  setShowAddModal,
  dictionary,
}) => {
  const openAddTemplateModal = () => {
    setCurrentTemplateIndex(null);
    setShowAddModal(true);
  };
  return (
    <div className="w-full md:mr-5 md:w-56">
      <button
        className={`mb-2 w-full cursor-pointer bg-orange-300 p-2 dark:bg-gray-700 ${
          currentTemplateIndex === null && "bg-orange-400 dark:bg-gray-950!"
        }`}
        onClick={openAddTemplateModal}
      >
        {dictionary.addTemplate}
      </button>
      {templates.map((template, index) => (
        <button
          key={index}
          className={`mb-2 w-full cursor-pointer bg-orange-300 p-2 dark:bg-gray-700 ${
            currentTemplateIndex === index && "bg-orange-400 dark:bg-gray-950!"
          }`}
          onClick={() => setCurrentTemplateIndex(index)}
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateTabs;
