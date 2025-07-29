import { useState, useEffect } from "react";
import { client, urlFor } from "../lib/sanityClient";

// Define TypeScript interface for project data
interface Project {
    name: string;
    description: string;
    technologies: string[];
    image?: { asset: { _ref: string } };
    url?: string;
    category?: { name: string };
    featured?: boolean;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch projects from Sanity on component mount
    useEffect(() => {
        const query = `*[_type == "project"] {
      name,
      description,
      technologies,
      image,
      url,
      category -> { name },
      featured
    }`;

        client
            .fetch(query)
            .then((data: Project[]) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load projects");
                setLoading(false);
                console.error(err);
            });
    }, []);

    if (loading) return <div className="text-center py-20">Loading projects...</div>;
    if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

    return (
        <section
            id="projects"
            className="space-y-10 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light"
            data-aos="fade-up"
        >
            <h2 className="text-3xl text-primary font-bold mb-4 dark:text-primary">🚀 Projects</h2>
            {projects.map((project, index) => (
                <div
                    key={index}
                    data-aos="fadeRay-up"
                    className="bg-light dark:bg-dark p-6 rounded-lg shadow-md"
                >
                    {project.image && (
                        <img
                            src={urlFor(project.image).width(400).height(200).fit("crop").url()}
                            alt={project.name}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                    )}
                    <h3 className="text-2xl font-semibold text-primary mb-2 dark:text-primary">
                        {project.name}
                        {project.featured && (
                            <span className="ml-2 text-sm text-yellow-500">⭐ Featured</span>
                        )}
                    </h3>
                    <p className="mb-1">{project.description}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-400">
                        Tech: {project.technologies.join(", ")}
                    </p>
                    {project.category && (
                        <p className="text-sm text-gray-400 dark:text-gray-400">
                            Category: {project.category.name}
                        </p>
                    )}
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            View Project
                        </a>
                    )}
                    {project.url && (
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "CreativeWork",
                                    name: project.name,
                                    description: project.description,
                                    image: project.image ? urlFor(project.image).url() : undefined,
                                    url: project.url,
                                    keywords: project.technologies,
                                    creator: {
                                        "@type": "Person",
                                        name: "Godwin", // Replace with your actual name
                                    },
                                }),
                            }}
                        />
                    )}
                </div>
            ))}
        </section>
    );
};

export default Projects;