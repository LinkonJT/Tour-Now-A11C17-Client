import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext)

if(loading){
    return <Spinner></Spinner>
}

if(user && user.email){
    return children

}

    return (
   <Navigate to='/' replace></Navigate>
    );
};

export default PrivateRoute;