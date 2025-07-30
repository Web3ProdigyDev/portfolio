import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";

// Define TypeScript interface for project data
interface Project {
  name: string;
  description: string;
  technologies: string[];
  image?: { asset: { _ref: string } };
  gallery?: { asset: { _ref: string } }[];
  url?: string;
  sourceUrl?: string;
  category?: { name: string };
  featured?: boolean;
  video?: string;
  role?: string;
  client?: string;
  dateStart?: string;
  dateEnd?: string;
  tags?: string[];
  testimonials?: { quote: string; author: string }[];
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      name,
      description,
      technologies,
      image,
      gallery[] { asset },
      url,
      sourceUrl,
      category -> { name },
      featured,
      video,
      role,
      client,
      dateStart,
      dateEnd,
      tags,
      testimonials
    }`;

    client
      .fetch(query, { slug })
      .then((data: Project) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError("Failed to load project: " + err.message);
        setLoading(false);
        console.error(err);
      });
  }, [slug]);

  if (loading) return <div className="text-center py-20">Loading project...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!project) return <div className="text-center py-20">Project not found</div>;

  return (
    <section className="py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light">
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline dark:text-primary"
      >
        ← Back to Projects
      </Link>
      <h1 className="text-4xl font-bold text-primary mb-6 dark:text-primary">
        {project.name}
        {project.featured && (
          <span className="ml-2 text-sm text-yellow-500">⭐ Featured</span>
        )}
      </h1>
      {project.image && (
        <img
          src={urlFor(project.image).width(1600).height(800).fit("crop").url()}
          alt={project.name}
          className="w-full h-96 object-cover rounded-md mb-6"
        />
      )}
      <p className="text-lg mb-4">{project.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-400 dark:text-gray-400">
            <strong>Technologies:</strong> {project.technologies?.join(", ") || "None"}
          </p>
          {project.category && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>Category:</strong> {project.category.name}
            </p>
          )}
          {project.tags && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>Tags:</strong> {project.tags.join(", ")}
            </p>
          )}
          {project.role && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>Role:</strong> {project.role}
            </p>
          )}
          {project.client && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>Client:</strong> {project.client}
            </p>
          )}
          {project.dateStart && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>Start Date:</strong> {new Date(project.dateStart).toLocaleDateString()}
            </p>
          )}
          {project.dateEnd && (
            <p className="text-sm text-gray-400 dark:text-gray-400">
              <strong>End Date:</strong> {new Date(project.dateEnd).toLocaleDateString()}
            </p>
          )}
        </div>
        <div>
          {project.url && (
            <p className="mb-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              >
                Visit Live Site
              </a>
            </p>
          )}
          {project.sourceUrl && (
            <p className="mb-2">
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                View Source Code
              </a>
            </p>
          )}
          {project.video && (
            <p className="mb-2">
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Watch Video Demo
              </a>
            </p>
          )}
        </div>
      </div>
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-4 dark:text-primary">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={urlFor(image).width(1000).height(500).fit("crop").url()}
                alt={`${project.name} gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      )}
      {project.testimonials && project.testimonials.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-primary mb-4 dark:text-primary">
            Testimonials
          </h2>
          {project.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
              <p className="italic">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      )}
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
            keywords: project.technologies || [],
            creator: { "@type": "Person", name: "Godwin" }, // Replace with your name
          }),
        }}
      />
    </section>
  );
};

export default ProjectDetail;