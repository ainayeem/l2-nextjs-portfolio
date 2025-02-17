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

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Featured Projects</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        {projects.slice(0, 2).map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProject;
