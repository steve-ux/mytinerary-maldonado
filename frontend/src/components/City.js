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
        axios.get('http://localhost:4000/api/City/'+ id)
        .then(res => setCity([res.data.response]))
    },[])
    return (
        <div>
            <Header/>
            <h1>The best destination!</h1>
            {
                cities.map((elem, i) => {
                    return (
                        <div className="card-city">
                                <div className="img-div" key={i} ciudad={elem.city}>
                                <img src={elem.image}/>
                                </div>
                                <div className="text-container" >
                                    <h3>{elem.city}</h3>
                                </div>
                            </div>
                    )
                })
            }
            <Link className="cities-btn" to="/Cities"><button>Back to cities</button></Link>
            <h4>Under Construction</h4>
            <Footer/>
        </div>
    )

}