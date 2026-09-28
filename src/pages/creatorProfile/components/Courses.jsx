
// Data structure the parent should send to <CourseCard course={...} />

import CourseCard from "../../../components/common/courseCard/CourseCard";
import { courses } from "../../../components/common/courseCard/courses";


export default function Courses() {
  return (
    <main className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 py-5 lg:py-10">
      {courses.map((course, i) => (
        <CourseCard key={i} course={course} className="mx-auto shadow-sm" />
      ))}
    </main>
  );
}
