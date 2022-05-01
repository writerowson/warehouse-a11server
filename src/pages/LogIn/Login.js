import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const navigateRegister = e => {
        navigate('/register')
    }
    return (
        <div style={{ color: '#110001' }} className='container w-50'>
            <h1 className='text-center' >Please Log In </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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