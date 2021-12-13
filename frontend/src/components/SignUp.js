import React from "react";
import { connect } from "react-redux";
import authActions from "../Redux/actions/authActions";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Cover from "../assets/travel-insurance.jpg";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import GoogleLogin from "react-google-login";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Registro = (props) => {
  console.log(props);
  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputImg = useRef();
  const inputCountry = useRef();

  const handleSubmit = async (user) => {
    const errores = await props.registerUser(user);
    console.log(errores);
  };
  const handleSubmitInputs = (e) => {
    e.preventDefault();
    const user = {
      name: inputName.current.value,
      lastName: inputLastName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      img: inputImg.current.value,
      country: inputCountry.current.value,
    };
    handleSubmit(user);
    inputName.current.value = "";
    inputLastName.current.value = "";
    inputEmail.current.value = "";
    inputPassword.current.value = "";
    inputImg.current.value = "";
    inputCountry.current.value = "";
  };
  const responseGoogle = (res) => {
    console.log(res);
    let googleUser = {
      name: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      img: res.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    };
    props
      .registerUser(googleUser)
      .then((response) => response.data.success)
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <img
        className="cover"
        style={{ animation: "myAnim 2s ease 0s 1 normal forwards" }}
        src={Cover}
      />

      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <h1 className="title-page-city"> Register please</h1>
      <h4 className="slogan-city">
        Already have an account?
        <NavLink exact to="/LogIn">
          {" "}
          Log in!
        </NavLink>
      </h4>
      <main>
        <form className="form" onSubmit={handleSubmitInputs}>
          <label className="inputs">
            <input
              className="input"
              type="text"
              placeholder="Name"
              ref={inputName}
              name="precio"
            />
          </label>
          <label className="inputs">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              ref={inputLastName}
              name="precio"
            />
          </label>
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
          <label className="inputs">
            <input
              className="url"
              type="text"
              placeholder="URL Image"
              ref={inputImg}
              name="name"
            />
          </label>
          <label className="inputs">
            <select ref={inputCountry} name="select">
              <option disabled value="" selected>
                Country
              </option>
              {countries.map((country) => {
                return <option value={country}>{country}</option>;
              })}
            </select>
          </label>
          <div className="policy">
            <p>
              By clicking "register", or continuing with the other options
              below, you accept the{" "}
              <Link as={Link} to={"/TermsAndPolicy"}>
                Terms of use
              </Link>{" "}
              and confirm that you have read the{" "}
              <Link as={Link} to={"/TermsAndPolicy"}>
                Policy privacy
              </Link>{" "}
              of MyTinerary.
            </p>
          </div>
          <button className="btn-grad" type="submit">
            Register
          </button>
          <GoogleLogin
            clientId="159876080199-t1eptjgja96a83udmo0ua4ccjcvsjbtq.apps.googleusercontent.com"
            buttonText="SignUp with Google"
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
  registerUser: authActions.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registro);
