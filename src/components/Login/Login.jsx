import React, { useContext, useState } from 'react';
import login from '../../../public/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { onIdTokenChanged } from 'firebase/auth';
import SocialLogins from '../SocialLogins/SocialLogins';
const Login = () => {

    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    email: user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    header: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt response', data);
                        // warning: local storage is not the best (second best place) to store access onIdTokenChanged
                        localStorage.setItem('car-access-token', data.token);
                        navigate(from, { replace: true })
                    })
                console.log(user);

                setError(' ');
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
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
                    <h1 className='text-center text-2xl font-bold mt-4'>Login here</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-error text-white">Login</button>
                        </div>
                        <p className='text-center font-bold mt-4'>New to this website? Please <Link to='/register' className='text-error' >Sign Up</Link> </p>
                        <SocialLogins></SocialLogins>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;