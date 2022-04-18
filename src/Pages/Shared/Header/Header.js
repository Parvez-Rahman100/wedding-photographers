import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar style={{backgroundColor:'rgba(209, 216, 224,1.0)'}} collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand as={Link} className='text-dark' to="/home">Wedding Photographer's Vision</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href='home#services' className='text-dark' to="#services">Services</Nav.Link>
      <Nav.Link as={Link} className='text-dark' to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} className='text-dark' to="/about">About Me</Nav.Link>
      { user ? 

    <button className='btn btn-link text-dark text-decoration-none' onClick={handleSignOut}>Sign Out</button>
    :
      <Nav.Link as={Link} className='text-dark' to="/login">
      Login
    </Nav.Link>}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>
        );
};

export default Header;