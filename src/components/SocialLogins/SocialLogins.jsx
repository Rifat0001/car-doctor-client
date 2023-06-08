import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogins = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='text-center'>
            <div className="flex flex-col w-full border-opacity-50">

                <div className="divider">OR</div>

            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
                G
            </button>
        </div>

    );
};

export default SocialLogins;