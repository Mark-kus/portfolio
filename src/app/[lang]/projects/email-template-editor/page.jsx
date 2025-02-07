import React from "react";

import Main from "@/containers/email-template-editor/Main";

export default async function EmailTemplateEditor({ params: { lang = "en" } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return <Main dictionary={dictionary.emailTemplateEditor} />;
}
