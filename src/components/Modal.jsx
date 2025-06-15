import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const Modal = ({ details }) => {
//   const {
//     tour_name,
//     image,
//     duration,
//     departure_location,
//     destination,
//     price,
//     departure_date,
//     contact_no,
//     package_details,
//     guide_email,
//     guide_name,
//     guide_photo,
//   } = details;

  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}>
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
