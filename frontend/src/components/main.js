import Logotipo from '../assets/Mytinerary con nombre sin texto.svg';
import Videoloop from './video/video_loop.mp4';
import Travel from '../assets/travel-the-world.svg';
import CarouselExample from '../components/carrusel';

function Main(){
    return (
        <div className="main">
            <video autoPlay loop muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "40%",
                    height: "90%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}>
                    <source src={Videoloop} type="video/mp4"/>
                </video>
            <img src={Logotipo}/>
            <p className="slogan">"Find your perfect trip, designed by insiders who know and love their cities!" </p>
            <a href="https://example.com/" target="__blank"><button className="btn btn-primary" type="button">To fly!</button></a><br/>
            <img className="imgTravel" src={Travel}/>
            <CarouselExample/>
        </div>
        
    )
}

export default Main; 