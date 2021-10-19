import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark ' sticky='top'>
            <Container>
                <Navbar.Brand>Doctors Portal</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav.Link as={HashLink}  to='/home#home'>Home</Nav.Link>
                    <Nav.Link as={HashLink}  to='/home#services'>Services</Nav.Link>
                    <Nav.Link as={HashLink}  to='/home#locations'>Locations</Nav.Link>
                    <Nav.Link href='/login'>Log In</Nav.Link>
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
