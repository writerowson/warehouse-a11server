import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useSignInWithEmailAndPassword(auth);
    const navigateLogin = e => {
        navigate('/login')
    }
    return (
        <div style={{ color: '#110001' }} className='container w-50'>
            <h1 className='text-center' >Please Register </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept all terms and conditions" />
                </Form.Group>
                <Button className='w-100' variant="danger" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center'>Old User? <Link onClick={navigateLogin} to='/login' className='text-danger fw-bold text-decoration-none' >PLease log in</Link> </p>
        </div>
    );
};

export default Register;