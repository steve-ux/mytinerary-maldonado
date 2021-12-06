import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg} from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'bootstrap-4-react';
//import Carousel from 'react-bootstrap/Carousel'

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
        image:"https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/miami-florida/miami-florida-south-beach-aerial.jpg?$1024x700$",
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
    const img_src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2275%22%20height%3D%2275%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2075%2075%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165aaafcf71%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165aaafcf71%22%3E%3Crect%20width%3D%2275%22%20height%3D%2275%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2219.34375%22%20y%3D%2242.15%22%3E75x75%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    const boxStyle = {
      margin: '.25rem'
    }
    return (
      <div className="carrusel">
      <h2 className="titleCarousel">"Popular MyTineraries"</h2>
      <Carousel w="100" id="carouselExampleControls" display="flex" justifyContent="center">
       
             
             <Carousel.Inner>
               
                 <Carousel.Item active>
              {this.state.cities
              .filter(element => {
              return element.zone === "North America"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="5" mr="3" p="3" style={{ width: '18rem' }}>
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
                <Card display="inline-block" align="top" ml="5" mr="3" p="3" style={{ width: '18rem' }}>
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
                <Card display="inline-block" align="top" ml="5" mr="3" p="3" style={{ width: '18rem' }}>
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
              <Carousel.Prev display="flex" justifyContent="start"  href="#carouselExampleControls">
          <Carousel.Prev.Icon bg="primary" src={img_src} style={boxStyle} rounded="circle" />
        </Carousel.Prev>    
        <Carousel.Next display="flex" justifyContent="end" href="#carouselExampleControls">
          <Carousel.Next.Icon bg="primary" src={img_src} style={boxStyle} rounded="circle" />
        </Carousel.Next>
        </div>

      </Carousel>
      </div>
    )
  }
}