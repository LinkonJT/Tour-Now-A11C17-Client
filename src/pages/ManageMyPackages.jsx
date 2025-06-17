import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageMyPackages = () => {
  const { user, loading } = useContext(AuthContext);
  const [myPackages, setMyPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  console.log('token from firebase', user.accessToken)

const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete!",
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://tour-now-server.vercel.app/manage-my-packages/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                     "Authorization": `Bearer ${user.accessToken}`,
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success("Package removed from UI and MongoDB");
                        const remainingPackages = myPackages.filter((pkg) => pkg._id !== id);
                        setMyPackages(remainingPackages);
                        setIsLoading(false)
                    }
                    console.log("remaining Data after Delete:", data);
                });
        }
    }).catch((error) => {
            console.error("Delete error:", error.message);
            Swal.fire({
              icon: "error",
              title: "Remove failed",
              text: error.message,
            });
          });
}

  useEffect(() => {
    if (user?.email && user?.accessToken) {
      fetch(`https://tour-now-server.vercel.app/manage-my-packages/${user.email}`,{
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${user.accessToken}`,
  },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyPackages(data);
           setIsLoading(false);
          console.log("My packages fetched:", data);
        })
        .catch((error) => {
          toast.error("Error fetching my packages: " + error.message);
        });
    }
  }, [user]);

  if (loading || isLoading) {
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
                  <Link to={`/update-package/${pkg._id}`}  className="btn btn-ghost btn-xs">Edit</Link>
                  <button onClick={ ()=>handleDelete(pkg._id)} className="btn btn-ghost btn-xs">Delete</button>
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
