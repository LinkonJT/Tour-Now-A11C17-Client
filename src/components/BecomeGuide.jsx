import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { NavLink } from 'react-router';

const BecomeGuide = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className="w-11/12 mx-auto">
                      <section className=" p-8 my-10 rounded-2xl bg-base-300 shadow-md shadow-sky-200">
  <div className="flex flex-col md:flex-row items-center gap-6">
    
    <div>
      <h3 className="text-2xl font-bold mb-2">Become a Local Guide</h3>
      <p className="text-yellow-600 leading-relaxed">
        Are you a local expert or passionate about your city? Join us as a guide, create your own packages, and earn while sharing your knowledge with travelers.
      </p>
      <NavLink to={user? '/add-package' : '/signin'} className="btn  btn-primary mt-3">Start Guiding</NavLink>
    </div>
  </div>
</section>
        </div>
    );
};

export default BecomeGuide;