import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://i.ibb.co/vswhwCp/pic.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:pr-40'>
                    <h1 class="text-5xl font-bold">Market Forecast!</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

                        eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam, quis nostrud exercitation ullamco

                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;