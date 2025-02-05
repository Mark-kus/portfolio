const EmailTemplateModal = ({ saveTemplates, templates, selectedTemplate }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTemplate = {
      name: formData.get("name"),
      content: formData.get("content"),
    };

    if (selectedTemplate) {
      const newTemplates = [...templates];
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
            <label className="block mb-2">Email Template</label>
            <textarea
              name="content"
              defaultValue={selectedTemplate?.content}
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
              Add Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailTemplateModal;
