import React, { useState } from 'react'
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
import HeroIcons from './components/HeroIcons';

import left1 from "../../assets/icons/heroIcons/left1.png"
import left2 from "../../assets/icons/heroIcons/left2.png"
import left3 from "../../assets/icons/heroIcons/left3.png"
import right1 from "../../assets/icons/heroIcons/right1.png"
import right2 from "../../assets/icons/heroIcons/right2.png"
import right3 from "../../assets/icons/heroIcons/right3.png"



const LandingPage = () => {
  const [iconsPaused, setIconsPaused] = useState(false);
  return (
    <div>
      <Navbar />

      {/* ------------ Hero Section ----------- */}
      <section
        

      >
        <HeroSection iconsPaused={iconsPaused} onToggleIcons={() => setIconsPaused((paused) => !paused)} />
          <HeroIcons
            paused={iconsPaused}
            spiralGreen={{ src: left1 }}
            spiralWhite1={{ src: left2 }}
            triangle={{ src: right2 }}
            cylinder={{ src: right1 }}
            ring={{ src: left3 }}
            spiralWhite2={{ src: right3 }}
          />
      </section>


      <LogosMarquee />

      <DiscoverCoursesHeader />

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
