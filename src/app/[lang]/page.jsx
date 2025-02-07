import React from "react";

import Content from "@/containers/portfolio/Content";

export default async function Home({ params: { lang = "en" } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return (
    <div id="landing">
      <Content lang={lang} dictionary={dictionary.portfolio} />
    </div>
  );
}
