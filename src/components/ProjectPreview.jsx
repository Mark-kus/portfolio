import Image from "next/image";

const ProjectPreview = ({ lang, project, dictionary }) => {
  const btnClassName =
    "w-full text-center dark:bg-white/20 bg-white/80 hover:bg-white/30 active:bg-white/60 dark:active:bg-white/10 py-2 px-4 rounded-lg transition-colors text-black dark:text-white";

  return (
    <>
      {project.image && (
        <picture className="mt-2 block h-5/12 w-full overflow-hidden rounded-lg border border-black dark:border-white">
          <Image
            src={project.image}
            alt={project.alt[lang]}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 600px"
            loading="lazy"
            quality={80}
            className="block h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </picture>
      )}
      <div className="mt-2 flex gap-1">
        {project.websiteUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.websiteUrl}
            className={btnClassName}
          >
            {dictionary.website}
          </a>
        )}
        {project.repositoryUrl && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.repositoryUrl}
            className={btnClassName}
          >
            {dictionary.repository}
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectPreview;
