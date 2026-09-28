import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CourseSearchBar from './components/CourseSearchBar'
import CourseFilterBar from '../../components/common/courseCard/CourseFilterBar'
import Courses from '../creatorProfile/components/Courses'
import Pagination from '../../components/ui/Pagination'
import { useState } from 'react'

const SearchPage = () => {
    const [page, setPage] = useState(1);
    return (
        <div>
            <Navbar />
            <section >
                <CourseSearchBar />
                <CourseFilterBar />
                <Courses />
                <Pagination totalPages={12} page={page} onPageChange={setPage} />
            </section>
            <Footer />
        </div>
    )
}

export default SearchPage