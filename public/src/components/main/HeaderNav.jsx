import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
      <Link to="/">React Bootstrap</Link>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
