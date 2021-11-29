import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'bootstrap-4-react';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      cities: [
        {
        id: 1,
        city:"New York",
        country: "USA",
        image: "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"North America",
      },
    {
        id:2,
        city:"Miami",
        country: "USA",
        image:"https://images.pexels.com/photos/4445179/pexels-photo-4445179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"North America",
      },
    {
        id:3,
        city:"Orlando",
        country: "USA",
        image:"https://images.pexels.com/photos/6921010/pexels-photo-6921010.jpeg?cs=srgb&dl=pexels-bo-zhong-6921010.jpg&fm=jpg",
        zone:"North America",
      },
    {
        id:4,
        city:"California",
        country: "USA",
        image:"https://images.pexels.com/photos/5246036/pexels-photo-5246036.jpeg?cs=srgb&dl=pexels-masbet-christianto-5246036.jpg&fm=jpg",
        zone:"North America",
      },
    {
        id: 5,
        city:"Easter Island",
        country: "Chile",
        image:"https://images.pexels.com/photos/2819082/pexels-photo-2819082.jpeg?cs=srgb&dl=pexels-andrea-vera-sasso-2819082.jpg&fm=jpg",
        zone:"South America",
      },
    {
        id: 6,
        city:"Santa Cruz",
        country: "Argentina",
        image:"https://images.pexels.com/photos/9224588/pexels-photo-9224588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"South America",
      },
    {
        id: 7,
        city:"Macchu Picchu",
        country: "Peru",
        image:"https://images.pexels.com/photos/5503236/pexels-photo-5503236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"South America",
      },
    {
        id: 8,
        city:"Rio de Janeiro",
        country: "Brazil",
        image:"https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"South America",
      },
    {
        id: 9,
        city:"Helsinki",
        country: "Finland",
        image:"https://images.pexels.com/photos/5398596/pexels-photo-5398596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"Europe",
      },
    {
        id: 10,
        city:"Barcelona",
        country: "Spain",
        image:"https://images.pexels.com/photos/175934/pexels-photo-175934.jpeg?cs=srgb&dl=pexels-tyler-hendy-175934.jpg&fm=jpg",
        zone:"Europe",
      },
    {
        id: 11,
        city:"London",
        country: "United Kingdom",
        image:"https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?cs=srgb&dl=pexels-pixabay-460672.jpg&fm=jpg",
        zone:"Europe",
      },
    {
        id: 12,
        city:"Rome",
        country: "Italy",
        image:"https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"Europe",
      },
      {
        id: 13,
        city:"Sydney",
        country: "Australia",
        image:"https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"Oceania",
      },
      {
        id: 14,
        city:"Auckland",
        country: "New Zealand",
        image:"https://images.pexels.com/photos/5342974/pexels-photo-5342974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"Oceania",
      },
      {
        id: 15,
        city:"Tokyo",
        country: "Japan",
        image:"https://images.pexels.com/photos/4344748/pexels-photo-4344748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        zone:"Asia",
      },
  ]
}
}

  componentDidMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleControls'), 20);
  }

  render() {
    return (
      <div className="carrusel">
      <h2 className="titleCarousel">"Popular MyTineraries"</h2>
      <Carousel w="100" id="carouselExampleControls">
       
             
             <Carousel.Inner>
               
                 <Carousel.Item active>
              {this.state.cities
              .filter(element => {
              return element.zone === "North America"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="5" mr="1" p="3" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p>{element.city}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>
              

              
                <Carousel.Item>
              {this.state.cities
              .filter(element => {
              return element.zone === "Europe"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="5" mr="1" p="3" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p>{element.city}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>

                <Carousel.Item>
              {this.state.cities
              .filter(element => {
              return element.zone === "South America"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="5" mr="1" p="3" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p>{element.city}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>

              
              </Carousel.Inner>
              <div className="flechas">
              <Carousel.Prev className="flecha" href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next className="flecha" href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
        </div>

      </Carousel>
      </div>
    )
  }
}
