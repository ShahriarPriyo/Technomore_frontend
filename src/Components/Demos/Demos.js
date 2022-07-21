import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Demo from './Demo';

const Demos = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3001/api/v1/posts`);
            setBlog(res.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            {/* <h1>Total blogs:{blog.length}</h1> */}
            <div className='grid gap-4 grid-cols-3 bg-[#0a192f] h-full p-10 mb-2 '>
                {
                    blog.reverse().map(demo => <Demo
                        key={demo.id}
                        demo={demo}
                    ></Demo>)
                }

            </div>


        </div>
    )
};

export default Demos;