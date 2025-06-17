import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';
import defaultProPic from "../assets/userphoto.png";
import defaultTourImage from "../assets/tourImage.png";
import { NavLink } from 'react-router';

const AllPackages = () => {
    const {loading, user} = useContext(AuthContext);
    const [packages, setPackages] = useState([]);
     const [searchText, setSearchText] = useState('');
     const [isLoading, setIsLoading] = useState(true)


       const fetchPackages = (search = '') => {
    fetch(`https://tour-now-server.vercel.app/all-packages?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setPackages(data);
        setIsLoading(false)
        console.log("Fetched Packages:", data);
      });
  };

// useEffect(()=>{
//     fetch('https://tour-now-server.vercel.app/all-packages')
//      .then(res=>res.json())
//      .then ((data)=>{
//         setPackages(data)
//         console.log("Data fetched from all-packages server", data);
//      })
// },[])



  useEffect(() => {
    fetchPackages();
  }, []);

  //useEffect to auto-fetch on clear
  useEffect(() => {
    if (searchText === '') {
      fetchPackages('');
    }
  }, [searchText]);

    const handleSearch = (e) => {
    e.preventDefault();
    fetchPackages(searchText);
  };


if (loading || isLoading) return <Spinner></Spinner>


    return (

      <div className='w-11/12 mx-auto my-4'>
 <form onSubmit={handleSearch} className="mb-6 flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Search tour name or destination..."
          className="input input-bordered w-full max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-4'>
{
   isLoading ? (
    <Spinner />
  ) : packages.length > 0 ? packages.map((pkg)=>(
<div className="card bg-base-100 w-11/12 mx-auto shadow-md shadow-amber-100">
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
    )) : (
            <p className='text-center text-gray-500 col-span-3'>No packages found.</p>
          )
}

           
        </div>
 

      </div>
         );
    
};

export default AllPackages;