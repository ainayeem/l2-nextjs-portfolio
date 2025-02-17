import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TProject } from "../featuredProject/FeaturedProject";

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <Link href={`/projects/${project._id}`}>
      <div className="border rounded-lg shadow-md shadow-gray-200 dark:shadow-[#37383b] p-6 hover:scale-105 transition-transform duration-300">
        <Image src={project.image} alt="title" width={400} height={400} className="border rounded-lg mx-auto" />
        <div className="mt-3 ">
          <h1 className="text-teal-500 font-semibold text-xl">{project.title}</h1>
          <div className="flex gap-3 mt-3">
            <Link href="https://github.com/ainayeem/car-shop-frontend">
              <FiGithub />
            </Link>
            <Link href="https://github.com/ainayeem/car-shop-frontend">
              <FaLink />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
