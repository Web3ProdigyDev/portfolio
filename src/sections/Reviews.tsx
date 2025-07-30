import { useState, useEffect } from "react";
import { client } from "../lib/sanityClient";
import ReviewForm from "../components/ReviewForm";

interface PortfolioReview {
  userName: string;
  userEmail: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<PortfolioReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      const reviewsQuery = `*[_type == "portfolioReview" && approved == true] {
        userName, userEmail, rating, comment, createdAt
      }`;
      const reviewsData = await client.fetch(reviewsQuery);
      setReviews(reviewsData);
    } catch (err: any) {
      console.error("Fetch error:", err);
      setError(`Failed to load reviews: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  if (loading) return <div className="text-center py-20">Loading reviews...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <section
      id="reviews"
      className="space-y-10 py-20 px-6 bg-light dark:bg-dark text-dark dark:text-light"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary">
        📝 Portfolio Reviews
      </h2>
      {reviews.length === 0 ? (
        <p className="text-gray-400 dark:text-gray-400">No reviews yet. Be the first!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
              data-aos="fade-up"
            >
              <p className="font-semibold">{review.userName}</p>
              <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
              <p className="italic">{review.comment}</p>
              <p className="text-sm text-gray-400 dark:text-gray-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
      <ReviewForm type="portfolio" onSubmitSuccess={fetchReviews} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Godwin Adakonye John",
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

export default Reviews;