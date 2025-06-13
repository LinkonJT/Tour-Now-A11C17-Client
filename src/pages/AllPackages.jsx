import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';
import defaultTourImage from "../assets/tourImage.png";

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
        <div className="hero bg-base-200">
             <img
      src={pkg.image || defaultTourImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
  <div className="hero-content flex-col lg:flex-row">
   
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    ))
}

           
        </div>
    );
};

export default AllPackages;