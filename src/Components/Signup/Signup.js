import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const goTologin = () => {
        navigate('/login')
    }
    return (
        <div className='h-screen w-full bg-[#0a192f] px-4'>
            <form className='max-w-[400px] w-full mx-auto bg-teal-400 p-4 rounded-xl'>
                <h2 className='text-4xl font-bold text-center py-6 '>Signup</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2 rounded-xl' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Name</label>
                    <input className='border p-2 rounded-xl' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>E-Mail</label>
                    <input className='border p-2 rounded-xl' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2 rounded-xl' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-pink-700 hover:bg-indigo-500 text-white rounded-xl'>Signup</button>
                <div className='flex justify-center text-xl'>
                    <button onClick={goTologin} className='hover:bg-red-700 hover:rounded-xl hover:text-white hover:p-3'>Already have an account?</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;