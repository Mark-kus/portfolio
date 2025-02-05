import Image from "next/image";

export default function Project({ lang, project, dictionary }) {
  return (
    <>
      <h4 className="text-xl">{project.title[lang]}</h4>
      {project.image && (
        <picture className="overflow-hidden w-full h-5/12 block rounded-lg mb-4 mt-2">
          <Image
            src={project.image}
            alt={project.alt[lang]}
            className="w-full h-full object-cover block hover:scale-105 transition-transform duration-500"
          />
        </picture>
      )}
      <div className="flex gap-2 mt-2">
        {project.websiteUrl && (
          <a
            target="_blank"
            noreferrer={"true"}
            href={project.websiteUrl}
            className="bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 dark:hover:bg-opacity-30 dark:active:bg-opacity-10 py-2 px-4 rounded-lg transition-colors text-black dark:text-white"
          >
            {dictionary.website}
          </a>
        )}
        {project.repositoryUrl && (
          <a
            target="_blank"
            noreferrer={"true"}
            href={project.repositoryUrl}
            className="bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-10 dark:hover:bg-opacity-30 dark:active:bg-opacity-10 py-2 px-4 rounded-lg transition-colors text-black dark:text-white"
          >
            {dictionary.repository}
          </a>
        )}
      </div>
    </>
  );
}
