import Image from "next/image";

// Main composition component
export const ProjectPreview = ({ children, className = "" }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};

// Image component
export const PreviewImage = ({ project, lang, className = "" }) => {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-xl ${className}`}
    >
      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={project.alt[lang]}
            width={600}
            height={375}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="project-image-overlay group-hover:opacity-100" />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <div className="text-center">
            <div className="mb-2 text-4xl opacity-50">📋</div>
            <p className="text-sm opacity-70">
              {lang === "en"
                ? "Preview Coming Soon"
                : "Vista Previa Próximamente"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Actions/Buttons component
export const Actions = ({ project, dictionary, className = "" }) => {
  if (!project.websiteUrl && !project.repositoryUrl) {
    return null;
  }

  return (
    <div className={`mt-4 flex gap-2 ${className}`}>
      {project.websiteUrl && (
        <Button href={project.websiteUrl}>{dictionary.website}</Button>
      )}
      {project.repositoryUrl && (
        <Button href={project.repositoryUrl}>{dictionary.repository}</Button>
      )}
    </div>
  );
};

// Individual button component
export const Button = ({ href, children, className = "" }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-center font-medium backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10 ${className}`}
    >
      {children}
    </a>
  );
};

// Header component for project metadata
export const Header = ({ project, lang, className = "" }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <time className="font-mono text-sm italic opacity-70">
        {project.date[lang]}
      </time>
      <h3 className="bg-gradient-gold dark:bg-gradient-marine mt-1 bg-clip-text text-xl font-bold text-transparent">
        {project.title[lang]}
      </h3>
    </div>
  );
};

// Content component for project description
export const Content = ({ project, lang, className = "" }) => {
  return (
    <div className={`flex-grow ${className}`}>
      <p className="text-sm leading-relaxed opacity-80">
        {project.content[lang]}
      </p>
    </div>
  );
};

export default ProjectPreview;
