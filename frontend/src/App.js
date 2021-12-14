import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.js";
import Cities from "./pages/Cities";
import City from "./components/City";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import PrivacyPolicy from "./pages/TermsAndPolicy";
import { connect } from "react-redux";
import authActions from "./Redux/actions/authActions";
import { useEffect } from "react";
import {ToastContainer} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
  useEffect(() => {
    if (localStorage.getItem("token")){
      props.isAuth(localStorage.getItem("token"))
    }
  }, [])  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/City/:id" element={<City />} />
        {props.token ? (
          <Route path="*" element={<Home />} />
        ) : (
          <>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </>
        )}
        <Route path="/TermsAndPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};
const mapDispatchToProps = {
  isAuth: authActions.isAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
