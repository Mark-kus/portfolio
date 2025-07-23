import { Suspense, lazy } from "react";
import About from "@/components/portfolio/About";

// Lazy load heavy components
const Projects = lazy(() => import("@/containers/portfolio/Projects"));
const Career = lazy(() => import("@/containers/portfolio/Career"));
const Contact = lazy(() => import("@/containers/portfolio/Contact"));

// Loading components
const ComponentSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  </div>
);

export default function Content({ lang, dictionary }) {
  return (
    <section className="space-y-10 overflow-y-hidden pb-16">
      <div className="m-10 rounded-3xl border-2 border-amber-900 dark:border-slate-700">
        <About dictionary={dictionary.about} />
      </div>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <Projects lang={lang} dictionary={dictionary.projects} />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <Career lang={lang} dictionary={dictionary.career} />
      </Suspense>
      
      <Suspense fallback={<ComponentSkeleton />}>
        <Contact lang={lang} dictionary={dictionary.contact} />
      </Suspense>
    </section>
  );
}
