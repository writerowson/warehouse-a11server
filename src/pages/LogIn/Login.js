import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading';
import SocialLogin from './SocialLogin';
import useToken from './useToken';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const [
        sendPasswordResetEmail,

    ] = useSendPasswordResetEmail(auth)
    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);

    }
    const forgetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    toast('Email Sent')
                })
        }
        else {
            toast('Please enter your email address')
        }
    }

    const [token] = useToken()
    const navigate = useNavigate()
    let signInError;
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])
    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        );
    }
    const navigateRegister = e => {
        navigate('/register')
    }
    return (
        <div style={{ color: '#110001' }} className='container w-50'>
            <h1 className='text-center' >Please Log In </h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="remember me" />
                </Form.Group>
                <Button className='w-100' variant="danger" type="submit">
                    Log in
                </Button>
            </Form>
            {signInError}
            <p style={{ color: '#110001' }} className=' btn btn-link text-decoration-none' onClick={forgetPassword}> <b>Forget Password?</b> </p>
            <p className='text-center'>New User? <Link onClick={navigateRegister} to='/register' className='text-danger fw-bold text-decoration-none' >Register for free</Link> </p>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;