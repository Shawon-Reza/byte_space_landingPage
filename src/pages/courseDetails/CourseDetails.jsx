import React, { useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import CourseDetailsHeader from './components/CourseDetailsHeader'
import CourseDetailsAbout from './components/CourseDetailsAbout'
import CourseDetailsTabs from './components/CourseDetailsTabs'
import CourseDetailsLessons from './components/CourseDetailsLessons'
import CourseDetailsReviews from './components/CourseDetailsReviews'

const TABS = ["About", "Lessons", "Reviews"]

const CourseDetails = () => {
    // Tab selection lives here, outside CourseDetailsTabs
    const [activeTab, setActiveTab] = useState(TABS[0])

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div>
            <Navbar />
            <CourseDetailsHeader />
            {/*------------- details ----------- */}

            <section>
                <CourseDetailsTabs
                    tabs={TABS}
                    value={activeTab}
                    onChange={handleTabChange}
                />

                {activeTab === "About" && <CourseDetailsAbout />}
                {activeTab === "Lessons" && <CourseDetailsLessons />}
                {activeTab === "Reviews" && <CourseDetailsReviews />}
            </section>

            <Footer />
        </div>
    )
}

export default CourseDetails