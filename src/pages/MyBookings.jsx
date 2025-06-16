import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';


const MyBookings = () => {


const {user, loading} = useContext(AuthContext)
const [bookings, setBookings] = useState([])
const [isLoading, setIsLoading] = useState(true)

/***fetch loggedin user */

useEffect(()=>{
    if(user?.email){
        fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then((res)=>res.json())
        .then((data)=>{
            setBookings(data)
            setIsLoading(false)
            console.log("Fetched bookings:", data);
        }).catch((error) => {
          console.error("Error fetching bookings:", error);
          toast.error("Failed to load bookings");
          setIsLoading(false);
        });
    }
},[user])

const handleConfirm = (id)=>{
    fetch (`http://localhost:3000/bookings/${id}`,{
        method: "PATCH",
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({status: "completed"})
    })
    .then((res)=>res.json())
    .then(data=>{
        if (data.modifiedCount > 0){
            toast.success("Booking Confirmed and marked Completed in DB");

            setBookings(prev =>
                prev.map(b =>b._id === id ? { ...b, status: "completed" } : b ));
        }
    }).catch((error) => {
          console.error("Error Updating bookings:", error);
          toast.error("Failed to update booking status");
          setIsLoading(false);
        });
}

 if (loading || isLoading) return <Spinner></Spinner>

    return (
  <div >
    {/* <h1 className='text-center font-bold text-2xl my-4'>Confirm Your Bookings!!</h1> */}
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-4 '>
    
{
    bookings.length === 0 ? (
      <p className="text-center text-gray-500 mx-auto">No bookings found.</p>
    ) : (
      bookings.map((booking) => (
    
        <div key={booking._id} className="card bg-base-100 mt-2 image-full w-90 md:w-96 mx-auto shadow-md shadow-amber-100">
            
          <figure>
            <img
              src={booking.image}
              alt="Tour"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tour Name: {booking.tour_name}</h2>
            <p><strong>Guide:</strong> {booking.guide_name || 'N/A'}, {booking.guide_contact || 'N/A'}</p>
            <p><strong>Departure Date:</strong> {booking.departure_date || 'N/A'}</p>
            <p><strong>Departure Location:</strong> {booking.departure_location || 'N/A'}</p>
            <p><strong>Destination:</strong> {booking.destination || 'N/A'}</p>
            <p><strong>Special Note:</strong> {booking.special_note || '—'}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            {booking.status !== 'completed' && (
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleConfirm(booking._id)}
                  className="btn btn-primary btn-sm"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
       
      ))
    )
}
   </div>
  </div>
    );
};

export default MyBookings;