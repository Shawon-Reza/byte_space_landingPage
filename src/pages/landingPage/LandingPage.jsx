import React from 'react'
import Navbar from './../../components/layout/Navbar';
import Footer from './../../components/layout/Footer';
import CreatorBanner from './components/CreatorBanner';
import TestimonialsSection from './components/Testimonialssection';
import ProfessionalGrowth from './components/ProfessionalGrowth';
import ManageCoursesSection from './components/ManageCoursesSection';
import leftTop from "../../assets/images/leftTop.png"
import leftBottom from "../../assets/images/leftBottom.png"
import rightBottom from "../../assets/images/rightBottom.png"
import rightTop from "../../assets/images/rightTop.png"
import CategoriesSection from './components/CategoriesSection';
import PopularCourses from './components/PopularCourses';
import DiscoverCoursesHeader from './components/DiscoverCoursesHeader';
import LogosMarquee from './components/LogosMarquee';
import HeroSection from './components/HeroSection';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <HeroSection
      
      />
      <LogosMarquee />

      <DiscoverCoursesHeader
      // data={{
      //   heading: "Discover Your Passion, Build Your Skills",
      //   description: "...",
      //   filters: ["Featured", "Music", "Marketing", "..."],
      // }}
      // visibleCount={16}          // koyta pill dekhabe shuru-e, baki "+ More"-e lukiye thakbe
      // onChange={(filter) => console.log(filter)}
      />

      <PopularCourses />

      <CategoriesSection
        data={{
          heading: "Explore Diverse Learning Paths at Bytespace",
          description: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
          categories: [
            { label: "Design" },
            { label: "Development" },
            { label: "IT & Software" },
            { label: "Business" },
            { label: "Marketing" },
            { label: "Photography" },
          ],
        }}
      />
      <div className='relative'>
        <img src={leftTop} alt="bg" className='absolute top-0 left-0' />
        <img src={leftBottom} alt="bg" className='absolute left-0 bottom-0' />
        <img src={rightBottom} alt="" className='absolute right-0 bottom-0' />
        <img src={rightTop} alt="" className='absolute right-0 top-0' />
        <ProfessionalGrowth />
        <ManageCoursesSection />
      </div>

      <div id='join_as_creator'>
        <CreatorBanner />
      </div>
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default LandingPage