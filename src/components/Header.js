import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='py-3' bg="primary" variant="dark">
    <Container>
        <Link className='link1' to='/'>LAMAN.AZ</Link>
      <Nav className="me-auto right">
        <Link className='link1' to='/'>HOME PAGE</Link>
        <Link className='link1' to='/product'>PRODUCT</Link>
        <Link className='link1' to='/addproducts'>ADD PRODUCTS</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header