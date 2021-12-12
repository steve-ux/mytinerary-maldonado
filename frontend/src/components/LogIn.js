import React from "react";
import { connect } from "react-redux";
import authActions from "../Redux/actions/authActions";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Cover from "../assets/travel-login.jpg";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";

const LogIn = (props) => {
  const inputEmail = useRef();
  const inputPassword = useRef();

  const handleSubmit = async (email, password) => {
    props.logIn(email, password);
  };
  const handleSubmitInputs = (e) => {
    e.preventDefault();
    handleSubmit(inputEmail.current.value, inputPassword.current.value);
    inputEmail.current.value = "";
    inputPassword.current.value = "";
  };
  console.log(props);
  const responseGoogle = (res) => {
    let googleUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      google: true,
    };
    props.logIn(googleUser);
  };

  return (
    <div className="container-formulario">
      <div className="cover">
        <img src={Cover} />
      </div>
      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <h1 className="title-page-city"> Log In please</h1>
      <h2 className="slogan-city">Join to our World of Adventures!</h2>
      <h4 className="slogan-city">
        Don’t have an account?
        <NavLink exact to="/SignUp">
          {" "}
          Join!
        </NavLink>
      </h4>
      <main className="main-formulario">
        <form className="form" onSubmit={handleSubmitInputs}>
          <label className="inputs">
            <input
              className="email"
              type="email"
              placeholder="Email"
              ref={inputEmail}
              name="name"
            />
          </label>
          <label className="inputs">
            <input
              className="email"
              type="password"
              placeholder="Password"
              ref={inputPassword}
              name="name"
            />
          </label>
          <button className="btn-grad">
            <input type="submit" value="LogIn" />
          </button>
          <GoogleLogin
            clientId="159876080199-t1eptjgja96a83udmo0ua4ccjcvsjbtq.apps.googleusercontent.com"
            buttonText="LogIn with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          ,
        </form>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usuario: state.authReducer.user,
  };
};
const mapDispatchToProps = {
  logIn: authActions.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
