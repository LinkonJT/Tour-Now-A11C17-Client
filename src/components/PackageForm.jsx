import React from 'react';
import defaultProPic from "../assets/userphoto.png";
import { toast } from 'react-toastify';

const PackageForm = ({user} ) => {

  const handleAddPackage = (e)=>{

e.preventDefault()
const form = e.target;
const formData = new FormData(form)
const result = Object.fromEntries(formData.entries())
 console.log("Form Data Submitted:", result);

 /**post to mongoDB */
 fetch('http://localhost:3000/all-packages',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(result)
 })
 .then(res=>res.json())
 .then((data)=>{
    console.log("Data fetched from server:", data)
    if(data.insertedId){
  toast.success("TourPackage form data added in the mongoDB!")

      }
 })

  }
    
    return (
<form onSubmit={handleAddPackage} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block mb-1">Tour Name</label>
    <input type="text" name="tour_name" placeholder="Tour Name" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Image URL</label>
    <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Duration</label>
    <input type="text" name="duration" placeholder="Duration (e.g., 3 Days 2 Nights)" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Departure Location</label>
    <input type="text" name="departure_location" placeholder="Departure Location" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Destination</label>
    <input type="text" name="destination" placeholder="Destination" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Price</label>
    <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Departure Date</label>
    <input type="date" name="departure_date" className="input input-bordered w-full" required />
  </div>
  <div>
    <label className="block mb-1">Contact No.</label>
    <input type="text" name="contact_no" placeholder="Contact No." className="input input-bordered w-full" required />
  </div>
  <div className="md:col-span-2">
    <label className="block mb-1">Package Details</label>
    <textarea name="package_details" placeholder="Package Details" className="textarea textarea-bordered w-full" required></textarea>
  </div>

  <div className="md:col-span-2">
    <h3 className="text-lg font-semibold mt-4 mb-2">Tour Guide Info</h3>
  </div>

  <div className="md:col-span-2 flex justify-start items-center">
    <img
      src={user.photoURL || defaultProPic}
      alt="Profile"
      title={user.displayName || "No Name"}
      className="w-24 h-24 rounded-full border"
    />
  </div>

  <div>
    <label className="block mb-1">Guide Name</label>
    <input type="text" name="guide_name" value={user?.displayName || ''} readOnly className="input input-bordered w-full" />
  </div>
  <div>
    <label className="block mb-1">Guide Email</label>
    <input type="email" name="guide_email" value={user?.email || ''} readOnly className="input input-bordered w-full" />
  </div>
  

  <button type="submit" className="btn btn-primary col-span-1 md:col-span-2">Submit</button>
</form>

    );
};

export default PackageForm;