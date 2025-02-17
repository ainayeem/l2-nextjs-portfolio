import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TProject } from "../featuredProject/FeaturedProject";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <Link href={`/projects/${project._id}`} className="block">
      <div
        className="border rounded-lg shadow-md shadow-gray-200 dark:shadow-[#37383b] p-6 
        hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#1e1e1e]"
      >
        {/* Project Image */}
        <Image src={project.image} alt={project.title} width={400} height={400} className="border rounded-lg mx-auto object-cover" />

        {/* Project Title */}
        <div className="mt-4 text-center md:text-left">
          <h1 className="text-teal-500 font-semibold text-xl break-words">{project.title}</h1>

          {/* Project Links */}
          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FiGithub size={24} />
              </Link>
            )}
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaLink size={24} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
