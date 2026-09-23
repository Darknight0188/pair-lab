import type { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review">
      <blockquote>“{review.quote}”</blockquote>
      <p className="result">{review.result}</p>
      <figcaption className="reviewer">
        <span className="avatar" style={{ background: review.avatarColor }} aria-hidden="true">
          {review.initials}
        </span>
        <div>
          <strong>{review.name}</strong>
          <span>{review.subtitle}</span>
        </div>
      </figcaption>
    </figure>
  );
}
