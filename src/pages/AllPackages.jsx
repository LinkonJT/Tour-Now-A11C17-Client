import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';

const AllPackages = () => {
    const {loading} = useContext(AuthContext)

    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div>
            All packages
        </div>
    );
};

export default AllPackages;