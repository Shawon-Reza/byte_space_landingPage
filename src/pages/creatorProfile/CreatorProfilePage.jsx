import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import CreatorProfileHeader from './components/CreatorProfileHeader'
import Courses from './components/Courses'
import CourseFilterBar from '../../components/common/courseCard/CourseFilterBar'
import Pagination from '../../components/ui/Pagination'
import { courses as allCourses, creatorTestCourses } from '../../components/common/courseCard/courses'

const PAGE_SIZE = 9;
const SORT_OPTIONS = ["Most relevant", "Newest", "Highest rated", "Price: low to high"];

const CreatorProfilePage = () => {
    const { id } = useParams();
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({ level: null, category: null, sort: SORT_OPTIONS[0] });

    useEffect(() => {
        setPage(1);
        setFilters({ level: null, category: null, sort: SORT_OPTIONS[0] });
    }, [id]);

    const creatorBaseCourses = useMemo(
        () => {
            const availableCourses = id === "purepearl-studio"
                ? [...allCourses, ...creatorTestCourses]
                : allCourses;
            return availableCourses.filter((course) => !id || course.instructor?.href === `/creators/${id}`);
        },
        [id],
    );

    const creatorCourses = useMemo(() => {
        const filtered = creatorBaseCourses.filter((course) => (!filters.level || course.level === filters.level)
            && (!filters.category || course.category === filters.category));

        if (filters.sort === "Highest rated") filtered.sort((a, b) => b.rating - a.rating);
        else if (filters.sort === "Price: low to high") filtered.sort((a, b) => a.price.amount - b.price.amount);
        else if (filters.sort === "Newest") filtered.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
        return filtered;
    }, [creatorBaseCourses, filters]);

    const levels = [...new Set(creatorBaseCourses.map((course) => course.level).filter(Boolean))];
    const categories = [...new Set(creatorBaseCourses.map((course) => course.category).filter(Boolean))];
    const totalPages = Math.max(1, Math.ceil(creatorCourses.length / PAGE_SIZE));
    const visibleCourses = creatorCourses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const handleFilterChange = (value) => {
        setFilters(value);
        setPage(1);
    };

    return (
        <div>
            <Navbar />
            <CreatorProfileHeader />
            <CourseFilterBar
                key={id}
                levels={levels}
                categories={categories}
                sortOptions={SORT_OPTIONS}
                onChange={handleFilterChange}
            />
            <Courses courses={visibleCourses} />
            <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />

            <Footer />
        </div>
    )
}

export default CreatorProfilePage
