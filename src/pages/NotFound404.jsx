import Lottie from 'lottie-react';
import React from 'react';
import { NavLink } from 'react-router';
import notFoundLottie from '../assets/lottie/NotFound404.json'

const NotFound404 = () => {
    return (
        <div className='mx-auto w-11/12 text-center'>
            <Lottie className='w-120 mx-auto' animationData={notFoundLottie} loop={true}></Lottie>
            <p> "Lost your way? Even the best explorers sometimes wander off the map."</p>
            <NavLink to={'/'} className="btn"> Back to Home</NavLink>
        </div>
    );
};

export default NotFound404;