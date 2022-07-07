import React from 'react';

const Services = () => {
    return (
        <div className='justify-evenly grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-4xl text-center font-bold pb-10">Services</h2>
                    <h2 class="text-3xl text-center font-bold">Check Out Our</h2>
                    <h2 class="text-2xl text-center font-bold">Specialized </h2>
                    <h2 class="text-2xl text-center font-bold">Services</h2>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Discount Broking
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Portfolio Match</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;