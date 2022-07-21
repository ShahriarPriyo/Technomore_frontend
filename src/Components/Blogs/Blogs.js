import React from 'react';

const Blogs = () => {
    return (
        <div className='grid gap-4 grid-cols-3 bg-[#0a192f] h-screen'>
            {/* card 1 */}
            <div class="card w-96 bg-teal-200 shadow-teal-300 shadow-lg h-96">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="card-title text-2xl">
                        Forex reserves to slip below $40b first time in 2 years
                        <div class="badge badge-secondary h-10">Shahriar Priyo</div>
                    </h2>
                    <p>Foreign exchange reserves in Bangladesh could slip below $40 billion for the first time in nearly two years owing to regular import payments and a slowdown in remittance flow.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary">View Full Story</button>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div class="card w-96 bg-teal-200 shadow-teal-300 shadow-lg h-96">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="card-title text-2xl">
                        Has Mahmudullah muddied the waters further?
                        <div class="badge badge-secondary h-10">Shahriar Priyo</div>
                    </h2>
                    <p>Our bowlers should have stuck to their lines," Bangladesh captain Mahmudullah Riyad said after his side suffered a five-wicket defeat over West Indies in the third and final T20I at the Providence Stadium in Guyana on Thursday.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary">View Full Story</button>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div class="card w-96 bg-teal-200 shadow-teal-300  shadow-lg h-96">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="card-title text-2xl">
                        Russia barely got started in Ukraine: Putin
                        <div class="badge badge-secondary h-10 text-sm">Shahriar Priyo</div>
                    </h2>
                    <p>President Vladimir Putin said on Thursday that Russia had barely got started in Ukraine and dared the West to try to defeat it on the battlefield, while insisting that Moscow was still open to the idea of peace talks.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-secondary">View Full Story</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;