import axios from "axios";
import React, { Component } from "react";
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

export default class Cities extends Component {
  state = {
    dataCities: [],
    searchCity: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) =>
        this.setState({
          dataCities: res.data.respuesta,
          searchCity: res.data.respuesta,
        })
      );
  }

  handleChange = (e) => {
    const valorDelImput = e.target.value.toLowerCase().trim();
    let filtred = [];
    filtred = this.state.dataCities.filter((ciudad) => {
      const city = ciudad.city.toLowerCase().trim();
      return city.startsWith(valorDelImput);

    });
    this.setState({ searchCity: filtred });
  };

  render() {
    const { searchCity } = this.state;

    return (
      <>
        <div className="city-container">
          <Header />
          <img className="cover" src={Cover} />
          <div className="subtitle-container">
            <h1 className="title-city">MyTinerary Cities</h1>
            <Input
              className="container mb-3"
              type="search"
              placeholder="Search for city"
              onChange={this.handleChange}
            />
            <h2 className="title-city">Travel the world...</h2>
          </div>
          <div className="city-container-card">
            {searchCity.length > 0 ? (
              searchCity.map((element) => {
                return (
                  <div>
                    <div className="tarjetas">
                      <CardGroup>
                        <Card class="container p-3 mr-5 mr-1">
                          <Link to={`/city/${element._id}`}>
                            <CardImg
                              className="image-city"
                              alt="Card image cap"
                              src={element.image}
                              top
                              width="50%"
                            />
                          </Link>
                          <CardBody>
                            <CardTitle tag="h5">
                              <p>{element.city}</p>
                            </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                              <p>{element.country}</p>
                            </CardSubtitle>
                          </CardBody>
                        </Card>
                      </CardGroup>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="alert">
                your search does not exist :(, try another city, please :)
              </p>
            )}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
