// import React from 'react';
import Cookies from 'js-cookie';


const Signout = () => {
    Cookies.remove('macaron');
    window.location.href = '/';
    return;
};

export default Signout;