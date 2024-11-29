import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Content from "@/containers/Content";

export default function Home() {
  return (
    <main className="bg-orange-200 dark:bg-gradient-to-b from-black to-slate-700 text-gray-900 dark:text-slate-100 flex flex-col justify-between transition-colors">
      <Navigation />

      <div className="mb-16">
        <Content />
      </div>

      <Footer />
    </main>
  );
}
