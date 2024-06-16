import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">

      <div className="footer-content">

        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae
            reiciendis commodi odio ratione modi ea voluptate rem? Tenetur
            reprehenderit, repudiandae aliquam vitae iusto perspiciatis sint
            officiis. Perferendis, mollitia vero.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>

        <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      
      </div>

      <hr />

      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
      
    </div>
  );
}

export default Footer;
