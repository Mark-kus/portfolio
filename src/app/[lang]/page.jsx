import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Content from "@/containers/Content";

import NotFound from "@/app/not-found";

export default async function Home({ params: { lang = "en" } }) {
  if (!["en", "es"].includes(lang)) {
    return <NotFound  />;
  }

  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return (
    <main className="bg-orange-200 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col justify-between transition-colors duration-500">
      <Navigation lang={lang} dictionary={dictionary.navigation} />

      <div id="landing">
        <Content lang={lang} dictionary={dictionary.content} />
      </div>

      <Footer dictionary={dictionary.footer} />
    </main>
  );
}
