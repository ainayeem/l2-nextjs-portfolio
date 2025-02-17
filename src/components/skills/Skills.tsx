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
  //   { name: "Netlify", icon: SiNetlify },
  //   { name: "Vercel", icon: RiVercelLine },
];
const Skills = () => {
  return (
    <section>
      <div className="">
        <div>
          <div className="py-20">
            <div>
              <h1 className="text-4xl font-semibold text-center">Skills</h1>
              <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
            </div>
            <div className="mt-10 grid grid-cols-2 xl:grid-cols-7 gap-10 text-lg">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex hover:border-teal-400 hover:bg-teal-400 hover:scale-105 transition-transform duration-300 rounded-md p-4 font-medium shadow-md shadow-gray-200 dark:shadow-[#37383b] hover:text-white"
                  >
                    <Icon size={30} />
                    <p className="mx-4">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
