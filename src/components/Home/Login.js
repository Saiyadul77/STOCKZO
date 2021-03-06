import React from 'react';

const Login = () => {
    return (
        <div class="hero min-h-screen bg-primary">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">

                    <img src="https://i.ibb.co/vswhwCp/pic.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div>
                            <h1 class="text-3xl font-bold text-center">Login now</h1>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;