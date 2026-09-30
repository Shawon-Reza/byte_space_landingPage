import { useNavigate } from 'react-router'
import CourseCard from '../../../components/common/courseCard/CourseCard'
import { courses } from '../../../components/common/courseCard/courses'

const PopularCourses = () => {
    const navigate = useNavigate()
    const popularCourses = courses.slice(0, 6)

    return (
        <main className="grid grid-cols-1 gap-4 px-6 pb-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-14 lg:pb-10 xl:px-21 2xl:px-21">
            {popularCourses.map((course) => (
                <CourseCard
                    key={course.id}
                    course={course}
                    className="mx-auto cursor-pointer shadow-sm"
                    onClick={() => navigate(`/courses/${course.id}`)}
                />
            ))}
        </main>
    )
}

export default PopularCourses
