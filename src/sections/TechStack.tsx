import ProgressBar from "../components/XPBar";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiRust, SiSolana, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
    { name: "HTML", level: 90, color: "bg-[#f97316]", icon: <FaHtml5 /> },
    { name: "CSS", level: 85, color: "bg-[#0ea5e9]", icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, color: "bg-[#facc15]", icon: <FaJs /> },
    { name: "React", level: 75, color: "bg-[#38bdf8]", icon: <FaReact /> },
    { name: "Node.js", level: 70, color: "bg-[#16a34a]", icon: <FaNodeJs /> },
    { name: "PHP", level: 80, color: "bg-[#6b21a8]", icon: <FaPhp /> },
    { name: "MySQL", level: 75, color: "bg-[#0ea5e9]", icon: <SiMysql /> },
    { name: "Rust", level: 60, color: "bg-[#ea580c]", icon: <SiRust /> },
    { name: "Solana", level: 55, color: "bg-[#9333ea]", icon: <SiSolana /> },
    { name: "Git & GitHub", level: 85, color: "bg-[#ef4444]", icon: <FaGitAlt /> },
    { name: "API Integration", level: 70, color: "bg-[#10b981]", icon: <TbApi /> },
    { name: "TailwindCSS", level: 80, color: "bg-[#06b6d4]", icon: <SiTailwindcss /> },
    { name: "Next.js", level: 65, color: "bg-[#000]", icon: <SiNextdotjs /> },
];

const TechStack = () => {
    return (
        <section id="techStack" className="space-y-6 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-primary dark:text-primary">My Full Tech Stack</h2>
            <p className="text-gray-400 dark:text-gray-400 max-w-2xl">
                Over the years, I've mastered a wide range of technologies spanning frontend, backend, databases,
                and blockchain development. Here's a detailed breakdown of the tools I use and my confidence level with each:
            </p>
            <div className="space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between items-center text-sm text-dark dark:text-light">
                            <div className="flex items-center space-x-2">
                                <span className={`text-2xl ${skill.color.replace('bg-', 'text-')}`}>
                                    {skill.icon}
                                </span>
                                <span>{skill.name}</span>
                            </div>
                            <span>{skill.level}%</span>
                        </div>
                        <ProgressBar progress={skill.level} barColor={skill.color} label={`Progress: ${skill.level}%`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;