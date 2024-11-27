import Image from "next/image";

export default function Project({ project }) {
  return (
    <>
      <picture className="overflow-hidden w-full h-5/12 block rounded-lg mb-4 border-2 border-slate-700">
        <Image
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover block hover:scale-105 transition-transform"
        />
      </picture>
      <a
        target="_blank"
        noreferrer
        href={project.deploy ?? project.repo}
        className="bg-blue-500 py-2 px-4 rounded-lg hover:bg-gray-300 hover:text-blue-600 active:bg-gray-400 transition-colors"
      >
        {project.deploy ? "Deployment" : "Repository"}
      </a>
    </>
  );
}
