import React from "react";

import Main from "@/containers/email-template-editor/Main";
import { cookies } from "next/headers";

export const metadata = {
  title: "Email Template Editor",
};

export default async function EmailTemplateEditor() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return <Main dictionary={dictionary.emailTemplateEditor} />;
}
