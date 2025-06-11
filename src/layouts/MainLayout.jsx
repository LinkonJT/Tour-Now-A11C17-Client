import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div data-theme='abyss' className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <main className='flex-grow mx-auto'>
               <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;