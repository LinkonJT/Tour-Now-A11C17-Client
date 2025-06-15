import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const ManageMyPackages = () => {
  const { user, loading } = useContext(AuthContext);
  const [myPackages, setMyPackages] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/manage-my-packages/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyPackages(data);
          console.log("My packages fetched:", data);
        })
        .catch((error) => {
          toast.error("Error fetching my packages: " + error.message);
        });
    }
  }, [user]);

  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="overflow-x-auto w-full md:w-11/12 mx-auto my-2">
      {myPackages.length === 0 ? (
        <p className="text-center">No packages created.</p>
      ) : (
        <table className="table table-xs md:table-md">
          <thead>
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Departure Date</th>
              <th className="hidden md:block">Departure Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myPackages.map((pkg, index) => (
              <tr key={pkg._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={pkg.image} alt="Package" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{pkg.tour_name}</div>
                    </div>
                  </div>
                </td>
                <td>{pkg.departure_date}</td>
                <td className="hidden md:block whitespace-normal break-words text-xs md:text-sm">{pkg.departure_location}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">Edit</button>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageMyPackages;
