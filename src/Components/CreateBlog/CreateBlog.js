import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { decodeToken, isExpired } from 'react-jwt';


const CreateBlog = () => {
    const mycookie = Cookies.get('macaron');

    const myDecodedToken = decodeToken(mycookie);
    const isMyTokenExpired = isExpired(mycookie);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios({
            method: 'post',
            url: 'http://localhost:3001/api/v1/posts',
            data: {
                title: title,
                username: myDecodedToken.username,
                description: description,
            },
            headers: {
                Authorization: 'Bearer ' + mycookie,
            },
        })
            .then(function (response) {
                alert('Successfully blog created');
                const blogid = response.data.id;
                // window.location.href(`/viewblog/${blogid}`);
                navigate(`/blog/${blogid}`)
            })
            .catch(function (error) {
                alert(error.message);
            });
    };

    useEffect(() => {
        handleSubmit();
    }, []);
    return (
        <div className='h-screen w-full bg-[#0a192f] px-4'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-blue-600 p-4 rounded-xl'>
                <h2 className='text-4xl font-bold text-center py-6 text-white'>Create Blog</h2>
                <div className='flex flex-col py-2'>
                    <label className='text-xl mb-1'>Title</label>
                    <input className='border p-2 rounded-xl'
                        type="text"
                        placeholder="Enter Title"
                        id="title"
                        autoComplete="off"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-xl mb-1'>Description</label>
                    <textarea
                        className='border p-2 rounded-xl' type="text"
                        placeholder="Enter Description"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </div>
                <button type='submit' className='border w-full my-5 py-2 bg-pink-700 hover:bg-indigo-500 text-white rounded-xl'>Create Blog</button>
            </form>
        </div>
    );
}

export default CreateBlog;