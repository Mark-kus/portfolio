import { EmblaCarousel } from "@/components/EmblaCarousel";

export default function Projects({ lang, dictionary }) {
  return (
    <section id="projects" className="flex flex-col items-center px-4 py-10">
      <header className="bg-gradient-gold dark:bg-gradient-marine bg-clip-text pb-4 text-3xl font-extrabold text-transparent md:text-5xl">
        {dictionary.title}
      </header>

      <EmblaCarousel lang={lang} dictionary={dictionary} />
    </section>
  );
}
