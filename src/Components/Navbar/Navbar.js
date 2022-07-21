import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { isExpired, decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom'

const Navbar = () => {
    const mycookie = Cookies.get('macaron');

    const myDecodedToken = decodeToken(mycookie);
    const isMyTokenExpired = isExpired(mycookie);

    return (
        <nav>
            <div className='fw-full h-[90px] bg-[#0a192f]'>
                <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center w-full py-3'>
                    <div className='text-white text-3xl header'>Technomore</div>
                    <div className='text-[#FFFFFF] flex mx-3 px-3'>
                        <NavLink to='/' className='px-4 hover:bg-pink-700 hover:rounded-md' >Home</NavLink>
                        <NavLink to='/about' className='px-4 hover:bg-pink-700 hover:rounded-md'>About</NavLink>
                        {/* <NavLink to='/services' className='px-4 hover:bg-pink-700 hover:rounded-md'>Services</NavLink> */}
                        {/* <NavLink to='/blogs' className='px-4 hover:bg-pink-700 hover:rounded-md'>Blogs</NavLink> */}
                        <NavLink to='/demos' className='px-4 hover:bg-pink-700 hover:rounded-md'>Demos</NavLink>

                        {mycookie && myDecodedToken && isMyTokenExpired === false && (
                            <NavLink to='/profile' className='px-4 hover:bg-pink-700 hover:rounded-md'>Profile</NavLink>
                        )}
                        {mycookie && myDecodedToken && isMyTokenExpired === false && (
                            <NavLink to='/createblog' className='px-4 hover:bg-pink-700 hover:rounded-md'>Create Blog</NavLink>
                        )}

                        {mycookie && myDecodedToken && isMyTokenExpired === false ? (
                            <NavLink to='/signout' className='px-4 hover:bg-pink-700 hover:rounded-md'>Signout</NavLink>
                        ) : (
                            <NavLink to='/login' className='px-4 hover:bg-pink-700 hover:rounded-md'>Login</NavLink>
                        )}

                        {/* <NavLink to='/signup' className='px-4 hover:bg-pink-700 hover:rounded-md'>Signup</NavLink> */}
                        {mycookie && myDecodedToken && isMyTokenExpired === false && (
                            <button className='bg-blue-700 p-1 rounded-xl mx-4 text-white hover:bg-red-700'>{myDecodedToken.username}</button>
                        )}

                    </div>
                </div>


            </div>

        </nav>


    );
};

export default Navbar;