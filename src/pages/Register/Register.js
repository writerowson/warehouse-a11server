import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
        console.log(email, password);
    }
    const navigateLogin = e => {
        navigate('/login')
    }
    if (user) {
        navigate('/home')
        console.log(user);
    }
    return (
        <div style={{ color: '#110001' }} className='container w-50'>
            <h1 className='text-center' >Please Register </h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
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