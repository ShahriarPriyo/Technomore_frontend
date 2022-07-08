import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='fw-full h-[90px] bg-[#0a192f]'>
                <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center w-full py-3'>
                    <div className='text-white text-3xl header'>Technomore</div>
                    <div className='text-[#FFFFFF] flex mx-3 px-3'>
                        <Link to='/' className='px-4 hover:bg-pink-700 hover:rounded-md' >Home</Link>
                        <Link to='/about' className='px-4 hover:bg-pink-700 hover:rounded-md'>About</Link>
                        <Link to='/services' className='px-4 hover:bg-pink-700 hover:rounded-md'>Services</Link>
                        <Link to='/blogs' className='px-4 hover:bg-pink-700 hover:rounded-md'>Blogs</Link>
                        <button className='bg-pink-600 p-1 rounded-xl mx-4 text-white hover:bg-red-700'>Login</button>
                    </div>
                </div>


            </div>

        </nav>


    );
};

export default Navbar;