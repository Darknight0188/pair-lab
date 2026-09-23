import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";
import Reveal from "./Reveal";

export default function Courses() {
  return (
    <Reveal id="san-pham">
      <div className="wrap">
        <div className="section-head">
          <h2>Chọn khóa học theo điểm xuất phát của bạn</h2>
          <p>Tất cả khóa đều học online buổi tối, có bản ghi và nhóm hỏi đáp với mentor.</p>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
