import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const goToSignup = () => {
        navigate('/signup')
    }
    return (
        <div className='h-screen w-full bg-[#0a192f] px-4'>
            <form className='max-w-[400px] w-full mx-auto bg-teal-400 p-4 rounded-xl'>
                <h2 className='text-4xl font-bold text-center py-6 '>Login</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2 rounded-xl' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2 rounded-xl' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-pink-700 hover:bg-indigo-500 text-white rounded-xl'>Sign In</button>
                <div className='flex justify-center text-xl'>
                    <button onClick={goToSignup} className='hover:bg-red-700 hover:rounded-xl hover:text-white hover:p-3'>Create an account</button>
                </div>
            </form>
        </div>
    );
};

export default Login;