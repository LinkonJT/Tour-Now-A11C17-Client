import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const BookingForm = () => {

    const book = useLoaderData();
    const {user} = useContext(AuthContext)


    return (
         <div className="max-w-xl mx-auto my-8 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Book Tour: </h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Tour Package</label>
          <input className="input input-bordered w-full" disabled />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Price</label>
          <input className="input input-bordered w-full"  disabled />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Buyer Name</label>
          <input className="input input-bordered w-full"  disabled />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Buyer Email</label>
          <input className="input input-bordered w-full" disabled />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Special Note (Optional)</label>
          <textarea className="textarea textarea-bordered w-full" name="specialNote" rows="3" />
        </div>
        <button type="submit" className="btn btn-primary w-full">Book Tour!</button>
      </form>
    </div>
    );
};

export default BookingForm;