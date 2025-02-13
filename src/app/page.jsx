import React from "react";

import Content from "@/containers/portfolio/Content";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return (
    <div id="landing">
      <Content lang={lang} dictionary={dictionary.portfolio} />
    </div>
  );
}
