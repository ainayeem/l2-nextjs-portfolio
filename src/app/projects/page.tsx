import { TProject } from "@/components/featuredProject/FeaturedProject";
import ProjectCard from "@/components/projectCard/ProjectCard";

const ProjectsPage = async () => {
  const res = await fetch(`${process.env.Base_Url}/project`);
  const projects = await res.json();
  //   console.log(projects);
  return (
    <section className="my-10 container mx-auto">
      <div>
        <h1 className="text-4xl font-semibold text-center">Projects</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="gap-10 justify-center my-10 grid grid-cols-1 lg:grid-cols-3">
        {projects.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
