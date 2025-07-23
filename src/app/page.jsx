import React from "react";

import Content from "@/containers/portfolio/Content";
import { cookies } from "next/headers";
import { getDictionary, validateLanguage } from "@/lib/language";

export default async function Home() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  
  // Ensure we only use supported languages
  const validLang = validateLanguage(lang);
  const dictionary = await getDictionary(validLang);

  return (
    <div id="landing">
      <Content lang={validLang} dictionary={dictionary.portfolio} />
    </div>
  );
}
