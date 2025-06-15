import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';
import defaultProPic from "../assets/userphoto.png";
import defaultTourImage from "../assets/tourImage.png";
import { NavLink } from 'react-router';

const AllPackages = () => {
    const {loading, user} = useContext(AuthContext)

    const [packages, setPackages] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/all-packages')
     .then(res=>res.json())
     .then ((data)=>{
        setPackages(data)
        console.log("Data fetched from all-packages server", data);
     })
},[])

    if(loading){
        return <Spinner></Spinner>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-4'>
{
    packages.map((pkg)=>(
<div className="card bg-base-100 w-11/12 mx-auto shadow-xl shadow-amber-100">
  <figure>
    <img
    className='w-80 h-50 md:w-100 md:h-65 rounded-2xl pt-2'
      src={pkg.image || defaultTourImage}
      alt={pkg.tour_name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{pkg.tour_name} </h2>
    <p>Departure Date: {pkg.departure_date} </p>
    <p>Duration: {pkg.duration} </p>
    <p>Price: {pkg.price} </p>

    <h2 className='text-md font-bold text-center'>Tour Guide</h2>
    <p>Name: {pkg.guide_name || 'No Name'} </p>
     <img
          src={pkg.guide_photo || defaultProPic}
          alt="Profile"
          title={pkg.guide_name || "No Name"}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border"
        />

    <div className="card-actions justify-end">
      <NavLink to={user? `/pkg-details/${pkg._id}`: '/signin'} className="btn btn-primary">View Details</NavLink>
    </div>
  </div>
</div>
    ))
}

           
        </div>
    );
};

export default AllPackages;