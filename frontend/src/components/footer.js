import "bootstrap/dist/css/bootstrap.min.css";
import Instagram from '../assets/logo-instagram.png';
import YouTube from '../assets/logo-youtube.png';
import Facebook from '../assets/logo-facebook.png';
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="span">
        <span>MyTinerary 2021 | All right reserved.</span>
      </div>
      <div>
          <a href="https://www.instagram.com/mytinerary/" target="_blank"><img className="socialNetworksIG" src={Instagram}/></a>
          <a href="https://www.youtube.com/" target="_blank"><img className="socialNetworks" src={YouTube}/></a>
          <a href="https://www.facebook.com/mytinerary" target="_blank"><img className="socialNetworks" src={Facebook}/></a>
      </div>
      <div className="menu">
        <dl>
        <Link as={Link} to={"/"}><dt>Home</dt></Link>
          <Link as={Link} to={"/Cities"}><dt>Cities</dt></Link>
        </dl>
      </div>
    </footer>
  );
}

export default Footer;
