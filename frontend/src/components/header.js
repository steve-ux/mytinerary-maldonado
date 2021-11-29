import React from "react";
import LogoUsuario from "../assets/logo_usuario.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


function Header(){
  return (
    <nav class="container-fluid bg-dark d-flex justify-content-center p-1">
  <div class="d-flex">
<Nav.Link className="nav" as={Link} to={"/"}>Home</Nav.Link>
<Nav.Link className="nav" as={Link} to={"/Cities"}>Cities</Nav.Link>
  <Nav.Link className="nav" as={Link} to={"/"}>Sign Up</Nav.Link>
<Nav.Link className="nav" as={Link} to={"/"}>Login</Nav.Link>
<img className="user" src={LogoUsuario}/>
  </div>
</nav>
  )
}

export default Header;