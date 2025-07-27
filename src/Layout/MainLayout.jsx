import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <main className='flex-grow'>
                <div className='max-w-7xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;