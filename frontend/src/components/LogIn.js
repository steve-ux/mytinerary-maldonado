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

  const handleSubmit = async (userLogin) => {
    const errores = await props.logIn(userLogin);
    console.log(errores);
  };
  const handleSubmitInputs = (e) => {
    e.preventDefault();
    const logIn = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    handleSubmit(logIn);
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
      <img
        className="cover"
        style={{ animation: "myAnim 2s ease 0s 1 normal forwards" }}
        src={Cover}
      />

      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <h1 className="title-page-city"> Log In please</h1>
      <h2 className="slogan-city">Enter our World of Adventures!</h2>
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
          <button className="btn-grad" type="submit">
            LogIn
          </button>
          <GoogleLogin
            clientId="159876080199-t1eptjgja96a83udmo0ua4ccjcvsjbtq.apps.googleusercontent.com"
            buttonText="LogIn with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
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
