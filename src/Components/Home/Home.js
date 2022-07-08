import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import techImg from '../../Assets/tech-hero-image-1.jpg'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-2xl'>Welcome to</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] header'>
                    Technomore
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    Best place for tech enthusiasts.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    This blogsite shares various news of technology world. We also like to share about latest changes from global perspective.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Blogs
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>

            {/* hero */}
            <div class="hero min-h-screen bg-[#0a192f] text-white transition-[height]">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={techImg} alt='techImage' class="max-w-sm rounded-lg shadow-teal-500 shadow-2xl" />
                    <div className='px-3'>
                        <h1 class="text-5xl font-bold">Join the new and spontaneous tech community!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn bg-pink-600 transition ease-in-out delay-150">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;