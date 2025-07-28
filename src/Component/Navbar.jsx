import React, { useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
 

const Navbar = () => {
     const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = (
        <>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-[#CE4E61] font-semibold' : 'hover:text-pink-400'}>Home</NavLink></li>
            <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'text-[#CE4E61] font-semibold' : 'hover:text-pink-400'}>Shop</NavLink></li>
            <li><NavLink to='/product' className={({ isActive }) => isActive ? 'text-[#CE4E61] font-semibold' : 'hover:text-pink-400'}>Product</NavLink></li>
            <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-[#CE4E61] font-semibold' : 'hover:text-pink-400'}>Blog</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-[#CE4E61] font-semibold' : 'hover:text-pink-400'}>Contact us</NavLink></li>
        </>
    );

    return (
        <div
            className={`navbar shadow sticky top-0 z-50 lg:px-25 px-5 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-base-100'
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold flex items-center gap-2 ml-2">
                    <img src="/Frame.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-2xl font-bold text-[#CE4E61] hidden md:block lg:block">Velvet Glow</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4 text-gray-600">
                    <FaSearch className="cursor-pointer" />
                    <FaUser className="cursor-pointer" />
                    <FaShoppingCart className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
