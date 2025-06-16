import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Spinner from '../components/Spinner';

const MainLayout = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Spinner></Spinner>
    }
    return (
        <div  className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-grow'>
               <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;