import React, { useContext, useState } from 'react';
import login from '../../../public/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2'
const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign Up Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content grid grid-cols-2 justify-around ">
                <div className="w-full">
                    <img src={login} alt="" />
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <h1 className='text-center text-2xl font-bold mt-4'>Sign Up Here</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <p className='text-bold text-error'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white">Sign Up</button>
                        </div>
                        <p className='text-center font-bold mt-4'>Already have an account? please <Link to='/login' className='text-error' >Login</Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;