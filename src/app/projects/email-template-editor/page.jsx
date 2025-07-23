import React from "react";

import Main from "@/containers/email-template-editor/Main";
import { cookies } from "next/headers";
import { getDictionary, validateLanguage } from "@/lib/language";

export const metadata = {
  title: "Email Template Editor",
};

export default async function EmailTemplateEditor() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  
  // Ensure we only use supported languages
  const validLang = validateLanguage(lang);
  const dictionary = await getDictionary(validLang);

  return <Main dictionary={dictionary.emailTemplateEditor} />;
}
