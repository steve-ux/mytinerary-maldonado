import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Input } from 'reactstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export const City = () => {
    const [cities, setCity] = useState([])
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/api/city/'+id)
        .then(res => setCity([res.data.respuesta]))
    },[])
    return (
        <div>
            <Header/>
            <h1 className="title-city">The best destination!</h1>
            {
                cities.map((elem, i) => {
                    return (
                        <div className="city">
                                <div class="container" key={i} ciudad={elem.city}>
                                <img className="image-city" src={elem.image}/>
                                </div>
                                <div className="text-container" >
                                    <h3 className="title-city">{elem.city}</h3>
                                </div>
                            </div>
                    )
                })
            }
            <h4 className="under">Under Construction, sorry.</h4>
            <Link className="cities-btn d-flex justify-content-center" to="/Cities"><button className="back">Back to cities</button></Link>
            <Footer/>
        </div>
    )

}