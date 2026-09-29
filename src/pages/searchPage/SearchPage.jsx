import { useMemo, useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CourseSearchBar from './components/CourseSearchBar'
import CourseFilterBar from '../../components/common/courseCard/CourseFilterBar'
import Courses from '../creatorProfile/components/Courses'
import Pagination from '../../components/ui/Pagination'
import { courses } from '../../components/common/courseCard/courses'

const PAGE_SIZE = 9;
const SEARCH_CATEGORIES = [...new Set(courses.map((course) => course.category).filter(Boolean))];
const LEVELS = [...new Set(courses.map((course) => course.level).filter(Boolean))];
const SORT_OPTIONS = ["Most relevant", "Newest", "Highest rated", "Price: low to high"];

const SearchPage = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState({ query: "", category: "Courses" });
    const [filters, setFilters] = useState({ level: null, category: null, sort: SORT_OPTIONS[0] });

    const matchingCourses = useMemo(() => {
        const query = search.query.toLocaleLowerCase();
        const result = courses.filter((course) => {
            const searchableText = search.category === "Creators"
                ? course.instructor?.name
                : [course.title, course.instructor?.name, course.category].filter(Boolean).join(" ");
            return (!query || searchableText?.toLocaleLowerCase().includes(query))
                && (!filters.level || course.level === filters.level)
                && (!filters.category || course.category === filters.category);
        });

        if (filters.sort === "Highest rated") result.sort((a, b) => b.rating - a.rating);
        else if (filters.sort === "Price: low to high") result.sort((a, b) => a.price.amount - b.price.amount);
        else if (filters.sort === "Newest") result.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));
        else if (query) result.sort((a, b) => {
            const score = (course) => course.title.toLocaleLowerCase().startsWith(query) ? 0 : 1;
            return score(a) - score(b);
        });
        return result;
    }, [search, filters]);

    const totalPages = Math.max(1, Math.ceil(matchingCourses.length / PAGE_SIZE));
    const visibleCourses = matchingCourses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    const handleSearch = (value) => {
        setSearch(value);
        setPage(1);
    };

    const handleFilterChange = (value) => {
        setFilters(value);
        setPage(1);
    };

    return (
        <div>
            <Navbar />
            <section >
                <CourseSearchBar categories={["Courses", "Creators"]} onSearch={handleSearch} />
                <CourseFilterBar
                    levels={LEVELS}
                    categories={SEARCH_CATEGORIES}
                    sortOptions={SORT_OPTIONS}
                    onChange={handleFilterChange}
                />
                <Courses courses={visibleCourses} />
                <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
            </section>
            <Footer />
        </div>
    )
}

export default SearchPage
