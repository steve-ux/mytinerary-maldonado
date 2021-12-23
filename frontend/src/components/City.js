import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cityActions from "../Redux/actions/cityActions";
import itineraryActions from "../Redux/actions/itineraryActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import Loading from "../components/Loading";
import Itinerary from "./Itinerary";

const City = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getOneCity(id);
    props.getItinerary(id);
  }, []);
  if (props.oneCity == null) {
    return (
      <div>
        <Header />
        <h1 className="title-page-city"> The best destination for you!</h1>
      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <h2 className="title-page-city">Our itineraries for you</h2>
        <h3 className="loading">Loading...please wait</h3>
        <Loading />
        <Footer />
      </div>
    );
  } else {

  return (
    <div className="city">
      <Header />
      <h1 className="title-page-city"> The best destination for you!</h1>
      <div className="logotipo-city">
        <img src={Logotipo} />
      </div>
      <div class="container" ciudad={props.oneCity.city}>
        <img className="image-city" src={props.oneCity.image} />
      </div>
      <div className="text-container">
        <h2 className="title-city">
          {props.oneCity.city}, {props.oneCity.country}
        </h2>
      </div>
      <h2 className="title-page-city">Our itineraries for you</h2>
      {props.getItinerarios.length === 0 ? (
        <div className="alert">
          <Alert variant="info">
            <p>
              No Itinerary yet for this city 🤷🏻‍♂️, try another city, please. 🙂
            </p>
          </Alert>
        </div>
      ) : (
        props.getItinerarios.map((itineraries) => {
          return (
            <Itinerary Itineraries={itineraries} key={itineraries.id}/>)
        })
      )}
      <div className="botones">
        <Link className="cities-btn d-flex justify-content-center" to="/Cities">
          <button className="btn-grad">Back to cities</button>
        </Link>
        <Link className="cities-btn d-flex justify-content-center" to="/">
          <button className="btn-grad">Back to home</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
}

const mapStateToProps = (state) => {
  return {
    oneCity: state.cityReducers.city,
    getItinerarios: state.itineraryReducers.itinerarios,
  };
};

const mapDispatchToProps = {
  getOneCity: cityActions.fetchUnaCity,
  getItinerary: itineraryActions.loadItineraries,
};
export default connect(mapStateToProps, mapDispatchToProps)(City);
