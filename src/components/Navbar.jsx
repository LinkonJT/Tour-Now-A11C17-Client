import React, { useContext } from "react";
import logo from "../assets/TourNow-Logo.png";
import { NavLink, useNavigate } from "react-router";
import AuthProvider from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthContext";
import defaultProPic from "../assets/userphoto.png";




const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = (e) => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, LogOut!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          signOutUser().then(() =>
            Swal.fire({
              title: "SignOut successful",
              // text: "Your file has been deleted.",
              icon: "success",
            })
          )
        }
      })
      .catch((error) => {
        console.error("LogOut error:", error.message);
        Swal.fire({
          icon: "error",
          title: "LogOut failed",
          text: error.message,
        });
      });
  };


 if(loading){
    return null
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-10 rounded-full" src={logo} alt="" /> TourNow
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-packages">All Packages</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">

        {
          user? (<><div>
            <NavLink to="/my-bookings">My Bookings</NavLink>
          </div>
          <div>
            <details>
           <img
                  className="w-6 user-avatar md:w-8 rounded-full border"
                  src={user.photoURL || defaultProPic}
                  alt=""
                  title={user.displayName || "no name"}
                  style={{ cursor: "pointer" }}
                />
              <ul className="p-2 menu menu-horizontal">
                <li>
                  <NavLink to="/add-package">Add Package</NavLink>
                </li>
                <li>
                  <NavLink to="/manage-my-Packages">Manage My Packages</NavLink>
                </li>
              </ul>
            </details>
          </div>
          <button onClick={handleSignOut} className="btn">Sign Out</button></>) :
          (<> <NavLink to="/signin" className="btn">
          SignIn
        </NavLink></>)
        }
       
       
        
      </div>
    </div>
  );
};

export default Navbar;

/**
 * 
 Site Name + Logo
Home
All Packages
About Us (Make an About Page as you like)
Login Button



If logged in: 
Site Name + Logo
Home
All Packages
My Bookings (PRIVATE)
About Us (Make an About Page as you like)
Profile Image + Dropdown
Add Package (PRIVATE)
Manage My Packages (PRIVATE)
Logout

 */
