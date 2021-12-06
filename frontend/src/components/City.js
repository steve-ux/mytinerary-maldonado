import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cityActions from "../Redux/actions/cityActions";
import itineraryActions from "../Redux/actions/itineraryActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import Card from "react-bootstrap/Card";

const City = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getOneCity(id);
    props.getItinerary(id);
  }, []);
  console.log(props);

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
        props.getItinerarios.map((p) => {
          return (
            <div className="card-container">
            <div className="itinerarios">
              <Card className="text-center">
                <Card.Body class="bg-danger">
                <Card.Header>
                  <img className="foto-itinerarios" src={p.photo} width="30%" />
                </Card.Header>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    <p className="datos-itinerarios">Price: {"💵".repeat(p.price)}</p>
                    <p className="datos-itinerarios">Duration:{"🕒".repeat(p.duration)}</p>
                    <p className="datos-itinerarios">Likes: {p.likes}</p>
                    <p className="datos-itinerarios">{p.hashtag}</p>
                    <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>View More</Accordion.Header>
                  <Accordion.Body>
                    <h2 className="title-page-city">Activities</h2>
                    <div>
                      <p>
                        Comments:
                        <form>
                          <input className="comments" type="text" id="fname" name="fname" />
                          {p.comments}
                        </form>
                      </p>
                    </div>
                    <h4 className="under">Under Construction ⚠️, sorry.</h4>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </div>
          );
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
