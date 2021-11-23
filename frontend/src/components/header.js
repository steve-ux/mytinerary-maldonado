import React from "react";
import LogoUsuario from "../assets/logo_usuario.png";
function Header() {
  return (      
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
          <div className="nav1">
        <a class="navbar-brand" href="#">
          Home
        </a>
        <a class="navbar-brand" href="https://example.com/" target="__blank">
          Cities
        </a>
        </div>
        <div className="nav2">
        <a class="navbar-brand" href="#">
        👤 SignUp
        </a>
        <a class="navbar-brand" href="#">
        ➡️ LogIn
        </a>
        <img className="user" src={LogoUsuario}/>
        </div>
      </div>
    </nav>
    
  );
}

export default Header;
