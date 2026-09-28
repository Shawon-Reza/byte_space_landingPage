import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import SearchPageHeader from './components/SearchPageHeader'

const SearchPage = () => {
    return (
        <div>
            <Navbar />
        <SearchPageHeader />
            <Footer />
        </div>
    )
}

export default SearchPage