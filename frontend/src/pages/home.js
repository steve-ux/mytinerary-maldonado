import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component{
    render(){
        return(
            <div>                
                <Header/>
                <Main/>
                <Footer/>                
            </div>
        );
    }
}