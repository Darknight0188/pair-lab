import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className={`course${course.featured ? " featured" : ""}`}>
      {course.badge && <span className="badge">{course.badge}</span>}
      <div className="course-level">
        <span className="bars" data-level={course.levelNumber} aria-hidden="true">
          <b />
          <b />
          <b />
        </span>
        {course.level}
      </div>
      <h3>{course.title}</h3>
      <p className="course-desc">{course.description}</p>
      <ul className="tools">
        {course.tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <div className="course-foot-wrap">
        <div className="course-foot">
          <span className="course-meta">{course.duration}</span>
          <span className="price">{course.price}</span>
        </div>
        <a href="#lien-he" className="course-link">
          {course.ctaLabel}
        </a>
      </div>
    </article>
  );
}
