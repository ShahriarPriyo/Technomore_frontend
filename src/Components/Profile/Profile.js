import React, { useState, useEffect } from 'react';
import { isExpired, decodeToken } from 'react-jwt';
import Cookies from 'js-cookie';
import axios from 'axios';
const Profile = () => {
    const mycookie = Cookies.get('macaron');
    const myDecodedToken = decodeToken(mycookie);
    const isMyTokenExpired = isExpired(mycookie);
    const tokenUsername = myDecodedToken.username;
    const [userData, setUserData] = useState('');

    const getUserData = async () => {
        axios
            .get('http://localhost:3001/api/v1/users/' + tokenUsername)
            .then(function (response) {
                setUserData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    return (
        <div className='bg-[#0a192f] h-screen w-full py-9'>

            {mycookie && myDecodedToken && isMyTokenExpired === false && (
                <div class="card max-w-[400px] w-full mx-auto bg-blue-600 text-white p-4 rounded-xl">
                    <div class="card-body">
                        <h2 class="card-title">Name:{userData.name}</h2>
                        <h2 class="card-title">Username:{userData.username}</h2>
                        <h2 class="card-title">E-mail:{userData.email}</h2>

                        {/* <div class="card-actions justify-end">
                            <button class="btn btn-secondary text-xl">Create Post</button>
                        </div> */}
                    </div>
                </div>

            )}

        </div>
    );
};

export default Profile;