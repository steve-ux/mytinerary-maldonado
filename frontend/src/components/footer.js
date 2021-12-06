import "bootstrap/dist/css/bootstrap.min.css";
import Instagram from "../assets/logo-instagram.png";
import Twitter from "../assets/logo-twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="span">
        <span>MyTinerary 2021 | All right reserved.</span>
      </div>
      <div>
        <a href="https://www.instagram.com/mytinerary/" target="_blank">
          <img className="socialNetworksIG" src={Instagram} />
        </a>
        <a href="https://www.twitter.com/mytinerary" target="_blank">
          <img className="socialNetworks" src={Twitter} />
        </a>
      </div>
      <div className="menu">
        <dl>
          <Link as={Link} to={"/"}>
            <dt>Home</dt>
          </Link>
          <Link as={Link} to={"/Cities"}>
            <dt>Cities</dt>
          </Link>
        </dl>
      </div>
    </footer>
  );
}

export default Footer;
