import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()


    const navigateRegister = e => {
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        registered
    ] = useSignInWithEmailAndPassword(auth)

    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password);
    }

    return (
        <div style={{ color: '#110001' }} className='container w-50'>
            <h1 className='text-center' >Please Log In </h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100' variant="danger" type="submit">
                    Log in
                </Button>
            </Form>
            <p  ><b>Forget Password?</b></p>
            <p className='text-center'>New User? <Link onClick={navigateRegister} to='/register' className='text-danger fw-bold text-decoration-none' >Register for free</Link> </p>
        </div>
    );
};

export default Login;