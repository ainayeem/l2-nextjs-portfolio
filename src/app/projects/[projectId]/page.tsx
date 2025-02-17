import { deleteProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;

  const res = await fetch(`${process.env.Base_Url}/project/${projectId}`);
  const project = await res.json();

  return {
    title: `Projects | ${project.title}`,
    description: project.description,
  };
}

const ProjectDetailsPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const session = await getServerSession(authOptions);

  const { projectId } = await params;
  //   console.log("🚀 ~ ProjectDetailsPage ~ projectId:", projectId);

  const res = await fetch(`${process.env.Base_Url}/project/${projectId}`);
  const project = await res.json();
  // console.log("🚀 ~ ProjectDetailsPage ~ project:", project);

  return (
    <section className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="my-4 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white break-words">{project.title}</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>

      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
        {/* Project Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
          <Image src={project.image} alt={project.title} width={800} height={700} className="object-cover w-full h-full" priority />
        </div>

        {/* Tools as Tags */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Tools Used:</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tools.split(",").map((tool: string, index: number) => (
              <span key={index} className="px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">
                {tool.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">{project.details || "No description available."}</p>

        {/* Buttons */}
        <div className="my-6 flex gap-4 flex-wrap">
          <Link
            href={project.repository}
            target="_blank"
            className="px-4 py-2 border text-white rounded-lg bg-teal-500 hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            View on GitHub
          </Link>
          <Link
            href={project.liveLink}
            target="_blank"
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
          >
            Live Demo
          </Link>
        </div>

        {/* Admin Options (Delete project) */}
        {session?.user && (
          <div className="flex gap-4 flex-wrap mt-6">
            <form
              action={async () => {
                "use server";
                await deleteProject(projectId);
              }}
              className="w-full sm:w-auto"
            >
              <Button type="submit" variant="destructive" className="w-full sm:w-auto">
                Delete
              </Button>
            </form>
            {/* <Button asChild>
            <Link href={`/dashboard/update-project/${projectId}`} className="w-full sm:w-auto">
              Edit
            </Link>
          </Button> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
