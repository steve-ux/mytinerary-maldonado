import Logotipo from "../assets/Mytinerary con nombre sin texto.svg";
import Videoloop from "./video/video_loop.mp4";
import Travel from "../assets/travel-the-world.svg";
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
        cities!"{" "}
      </h4>
      <Link as={Link} to={"/Cities"}>
        <button className="btn btn btn-warning p-3 mt-2" type="button">
          To fly!
        </button>
      </Link>
      <br />
      <img className="imgTravel" src={Travel} />
      <CarouselExample />
    </div>
  );
}

export default Main;
