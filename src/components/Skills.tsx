import React from 'react';
import { FaNodeJs, FaHtml5, FaGit, FaWindows, FaLinux, FaReact, FaStripe, FaPaypal, FaBolt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMysql, SiFirebase, SiNextdotjs, SiBootstrap, SiTailwindcss, SiFigma, SiMarkdown, SiRedux, SiExpress, SiOpenai, SiMongodb, SiPostman, SiVercel, SiSupabase } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { BiLogoJquery } from 'react-icons/bi';
import { TbSql } from 'react-icons/tb';

const skills = [
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-12 h-12 text-[#68A063]" />,
    category: "Language"
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12 text-[#F7DF1E]" />,
    category: "Language"
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" />,
    category: "Language"
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="w-12 h-12 text-[#E34F26]" />,
    category: "Language"
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-12 h-12 text-[#4479A1]" />,
    category: "Database"
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12 text-[#47A248]" />,
    category: "Database"
  },
  {
    name: "SQL",
    icon: <TbSql className="w-12 h-12 text-[#00758F]" />,
    category: "Database"
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-12 h-12 text-[#FFCA28]" />,
    category: "Collection of libraries"
  },
  {
    name: "React",
    icon: <FaReact className="w-12 h-12 text-[#61DAFB]" />,
    category: "JavaScript Library"
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-12 h-12 text-[#764ABC]" />,
    category: "State Management"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-12 h-12 text-gray-900" />,
    category: "React Framework"
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-12 h-12 text-gray-800" />,
    category: "Web Framework"
  },
  {
    name: "Postman",
    icon: <SiPostman className="w-12 h-12 text-[#FF6C37]" />,
    category: "API Development"
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-12 h-12 text-[#7952B3]" />,
    category: "CSS Library"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" />,
    category: "CSS Library"
  },
  {
    name: "Stripe",
    icon: <FaStripe className="w-12 h-12 text-[#008CDD]" />,
    category: "Payment Gateway"
  },
  {
    name: "PayPal",
    icon: <FaPaypal className="w-12 h-12 text-[#00457C]" />,
    category: "Payment Gateway"
  },
  {
    name: "Vercel",
    icon: <SiVercel className="w-12 h-12 text-gray-900" />,
    category: "Deployment Platform"
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-12 h-12 text-[#3ECF8E]" />,
    category: "Backend as a Service"
  },
  {
    name: "Bolt",
    icon: <FaBolt className="w-12 h-12 text-[#FFD700]" />,
    category: "Payment Gateway"
  },
  {
    name: "OpenAI",
    icon: <SiOpenai className="w-12 h-12 text-[#412991]" />,
    category: "AI Technology"
  },
  {
    name: "Git",
    icon: <FaGit className="w-12 h-12 text-[#F05032]" />,
    category: "Version Control"
  },
  {
    name: "VS Code",
    icon: <VscCode className="w-12 h-12 text-[#007ACC]" />,
    category: "IDE"
  },
  {
    name: "Windows",
    icon: <FaWindows className="w-12 h-12 text-[#0078D6]" />,
    category: "Operating System"
  },
  {
    name: "Linux",
    icon: <FaLinux className="w-12 h-12 text-gray-800" />,
    category: "Operating System"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-2">All my <span className="text-indigo-600">Skills</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg flex items-center gap-4 hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200 shadow-sm hover:shadow-md"
            >
              {skill.icon}
              <div>
                <h3 className="font-medium text-lg text-gray-900">{skill.name}</h3>
                <p className="text-gray-500 text-sm">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;