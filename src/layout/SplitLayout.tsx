import type { ReactNode } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook, FaDiscord } from "react-icons/fa";

const SplitLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-dark via-dark to-dark text-white dark:bg-gradient-to-br dark:from-dark dark:via-dark dark:to-dark dark:text-white">
            {/* Left Sticky Panel */}
            <aside className="hidden md:flex w-1/3 lg:w-1/4 bg-dark text-primary flex-col justify-between sticky top-0 h-screen py-10 px-6 border-r border-gray-700 dark:bg-dark dark:border-gray-700">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-10 text-primary dark:text-primary">Godwin.dev</h1>
                    <nav className="flex flex-col gap-5 text-sm">
                        <a href="#intro" className="hover:text-light transition dark:hover:text-light">🎮 Start Journey</a>
                        <a href="#bio" className="hover:text-light transition dark:hover:text-light">👤 About Me</a>
                        <a href="#discovery" className="hover:text-light transition dark:hover:text-light">🧱 Foundations</a>
                        <a href="#webdev" className="hover:text-light transition dark:hover:text-light">🧠 Development Mastery</a>
                        <a href="#fullstack" className="hover:text-light transition dark:hover:text-light">🧙 Fullstack Wizardry</a>
                        <a href="#techStack" className="hover:text-light transition dark:hover:text-light">🛠 Tech Stack</a>
                        <a href="#projects" className="hover:text-light transition dark:hover:text-light">🚀 Projects</a>
                        <a href="#achievements" className="hover:text-light transition dark:hover:text-light">🏆 Achievements</a>
                        <a href="#contact" className="hover:text-light transition dark:hover:text-light">📬 Contact</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4 items-center text-lg text-primary dark:text-primary">
                    <a href="https://github.com/web3prodigydev" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://twitter.com/Web3Prodigy_" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://wa.me/2348142659673" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="https://facebook.com/web3prodigydev01" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="https://discord.com/users/927958299117256764" target="_blank" rel="noreferrer"><FaDiscord /></a>
                </div>
                <ThemeToggle />
            </aside>

            {/* Right Scrollable Panel */}
            <main className="w-full md:w-2/3 lg:w-3/4 px-6 py-10 space-y-20 overflow-y-auto bg-light dark:bg-dark text-dark dark:text-white">
                {children}
            </main>
        </div>
    );
};

export default SplitLayout;