import React, { useEffect, useState } from "react";
import defaultTourImage from "../assets/tourImage.png";
import defaultProPic from "../assets/userphoto.png";
import { NavLink } from "react-router";

const MostPopularPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/most-popular-packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch most popular packages", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading popular packages...</p>;

  return (
    <div className="my-6 w-11/12 mx-auto">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4">Top-3 Popular Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="card bg-base-300 shadow-md shadow-sky-200 p-4 rounded-lg">
            <figure>
              <img
                src={pkg.image || defaultTourImage}
                alt={pkg.tour_name}
                className="w-full h-48 object-cover rounded-lg"
              />
            </figure>
            <div className="card-body p-2">
              <h3 className="card-title text-lg font-bold">{pkg.tour_name}</h3>
              <p className="text-sm text-gray-600 truncate">{pkg.package_details}</p>
              <p className="mt-1 font-semibold">Price: {pkg.price}</p>
              <NavLink
                to={`/pkg-details/${pkg._id}`}
                className="btn btn-primary mt-3 text-center"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularPackages;
