import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanityClient";
import ReviewForm from "../components/ReviewForm";
import ThemeToggle from "../components/ThemeToggle";

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

interface ProjectReview {
  userName: string;
  userEmail: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [reviews, setReviews] = useState<ProjectReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
        name, description, technologies, image, gallery[] { asset }, url, sourceUrl,
        category -> { name }, featured, video, role, client, dateStart, dateEnd, tags, testimonials
      }`;
      const projectData = await client.fetch(projectQuery, { slug });
      setProject(projectData);

      const reviewsQuery = `*[_type == "projectReview" && project->slug.current == $slug && approved == true] {
        userName, userEmail, rating, comment, createdAt
      }`;
      const reviewsData = await client.fetch(reviewsQuery, { slug });
      setReviews(reviewsData);
    } catch (err: any) {
      setError(`Failed to load project or reviews: ${err.message}`);
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);

  if (loading) return <div className="text-center py-10">Loading project...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!project) return <div className="text-center py-10">Project not found</div>;

  return (
    <section className="relative min-h-screen bg-light dark:bg-dark text-dark dark:text-light py-10 px-4 recomendamos sm:px-6">
      {/* Theme Toggle for Mobile */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Link
        to="/"
        className="inline-block mb-6 text-primary hover:underline dark:text-primary text-sm sm:text-base"
      >
        ← Back to Projects
      </Link>
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6 dark:text-primary">
        {project.name}
        {project.featured && (
          <span className="ml-2 text-xs sm:text-sm text-yellow-500">⭐ Featured</span>
        )}
      </h1>
      {project.image && (
        <img
          src={urlFor(project.image).width(800).height(400).fit("crop").url()}
          alt={project.name}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-md mb-6"
        />
      )}
      <p className="text-base sm:text-lg mb-4">{project.description}</p>
      <div className="grid grid-cols-1 gap-4 mb-6">
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
        <div className="space-y-2">
          {project.url && (
            <p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark text-sm"
              >
                Visit Live Site
              </a>
            </p>
          )}
          {project.sourceUrl && (
            <p>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 text-sm"
              >
                View Source Code
              </a>
            </p>
          )}
          {project.video && (
            <p>
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                Watch Video Demo
              </a>
            </p>
          )}
        </div>
      </div>
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 dark:text-primary">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={urlFor(image).width(600).height(300).fit("crop").url()}
                alt={`${project.name} gallery image ${index + 1}`}
                className="w-full h-32 sm:h-40 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      )}
      {project.testimonials && project.testimonials.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 dark:text-primary">
            Testimonials
          </h2>
          {project.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md dark:shadow-dark-md"
            >
              <p className="italic text-sm sm:text-base">"{testimonial.quote}"</p>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 dark:text-primary">
          Project Reviews
        </h2>
        {reviews.length === 0 ? (
          <p className="text-gray-400 dark:text-gray-400 text-sm sm:text-base">
            No reviews yet. Be the first!
          </p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md dark:shadow-dark-md"
              data-aos="fade-up"
            >
              <p className="font-semibold text-sm sm:text-base">{review.userName}</p>
              <p className="text-yellow-500 text-sm">{"★".repeat(review.rating)}</p>
              <p className="italic text-sm sm:text-base">{review.comment}</p>
              <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
      <ReviewForm type="project" onSubmitSuccess={fetchData} />
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
            creator: { "@type": "Person", name: "Godwin Adakonye John" },
            review: reviews.map((review) => ({
              "@type": "Review",
              author: { "@type": "Person", name: review.userName },
              datePublished: review.createdAt,
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
                bestRating: 5,
              },
              reviewBody: review.comment,
            })),
          }),
        }}
      />
    </section>
  );
};

export default ProjectDetail;