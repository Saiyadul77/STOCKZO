import React from 'react';

const Team = () => {
    return (
        <div>
            <div className='text-center text-4xl font-bold pt-10'>
                <h1 className='py-5'>Out Team</h1>
            </div>
            <div className='justify-evenly grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-circle" src="https://placeimg.com/160/160/arch" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="text-xl">Lorem ipsum dolor</h2>
                        <h2 class="text-2xl">Full Name</h2>
                        <h2 class="text-xl">Lorem ipsum dolor sit amet, </h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-circle" src="https://placeimg.com/160/160/arch" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="text-xl">Lorem ipsum dolor</h2>
                        <h2 class="text-2xl">Full Name</h2>
                        <h2 class="text-xl">Lorem ipsum dolor sit amet, </h2>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-circle" src="https://placeimg.com/160/160/arch" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="text-xl">Lorem ipsum dolor</h2>
                        <h2 class="text-2xl">Full Name</h2>
                        <h2 class="text-xl">Lorem ipsum dolor sit amet, </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;