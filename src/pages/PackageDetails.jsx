import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import defaultProPic from "../assets/userphoto.png";
import defaultTourImage from "../assets/tourImage.png";
import Modal from '../components/Modal';

const PackageDetails = () => {

    const details = useLoaderData()
console.log('package details', details)

const {_id, tour_name, image, duration, departure_location, destination, price, departure_date, contact_no, package_details, guide_email, guide_name, guide_photo, booking_count} = details

    return (
      <div className="card bg-base-300 w-11/12 md:w-200 lg:w-250 mx-auto shadow-md shadow-sky-100 mt-20 mb-2">
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
      
          <div className="card-actions justify-between items-center border p-2 rounded-3xl border-green-400">
            <h2 className='border rounded-full bg-green-400 text-black p-2'> <strong>BookCount:</strong> <span className='font-bold'>{booking_count || 0}</span>   </h2>
            <NavLink to={`/booking-form/${_id}`} className="btn btn-primary">Book Now</NavLink>

          </div>
        </div>
      </div>
    );
};

export default PackageDetails;