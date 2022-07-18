import React from 'react';
import { useNavigate } from 'react-router-dom';

const Demo = ({ demo }) => {
    const { title, username, description, id } = demo;
    const navigate = useNavigate();
    const showBlogDetail = () => {
        const path = `/blog/${id}`
        navigate(path);

    }
    return (
        <div>
            <div class="card w-96 bg-teal-200 shadow-teal-300 shadow-lg h-96">
                <div class="card-body">
                    <h2 class="card-title text-2xl">
                        {title}
                        <div class="badge badge-secondary h-10">{username}</div>
                    </h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <button onClick={showBlogDetail} class="btn btn-secondary">View Full Story</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Demo;