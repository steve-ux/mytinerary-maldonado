import React from "react";
import LogoUsuario from "../assets/logo_usuario.png";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";


function Header(){
  return (
    <nav class="container-fluid bg-primary d-flex justify-content-center mr-8">
  <Navbar bg="primary" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="nav" as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link className="nav" as={Link} to={"/Cities"}>Cities</Nav.Link>      
        <NavDropdown title= <img className="user" src={LogoUsuario}/> id="basic-nav-dropdown">
          <NavDropdown.Item className="nav2" as={Link} to={"/"}>Sign Up</NavDropdown.Item>
          <NavDropdown.Item className="nav2" as={Link} to={"/"}>Login</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
 </nav>
   )
 }

export default Header;
