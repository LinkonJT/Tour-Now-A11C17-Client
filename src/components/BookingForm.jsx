import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const BookingForm = () => {
  const {user} = useContext(AuthContext)
    const book = useLoaderData();
    console.log("Loaded book data:", book);
  
    const handleBookingForm=(e)=>{
        e.preventDefault();
        const form = e.target
        // const formData = new FormData(form)
        // const result = Object.fromEntries(formData.entries())
        // console.log("BookingForm Data", result);
        // manually add the rest
// result.booking_date = Date.now();
// result.status = "pending";
// result.tour_name = book?.tour_name;
// result.price = book?.price;
// result.buyer_name = user?.displayName;
// result.buyer_email = user?.email;

        const result = {
          packageId: book._id,
  tour_name: book?.tour_name,
  price: book?.price,
  buyer_name: user?.displayName,
  buyer_email: user?.email,
  special_note: form.special_note.value,
//   booking_date: new Date().toISOString(),
  booking_date: Date.now(),
  status: "pending",

  
  guide_name: book?.guide_name,
  guide_contact: book?.contact_no,
  departure_date: book?.departure_date,
  departure_location: book?.departure_location,
  destination: book?.destination,
  image: book?.image
};


/*****post to MongoDB */
        fetch('http://localhost:3000/bookings',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)

            if(data.insertedId){
                toast.success("Booking form data added to mongoDB!")
            }
        }).catch(error => {
        console.log('booking failed', error)
        toast.error("Failed to book the tour.");
      });



    }

    if (!book) return <Spinner></Spinner>;

    return (
         <div className="max-w-xl mx-auto my-8 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Book Tour</h2>
      <form onSubmit={handleBookingForm}>
        <div className="mb-4">
          <label className="block mb-1">Tour Package</label>
          <input className="input input-bordered w-full" name="tour_name" defaultValue={book?.tour_name} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input className="input input-bordered w-full" name="price" defaultValue={book?.price} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Buyer Name</label>
          <input className="input input-bordered w-full" name="buyer_name" defaultValue={user?.displayName} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Buyer Email</label>
          <input className="input input-bordered w-full"  name="buyer_email" defaultValue={user?.email} readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Special Note (Optional)</label>
          <textarea className="textarea textarea-bordered w-full" name="special_note" rows="3" />
        </div>
        <button type="submit" className="btn btn-primary w-full">Book Tour!</button>
      </form>
    </div>
    );
};

export default BookingForm;