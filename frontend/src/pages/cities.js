import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Cover from "../assets/cities-mundi.png";
import { Card } from "bootstrap-4-react/lib/components";
import { Input } from "reactstrap";
import { CardGroup } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardBody } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardSubtitle } from "reactstrap";
import Alert from "react-bootstrap/Alert";
import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import citiesActions from "../Redux/actions/cityActions";
import { connect } from "react-redux";

function Cities(props) {
  useEffect(() => {
    props.arrayCities();
  }, []);

  const auxCities = props.auxiliar;
  const filtrar = props.filtrar;

  return (
    <>
      <div className="city-container">
        <Header />
        <img className="cover" src={Cover} />
        <div className="logotipo-city">
          <img src={Logotipo} />
        </div>
        <div className="subtitle-container">
          <h1 className="title-cities">Cities</h1>
          <Input
            className="container mb-3"
            type="search"
            placeholder="Search for city"
            onChange={(evento) => filtrar(auxCities, evento.target.value)}
          />
          <h2 className="slogan-city">Travel the world...</h2>
        </div>
        <div className="city-container-card">
          {props.todasLasCities.length > 0 ? (
            props.todasLasCities.map((element) => {
              return (
                <div>
                  <div className="tarjetas">
                    <CardGroup>
                      <Card class="container p-3 mr-5 mr-1">
                        <Link to={`/city/${element._id}`}>
                          <CardImg
                            className="image-cities"
                            alt="Card image cap"
                            src={element.image}
                            top
                            width="50%"
                          />
                          <CardBody>
                            <CardTitle tag="h5">
                              <p>{element.city}</p>
                            </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                              <p>{element.country}</p>
                            </CardSubtitle>
                          </CardBody>
                        </Link>
                      </Card>
                    </CardGroup>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="alert">
              <Alert variant="info">
                <p>
                  your search does not exist 🤷🏻‍♂️, try another city, please. 🙂
                </p>
              </Alert>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    todasLasCities: state.cityReducers.cities,
    auxiliar: state.cityReducers.copiaCities,
  };
};

const mapDispatchToProps = {
  arrayCities: citiesActions.fetchCities,
  filtrar: citiesActions.filtrar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
