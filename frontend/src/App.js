import React from "react";
import { connect } from "react-redux";
import Cities from "./pages/Cities";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import PrivacyPolicy from "./pages/TermsAndPolicy";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./components/City";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/City/:id" element={<City />} />
        {props.user.user ? (
          <Route path="*" element={<Home />} />
        ) : (
          <>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
          </>
        )}
        <Route path="/TermsAndPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(App);
