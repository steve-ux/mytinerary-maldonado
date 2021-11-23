import React from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
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