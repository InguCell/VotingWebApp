import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css";
import logo from "./images/central-logo.png";

export default function () {
   
//const logins = <button>Login</button>

const buttons = {
  login: <button className='login-button'>Login</button>,
  register: <button className='register-button'>Register as a voter</button>
}
  
  const buttons_container = <div className='buttons-container'>
      {buttons.login}{buttons.register}
  </div>

  const nav_items = <div className='nav-items-container'>
    <Nav className="me-auto">
        <Nav.Link href="#features" className='items' style={{marginLeft:"3.1rem"}}>Home</Nav.Link>
        <Nav.Link href="#pricing"  className='items' style={{marginLeft:"3.1rem"}}>About</Nav.Link>
        <Nav.Link href="#pricing" className='items' style={{marginLeft:"3.1rem"}}>FAQ</Nav.Link>
        <Nav.Link href="#pricing" className='items' style={{marginLeft:"3.1rem"}}>Contact</Nav.Link>
    </Nav>
  </div>

  const classic_nav = <Navbar collapseOnSelect expand="lg" bg="light">
  <Container>
    <Navbar.Brand href="#home">
    <img src={logo} alt=""></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
            {nav_items}     
      <Nav>
        {buttons_container}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  return (

    <div>
        {classic_nav}
    </div>

    
  )
}
