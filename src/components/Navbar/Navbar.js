import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css";
import logo from "./images/central-logo.png";
import { Link } from 'react-router-dom';

export default function () {
   

const buttons = {
  login: <button className='login-button'><Link to="/login" style={{textDecoration:"none", color:"rgb(112,112,113)"}}>Login</Link></button>,
  register: <button className='register-button'><Link to="/register" style={{textDecoration:"none", color:"white"}}>Register as a voter</Link></button>
}
  
  const buttons_container = <div className='buttons-container'>
      {buttons.login}{buttons.register}
  </div>

  const nav_items = <div className='nav-items-container'>
    <Nav className="me-auto">
     
<Link to="/VotingWebAppHome" style={{textDecoration:"none"}}>
<Nav.Link href="#features" className='items' style={{marginLeft:"3.1rem", textDecoration:"none"}}>

Home</Nav.Link>
</Link>  <Link to="/about" style={{textDecoration:"none"}}>
        <Nav.Link href="#pricing"  className='items' style={{marginLeft:"3.1rem", textDecoration:"none"}}>About</Nav.Link>
        </Link> 
        <Link to="/faq" style={{textDecoration:"none"}}>
        <Nav.Link href="#pricing" className='items' style={{marginLeft:"3.1rem"}}>FAQ</Nav.Link>
        </Link>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <Nav.Link href="#pricing" className='items' style={{marginLeft:"3.1rem" , textDecoration:"none"}}>Contact</Nav.Link>
        </Link>
        
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
