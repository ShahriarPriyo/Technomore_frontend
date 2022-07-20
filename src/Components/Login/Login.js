import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const axios = require('axios').default;

const Login = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate('/signup')
    }

    const handleSubmit = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            //console.log(user, pwd);
        }

        const data = {
            username: user,
            password: pwd,
        };
        await axios
            .post('http://localhost:3001/api/v1/signin/', data)
            .then((response) => {
                console.log(response)
                const token = response.data.token;
                //localStorage.setItem('mytoken', token);

                Cookies.set('macaron', token, { expires: 7 });
                navigate('/');
                window.location.reload();
            })
            .catch((error) => {
                setErrMsg('');
            });
    };

    useEffect(() => {
        handleSubmit();
    }, []);



    return (
        <div className='h-screen w-full bg-[#0a192f] px-4'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-teal-400 p-4 rounded-xl'>
                <h2 className='text-4xl font-bold text-center py-6 '>Login</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2 rounded-xl'
                        type="text"
                        placeholder="Enter Username"
                        id="user"
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input
                        className='border p-2 rounded-xl' type="password"
                        placeholder="Enter Password"
                        id="pwd"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                </div>
                <button type='submit' className='border w-full my-5 py-2 bg-pink-700 hover:bg-indigo-500 text-white rounded-xl'>Sign In</button>
                {errMsg && (<div class="alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Error! Access Denied</span>
                    </div>
                </div>)}


                <div className='flex justify-center text-xl'>
                    <button onClick={goToSignup} className='hover:bg-red-700 hover:rounded-xl hover:text-white hover:p-3'>Create an account</button>
                </div>
            </form>
        </div>
    );
};

export default Login;