import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../Shared/CustomLink';

const Header = () => {


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container >
                    <Navbar.Brand as={Link} to="/"> Pure Perfume  </Navbar.Brand>

                    <div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ">
                                <CustomLink className="me-2" as={Link} to='/'>Home</CustomLink>
                                <CustomLink className="me-2" as={Link} to='/inventory'>Inventory</CustomLink>
                                <CustomLink className="me-2" as={Link} to='/blog'>Blog</CustomLink>

                                <CustomLink className="me-2" as={Link} to="/about">About</CustomLink>
                                <CustomLink className="me-2" as={Link} to='/login'>
                                    Login</CustomLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;