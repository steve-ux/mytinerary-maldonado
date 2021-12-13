import React from "react";
import LogoUsuario from "../assets/logo_usuario.png";
import authActions from "../Redux/actions/authActions";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";


function Header(props){
  
  
  const logoUser = props.user.user
  ? <img className="user" src= {props.user.user.img}/>
  : <img className="user" src={LogoUsuario}/> 

  return (
    <nav class="container-fluid bg-primary d-flex justify-content-center mr-8">
  <Navbar bg="primary" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="nav" as={Link} to={"/"}>Home</Nav.Link>
        <Nav.Link className="nav" as={Link} to={"/Cities"}>Cities</Nav.Link>      
        <NavDropdown title={logoUser} id="basic-nav-dropdown">
          {props.user.user ? <NavDropdown.Item className="nav2" onClick={() => props.logOut()}>LogOut</NavDropdown.Item> : <><NavDropdown.Item className="nav2" as={Link} to={"/SignUp"}>Sign Up</NavDropdown.Item><NavDropdown.Item className="nav2" as={Link} to={"/LogIn"}>Login</NavDropdown.Item></>}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
 </nav>
   )
 }
 const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = {
  logOut: authActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
