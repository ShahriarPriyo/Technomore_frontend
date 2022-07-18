import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BlogDetail = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/')
    }
    const goToBlogs = () => {
        navigate('/demos')
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3001/api/v1/posts/${blogId}`);
            setBlog(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className='bg-[#0a192f] h-screen pl-40'>

            <div class="card w-96 bg-gray-200 shadow-teal-300 shadow-lg h-96">

                <div class="card-body">
                    <h2 class="card-title text-2xl">
                        {blog.title}
                        <div class="badge badge-secondary h-10">{blog.username}</div>
                    </h2>
                    <p>{blog.description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={goToHome} class="btn btn-secondary">Return to Home</button>
                        <button onClick={goToBlogs} class="btn btn-secondary">Return to Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;