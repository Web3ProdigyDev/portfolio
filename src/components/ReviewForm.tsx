import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../lib/sanityClient";
import confetti from "canvas-confetti";

interface ReviewFormProps {
  type: "portfolio" | "project";
  onSubmitSuccess: () => void;
}

const ReviewForm = ({ type, onSubmitSuccess }: ReviewFormProps) => {
  const { slug } = useParams<{ slug: string }>();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Trigger confetti and handle success message duration
  useEffect(() => {
    if (success) {
      // Fire confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#3B82F6", "#F59E0B"], // Tailwind green-500, blue-500, yellow-500
      });

      // Clear success message and trigger onSubmitSuccess after 8 seconds
      const timer = setTimeout(() => {
        setSuccess(false);
        onSubmitSuccess();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [success, onSubmitSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    // Rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      let reviewData: any = {
        _type: type === "portfolio" ? "portfolioReview" : "projectReview",
        userName,
        userEmail,
        rating,
        comment,
        createdAt: new Date().toISOString(),
        approved: false,
      };

      if (type === "project") {
        if (!slug) {
          setError("Project not specified");
          setSubmitting(false);
          return;
        }
        const project = await client.fetch(
          `*[_type == "project" && slug.current == $slug][0] { _id }`,
          { slug }
        );
        if (!project) {
          setError("Project not found");
          setSubmitting(false);
          return;
        }
        reviewData.project = { _type: "reference", _ref: project._id };
      }

      await client.create(reviewData);
      setSuccess(true);
      setUserName("");
      setUserEmail("");
      setRating(1);
      setComment("");
    } catch (err: any) {
      setError(`Failed to submit review: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-light dark:bg-dark rounded-lg shadow-md"
      data-aos="fade-up"
    >
      <h3 className="text-xl font-semibold text-primary mb-4 dark:text-primary">
        Submit a {type === "portfolio" ? "Portfolio" : "Project"} Review
      </h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && (
        <p className="text-2xl font-bold text-green-500 mb-4 animate-pulse">
          Thanks For Your Review! Please Wait for Approval.
        </p>
      )}
      <div className="mb-4">
        <label className="block text-sm text-gray-400 dark:text-gray-400">
          Name
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 dark:text-light"
            required
            minLength={2}
            maxLength={50}
            disabled={submitting}
            placeholder="Your name"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-400 dark:text-gray-400">
          Email
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 dark:text-light"
            required
            disabled={submitting}
            placeholder="Your email"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-400 dark:text-gray-400">
          Rating (1–5)
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 dark:text-light"
            disabled={submitting}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm text-gray-400 dark:text-gray-400">
          Comment
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-800 dark:text-light"
            rows={4}
            required
            minLength={10}
            maxLength={500}
            disabled={submitting}
            placeholder="Write your review here..."
          />
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:bg-gray-400 transition"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;