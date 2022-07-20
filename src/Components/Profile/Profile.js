import React, { useState, useEffect } from 'react';
import { isExpired, decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';

const Profile = () => {
    const mycookie = Cookies.get('macaron');
    const myDecodedToken = decodeToken(mycookie);
    const isMyTokenExpired = isExpired(mycookie);
    // const tokenUsername = myDecodedToken.username;
    const [userData, setUserData] = useState('');

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <div className='bg-[#0a192f] h-screen py-9'>

            {mycookie && myDecodedToken && isMyTokenExpired === false && (
                <div class="card w-full h-64 bg-gray-400 shadow-xl my-6">
                    <div class="card-body">
                        <h2 class="card-title">Name:{userData.name}</h2>
                        <p>Username:{userData.username}</p>
                        <p>E-mail:{userData.email}</p>

                        <div class="card-actions justify-end">
                            <button class="btn btn-secondary text-xl">Create Post</button>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
};

export default Profile;