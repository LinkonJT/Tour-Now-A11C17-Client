import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import defaultProPic from "../assets/userphoto.png";
import defaultTourImage from "../assets/tourImage.png";

const PackageDetails = () => {

    const details = useLoaderData()
console.log('package details', details)

const {tour_name, image, duration, departure_location, destination, price, departure_date, contact_no, package_details, guide_email, guide_name, guide_photo} = details

    return (
      <div className="card bg-base-100 w-11/12 md:w-200 lg:w-250 mx-auto shadow-xl shadow-amber-100 my-4">
        <figure>
          <img
          className='w-80 h-50 md:w-150 md:h-80 rounded-2xl pt-2'
            src={image || defaultTourImage}
            alt={tour_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{tour_name} </h2>
          <p className='text-md md:text-lg'>Description: {package_details} </p>
          <p>Departure Date: {departure_date} </p>
          <p>Departure location: {departure_location} </p>
          <p>Departure Destination: {destination} </p>
          <p>Duration: {duration} </p>
          
          <p>Price: {price} </p>
          
      
          <h2 className='text-md font-bold text-center'>Tour Guide</h2>
          <p>Name: {guide_name || 'No Name'} </p>
          <p>Contact: {contact_no} </p>
          <p>Email: {guide_email || 'not provided'} </p>
           <img
                src={guide_photo || defaultProPic}
                alt="Profile"
                title={guide_name || "No Name"}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border"
              />
      
          <div className="card-actions justify-end">
            <NavLink className="btn btn-primary">Book Now</NavLink>
          </div>
        </div>
      </div>
    );
};

export default PackageDetails;