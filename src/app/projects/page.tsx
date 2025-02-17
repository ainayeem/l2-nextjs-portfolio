import { TProject } from "@/components/featuredProject/FeaturedProject";
import ProjectCard from "@/components/projectCard/ProjectCard";

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.Base_Url}/project`);
  const projects = await res.json();

  return (
    <section className="my-10 px-6 md:px-12 lg:px-20">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
