import React from 'react';
import { NavLink } from 'react-router';

const Banner = () => {
    return (
 <div
  className="hero w-full bg-[url('https://i.ibb.co/1GBqBdtD/banner-Pic.jpg')] bg-center md:h-[630px]"
>
  <div className="hero-overlay"></div>
  <div className=" text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-black text-xl md:text-5xl font-bold">Your Next Adventure Starts Now!</h1>
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
 * 
 https://i.ibb.co/1GBqBdtD/banner-Pic.jpg
 */