"use client";

import DeleteModal from "@/components/email-template-editor/DeleteModal";
import EmailTemplateFiller from "@/components/email-template-editor/EmailTemplateFiller";
import EmailTemplateModal from "@/components/email-template-editor/EmailTemplateModal";
import TemplateTabs from "@/components/email-template-editor/TemplateTabs";
import React, { useState, useEffect } from "react";

const saveUserData = (lastTemplateIndex, templates) => {
  localStorage.setItem(
    "email-template-editor",
    JSON.stringify({
      lastTemplateIndex,
      templates,
    })
  );
};

const getUserData = () => {
  const jsonParsed = JSON.parse(localStorage.getItem("email-template-editor"));
  if (jsonParsed) {
    return jsonParsed;
  }
  return {
    lastTemplateIndex: 0,
    templates: [],
  };
};

const Main = ({ dictionary }) => {
  const [templates, setTemplates] = useState([]);
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteTemplate = () => {
    const newTemplates = templates.filter(
      (_, index) => index !== currentTemplateIndex
    );
    const lastTemplateIndex = newTemplates.length - 1;
    setTemplates(newTemplates);
    setCurrentTemplateIndex(lastTemplateIndex);
    setShowDeleteModal(false);
    saveUserData(lastTemplateIndex, newTemplates);
  };

  const loadTemplate = (index) => {
    setCurrentTemplateIndex(index);
  };

  const saveTemplates = (newTemplates) => {
    const lastTemplateIndex = newTemplates.length - 1;
    setTemplates(newTemplates);
    saveUserData(lastTemplateIndex, newTemplates);
    setCurrentTemplateIndex(lastTemplateIndex);
    setShowAddModal(false);
  };

  useEffect(() => {
    const { templates, lastTemplateIndex } = getUserData();
    if (templates) {
      setTemplates(templates);
      loadTemplate(lastTemplateIndex);
    }
  }, []);

  const selectedTemplate =
    currentTemplateIndex !== null ? templates[currentTemplateIndex] : null;

  return (
    <div className="flex md:flex-row flex-col p-5 bg-orange-200 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <TemplateTabs
        currentTemplateIndex={currentTemplateIndex}
        setCurrentTemplateIndex={loadTemplate}
        setShowAddModal={setShowAddModal}
        templates={templates}
        dictionary={dictionary.navigation}
      />

      {selectedTemplate && (
        <EmailTemplateFiller
          selectedTemplate={selectedTemplate}
          setShowAddModal={setShowAddModal}
          setShowDeleteModal={setShowDeleteModal}
          dictionary={dictionary.editor}
        />
      )}

      {showAddModal && (
        <EmailTemplateModal
          saveTemplates={saveTemplates}
          templates={templates}
          selectedTemplate={selectedTemplate}
          dictionary={dictionary.editor}
        />
      )}

      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteTemplate={deleteTemplate}
          dictionary={dictionary.deleteModal}
        />
      )}
    </div>
  );
};

export default Main;
