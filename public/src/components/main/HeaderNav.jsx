import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
      <Link to="/" className='text-white text-decoration-none' >React Bootstrap</Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <div className="me-auto d-flex justify-content-evenly w-25">
        <Link to="/login" className='text-white text-decoration-none'>Login</Link>
        <Link to="/register" className='text-white text-decoration-none' >Register</Link>
      </div>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
