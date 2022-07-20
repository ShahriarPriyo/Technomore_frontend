import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const axios = require('axios').default;

const Signup = () => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    // const [confirmPwd, setConfirmPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const goTologin = () => {
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }


        const data = {
            name: fullname,
            username: username,
            email: email,
            password: pwd,
        };

        await axios
            .post('http://localhost:3001/api/v1/signup/', data)
            .then((response) => {
                console.log(response?.data);
                const accessToken = response?.data.token;
                localStorage.setItem('mytoken', accessToken);
                Cookies.set('macaron', accessToken, {
                    secure: true,
                    sameSite: 'strict',
                    expires: 7
                });
                navigate('/');
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                setErrMsg(error);
            });
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div className='h-screen w-full bg-[#0a192f] px-4'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-teal-400 p-4 rounded-xl'>
                <h2 className='text-4xl font-bold text-center py-6 '>Signup</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2 rounded-xl'
                        type="text"
                        placeholder="Enter your Username"
                        id="username"
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Name</label>
                    <input className='border p-2 rounded-xl' type="text"
                        placeholder="Enter your Name"
                        id="fullname"
                        autoComplete="off"
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        required />
                </div>
                <div className='flex flex-col py-2'>
                    <label>E-Mail</label>
                    <input className='border p-2 rounded-xl' type="email"
                        placeholder="Enter your Email"
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2 rounded-xl' type="password"
                        placeholder="Enter your Password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required />
                </div>
                <button type='submit' className='border w-full my-5 py-2 bg-pink-700 hover:bg-indigo-500 text-white rounded-xl'>Signup</button>
                <div className='flex justify-center text-xl'>
                    <button onClick={goTologin} className='hover:bg-red-700 hover:rounded-xl hover:text-white hover:p-3'>Already have an account?</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;