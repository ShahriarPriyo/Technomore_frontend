import React, { useEffect, useState } from 'react';
import Demo from './Demo';

const Demos = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        fetch(`http://localhost:3001/api/v1/posts`)
            .then(res => res.json())
            // eslint-disable-next-line no-undef
            .then(data => setBlog(data))
    }, []);
    return (
        <div>
            {/* <h1>Total blogs:{blog.length}</h1> */}
            <div className='grid gap-4 grid-cols-3 bg-[#0a192f] h-screen pl-40 '>
                {
                    blog.map(demo => <Demo
                        key={demo.id}
                        demo={demo}
                    ></Demo>)
                }

            </div>


        </div>
    )
};

export default Demos;