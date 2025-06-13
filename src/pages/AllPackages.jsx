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
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={pkg.image || defaultTourImage}
      alt={pkg.tour_name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{pkg.tour_name} </h2>
    <p>Departure Date: {pkg.departure_date} </p>
    <p>Duration: {pkg.duration} </p>
    <p>Price: {pkg.price} </p>

    <h2 className='text-md font-bold text-center'>Tour Guide</h2>
    <p>Name: {user?.displayName || ''} </p>
     <img
          src={user.photoURL || defaultProPic}
          alt="Profile"
          title={user.displayName || "No Name"}
          className="w-24 h-24 rounded-full border"
        />

    <div className="card-actions justify-end">
      <NavLink to={user? '/pkg-details': '/signin'} className="btn btn-primary">View Details</NavLink>
    </div>
  </div>
</div>
    ))
}

           
        </div>
    );
};

export default AllPackages;