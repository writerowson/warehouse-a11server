import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../../Shared/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: '#110001' }} collapseOnSelect expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand className='fw-bold' as={Link} to="/"> Pure Perfume  </Navbar.Brand>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto align-items-center">
                                <CustomLink className="me-2" as={Link} to='/'>Home</CustomLink>
                                <CustomLink className="me-2" as={Link} to='/inventory'>Inventory</CustomLink>
                                <CustomLink className="me-2" as={Link} to='/blog'>Blog</CustomLink>

                                <CustomLink className="me-2" as={Link} to="/about">About</CustomLink>
                                {user ?
                                    <button onClick={handleSignOut} className="btn btn-light text-danger fw-bold ms-2" >Sign Out</button>
                                    :
                                    <CustomLink as={Link} to='/login'>
                                        Login</CustomLink>}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;