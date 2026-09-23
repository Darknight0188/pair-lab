import { reviews } from "@/data/reviews";
import Reveal from "./Reveal";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <Reveal id="phan-hoi" className="reviews">
      <div className="wrap">
        <div className="section-head">
          <h2>Học viên nói gì sau khóa học</h2>
          <p>Trích từ khảo sát cuối khóa, được học viên đồng ý chia sẻ.</p>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
