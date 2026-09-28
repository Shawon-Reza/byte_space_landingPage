import React from 'react'
import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import CreatorProfileHeader from './components/CreatorProfileHeader'
import Courses from './components/Courses'
import CourseFilterBar from '../../components/common/courseCard/CourseFilterBar'

const CreatorProfilePage = () => {
    return (
        <div>
            <Navbar />
            <CreatorProfileHeader />
            <CourseFilterBar />

            <Courses />

            <Footer />
        </div>
    )
}

export default CreatorProfilePage