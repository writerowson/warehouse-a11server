import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import { SiFacebook } from "react-icons/si"
import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai"
import useToken from './useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken()
    const navigate = useNavigate()
    let signInError;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p >Error: {error.message}</p>
            </div>
        )
    }

    return (
        <div className='text-center'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            {signInError}
            <button onClick={() => signInWithGoogle()} className='border border-none me-2' > <FcGoogle></FcGoogle> </button>
            <button className='border border-none me-2'><SiFacebook className='text-primary'></SiFacebook> </button>
            <button className='border border-none me-2'><AiFillGithub></AiFillGithub> </button>


        </div>
    );
};

export default SocialLogin;