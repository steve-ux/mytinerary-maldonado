import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import Videoloop from "./video/video_loop.mp4";
import Tickets from "../assets/get-your-tickets.png";
import Travel from "../assets/travel-the-world.svg";
import Enjoy from "../assets/enjoy-your-trip.png";
import CarouselExample from "./Carrusel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <video className="video" autoPlay loop muted>
        <source src={Videoloop} type="video/mp4" />
      </video>
      <img src={Logotipo} />
      <h4 className="slogan">
        "Find your perfect trip, designed by insiders who know and love their
        cities!"
      </h4>
      <div className="buttons">
        <Link as={Link} to={"/Cities"}>
          <button className="btn-hover color-9">To fly!</button>
        </Link>
      </div>
      <br />
      <div className="graficos">
        <img className="imgTravel" src={Tickets} />
        <img className="imgTravel" src={Travel} />
        <img className="imgTravel" src={Enjoy} />
      </div>
      <CarouselExample />
    </div>
  );
}

export default Main;
