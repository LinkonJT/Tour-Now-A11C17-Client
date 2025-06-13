import React from 'react';
import { NavLink } from 'react-router';
import { motion } from "motion/react" 

const Banner = () => {
  return (
 <div
  className="hero w-full bg-[url('https://i.ibb.co/1GBqBdtD/banner-Pic.jpg')] bg-center md:h-[630px]"
>
  <div className="hero-overlay"></div>
  <div className=" text-center">
  <div className="max-w-md">
    <motion.h1 initial={{scale: 0}}
    animate={{scale: 1, transition: { duration: 2 }}}  className="mb-5 text-black text-xl md:text-5xl font-bold"><motion.span animate={{color: ['#ff5733','#34495e', '#68ff33', '#33caff', '#f3364e' ], transition: { duration: 2 , repeat: Infinity} }}>Your Next Adventure Starts Now!</motion.span></motion.h1>
    <p className="mb-5 text-gray-200">
    Discover incredible destinations and curated tour packages designed for unforgettable experiences. Whether you're dreaming of exotic beaches or cultural immersions, find the perfect getaway with TourNow.
    </p>
    <NavLink to='/all-packages' className="btn btn-primary">Explore All Packages</NavLink>
  </div>
  </div>
</div>
  );
};

export default Banner;




 

/**
 * https://i.ibb.co/1GBqBdtD/banner-Pic.jpg
 */