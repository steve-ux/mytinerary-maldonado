import "bootstrap/dist/css/bootstrap.min.css";
import Instagram from '../assets/logo-instagram.png';
import YouTube from '../assets/logo-youtube.png';
import Facebook from '../assets/logo-facebook.png';


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
      <div>
        <span>Call us: <a href="tel: +1 408 20 3500 0202">+1 408 20 3500 0202</a></span>
      </div>
      <div className="menu">
        <dl>
          <dt>Home</dt>
          <a href= "https://example.com/" target="_blank"><dt>Cities</dt></a>
        </dl>
      </div>
    </footer>
  );
}

export default Footer;
