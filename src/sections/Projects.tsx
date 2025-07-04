import { projects } from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="space-y-10 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light" data-aos="fade-up">
            <h2 className="text-3xl text-primary font-bold mb-4 dark:text-primary">🚀 Projects</h2>
            {projects.map((project, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    className="bg-light dark:bg-dark p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-semibold text-primary mb-2 dark:text-primary">
                        {project.title}
                    </h3>
                    <p className="mb-1">{project.description}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-400">Tech: {project.tech.join(", ")}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;