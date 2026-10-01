import { useNavigate } from "react-router";
import CourseCard from "../../../components/common/courseCard/CourseCard";
import { courses } from "../../../components/common/courseCard/courses";

export default function Courses({ courses: courseList = courses } = {}) {
  const navigate = useNavigate();

  return (
    <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 pb-5 lg:pb-10">
      {courseList.map((course, i) => (
        <CourseCard
          key={i}
          course={course}
          className="mx-auto shadow-sm cursor-pointer hover:scale-102 transition-all transform duration-700 ease-in-out"
          onClick={() => {
            navigate(`/courses/${course.id}`);
            console.log("course.id:", course.id);
          }}
        />
      ))}
    </main>
  );
}
