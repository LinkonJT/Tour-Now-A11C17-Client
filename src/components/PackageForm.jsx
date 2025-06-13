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
  toast.success("data added in the MongoDB successfully!")

      }
 })

  }
    
    return (
           <form onSubmit={handleAddPackage} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="tour_name" placeholder="Tour Name" className="input input-bordered" required />
        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
        <input type="text" name="duration" placeholder="Duration (e.g., 3 Days 2 Nights)" className="input input-bordered"  required />
        <input type="text" name="departure_location" placeholder="Departure Location" className="input input-bordered"  required />
        <input type="text" name="destination" placeholder="Destination" className="input input-bordered"  required />
        <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
        <input type="date" name="departure_date" className="input input-bordered"  required />
        <input type="text" name="contact_no" placeholder="Contact No." className="input input-bordered"  required />
        <textarea name="package_details" placeholder="Package Details" className="textarea textarea-bordered col-span-1 md:col-span-2"  required></textarea>

        {/* Hidden or readonly guide info from Firebase */}
        <input type="text" name="guide_name" value={user?.displayName || ''}  readOnly className="input input-bordered" />
        
        <input type="email" name="guide_email" value={user?.email || ''} readOnly className="input input-bordered" />
   <div>
         
             <img
                src={user.photoURL || defaultProPic}
                alt="Profile"
                title={user.displayName || "No Name"}
                className="w-50 rounded-full border"
              />
   </div>

        <button type="submit" className="btn btn-primary col-span-1 md:col-span-2">Submit</button>
      </form>
    );
};

export default PackageForm;