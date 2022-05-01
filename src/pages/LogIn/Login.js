import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const [
        sendPasswordResetEmail,
        sending
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
                    alert('Email Sent')
                })
        }
        else {
            alert('Please enter your email address')
        }
    }
    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        navigate('/home');
    }
    if (error) {
        return (
            <div className='container text-center fs-3 fw-bold mt-5'>
                <p >Error: {error.message}</p>
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
            <p ><button style={{ color: '#110001' }} className=' btn btn-link text-decoration-none' onClick={forgetPassword}> <b>Forget Password?</b> </button></p>
            <p className='text-center'>New User? <Link onClick={navigateRegister} to='/register' className='text-danger fw-bold text-decoration-none' >Register for free</Link> </p>
        </div>
    );
};

export default Login;