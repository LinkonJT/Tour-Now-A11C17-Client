import React from 'react';
import logo from '../assets/TourNow-Logo.png'; 

const Navbar = () => {
  return (
 <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-10 rounded-full' src={logo} alt="" /> TourNow</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>All packages</a></li>
      <li><a>About Us</a></li>
      <li>
        <details>
          <summary>propic</summary>
          <ul className="p-2">
            <li><a>Add Package</a></li>
            <li><a>Manage My Packages</a></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">SignIn</a>
    <a className="btn">Sign Out</a>
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