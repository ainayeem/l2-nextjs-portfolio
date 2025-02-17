import ProjectCard from "../projectCard/ProjectCard";

export interface TProject {
  _id: string;
  title: string;
  tools: string[];
  details: string;
  image: string;
  repository: string;
  liveLink: string;
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.Base_Url}/project`);
  const projects = await res.json();

  return projects.slice(0, 2).map((project: TProject) => ({
    projectId: project._id,
  }));
};

const FeaturedProject = async () => {
  const res = await fetch(`${process.env.Base_Url}/project`);
  const projects = await res.json();
  //   console.log(projects);
  return (
    <section>
      <div>
        <h1 className="text-4xl font-semibold text-center">Featured Projects</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="flex gap-10 justify-center my-10">
        {projects.slice(0, 2).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProject;
