import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Content from "@/containers/Content";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black to-slate-700 text-slate-100 flex flex-col justify-between">
      <Navigation />

      <div className="mb-16">
        <Content />
      </div>

      <Footer />
    </main>
  );
}
