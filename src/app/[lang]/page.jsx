import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Content from "@/containers/Content";

export default async function Home({ params: { lang = "en" } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(
    (m) => m.default
  );

  return (
    <main className="bg-orange-200 dark:bg-gradient-to-b from-black to-slate-700 text-gray-900 dark:text-slate-100 flex flex-col justify-between transition-colors">
      <Navigation lang={lang} dictionary={dictionary.navigation} />

      <div className="mb-16">
        <Content lang={lang} dictionary={dictionary.content} />
      </div>

      <Footer dictionary={dictionary.footer} />
    </main>
  );
}
