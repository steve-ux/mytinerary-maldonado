import React, {Component, useEffect, useState} from "react";
// import { Card } from 'bootstrap-4-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import { Link } from "react-router-dom";
import Cover from '../assets/cities-mundi.png';

export default class Cities extends Component {
  constructor(props) {
      super(props)
      this.state = { dataCities: [] }
  }
  componentDidMount() {
      axios.get('http://localhost:4000/api/cities')
          .then(res => this.setState({ dataCities: res.data.response }))
  }

  render() {
      console.log(this.dataCities)
      return (
          <div className="container-padre" >
                <Header/>
                <img className="cover" src={Cover}/>
              <div className="titulo-container">
                  <h2>Cities</h2>
              </div>
              <div>
                  <input className="container p-1 mb-3 form-control form-control-lg input" type="text" placeholder="Filter by Cities" />
              </div>
              <div className="container-card">
              {
                  this.state.dataCities.map((elem, i) => {
                      return (
                          <div className="card-city">
                              <div className="img-div" key={i} ciudad={elem.city}>
                                  <Link to={`/city/${elem.id}`}>
                                      <img src={elem.image}></img>
                                  </Link>
                              </div>
                              <div className="text-container" >
                                  <h3>{elem.city}</h3>
                              </div>
                          </div>
                      )
                  })
              }
              </div>
              <Footer/>
          </div>
      )
  }
}



// function Cities() {
//   const [cities, setCities]=useState([]);
//   const [busqueda,setBusqueda]=useState("");
//   const [tableCities,setTableCities]=useState([]);

//   const handleChange=e=>{
//     setBusqueda(e.target.value);
//     filtrar(e.target.value);
//   }

//   const filtrar=(terminoBusqueda)=>{
//     var resultadoBusqueda=tableCities.filter((city)=>{
//       if(city.name.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase())){
//         return city;
//       }
//     });
//     setCities(resultadoBusqueda);
//   }

//   useEffect(() => {
//       fetch("http://localhost:4000/api/cities")
//         .then(res => res.json())
//         .then(data => {setCities(data.response.cities);
//                       setTableCities(data.response.cities)})
//         .catch(err => console.error(err.message))
//       },[])

//   return (
//     <div className="main">
//       <div className="ContainerInput">
//         <Input
//           className="FormControl inputBuscar"
//           value={busqueda}
//           placeholder="Search For Name"
//           onChange={handleChange} />
//       </div>
//       <h1>Cities</h1>
//       {cities && cities.map(city => <h2> {city.name} </h2>)}
//     </div>
//   )
  
// }
// export default Cities;







//Hasta acá está bien



// import React, {Component, useEffect, useState} from "react";
// // import { Card } from 'bootstrap-4-react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Cover from '../assets/cities-mundi.png';

// export default class Cities extends Component {
//   constructor(props) {
//       super(props)
//       this.state = { dataCities: [] }
//   }
//   componentDidMount() {
//       axios.get('http://localhost:4000/api/cities')
//           .then(res => this.setState({ dataCities: res.data.response }))
//   }

//   render() {
//       console.log(this.dataCities)
//       return (
//           <div className="container-padre" >
//                 <Header/>
//                 <img className="cover" src={Cover}/>
//               <div className="titulo-container">
//                   <h2>Cities</h2>
//               </div>
//               <div>
//                   <input className="container p-1 mb-3 form-control form-control-lg input" type="text" placeholder="Filter by Cities" />
//               </div>
//               <div className="container-card">
//               {
//                   this.state.dataCities.map((elem, i) => {
//                       return (
//                           <div className="card-city">
//                               <div className="img-div" key={i} ciudad={elem.city}>
//                                   <Link to={`/city/${elem.id}`}>
//                                       <img src={elem.image}></img>
//                                   </Link>
//                               </div>
//                               <div className="text-container" >
//                                   <h3>{elem.city}</h3>
//                               </div>
//                           </div>
//                       )
//                   })
//               }
//               </div>
//               <Footer/>
//           </div>
//       )
//   }
// }