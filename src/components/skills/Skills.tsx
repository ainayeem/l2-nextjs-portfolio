import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { FaNode, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { RiBootstrapLine, RiFirebaseLine, RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiAntdesign, SiDaisyui, SiExpress, SiMongoose, SiPostgresql } from "react-icons/si";
import { TbBrandCss3, TbBrandMongodb, TbBrandTypescript, TbCircleLetterC, TbCircleLetterF, TbCircleLetterM } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: AiOutlineHtml5 },
  { name: "CSS", icon: TbBrandCss3 },
  { name: "Javascript", icon: IoLogoNodejs },
  { name: "C / C++", icon: TbCircleLetterC },
  { name: "Python", icon: AiOutlinePython },
  { name: "React JS", icon: FaReact },
  { name: "Typescript", icon: TbBrandTypescript },
  { name: "Next JS", icon: RiNextjsLine },
  { name: "Bootstrap", icon: RiBootstrapLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "Daisy UI", icon: SiDaisyui },
  { name: "Material UI", icon: TbCircleLetterM },
  { name: "Ant D", icon: SiAntdesign },
  { name: "Flowbite", icon: TbCircleLetterF },
  { name: "Node JS", icon: FaNode },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Firebase", icon: RiFirebaseLine },
  { name: "MySQL", icon: GrMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const Skills = () => {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Skills</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 text-lg">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-md shadow-md shadow-gray-200 dark:shadow-[#37383b] 
                         hover:scale-105 transition-transform duration-300 hover:bg-teal-500 hover:text-white"
            >
              <Icon size={40} />
              <p className="mt-2 font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
