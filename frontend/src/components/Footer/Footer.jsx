import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">

       
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Delicious food delivered to your doorstep. Fresh ingredients,
            fast delivery, and unforgettable taste.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

       
        <div className="footer-content-middle">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        
        <div className="footer-content-right">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+91 98765 43210</li>
            <li>support@foodTomatoapp.com</li>
          </ul>
        </div>

      </div>

      <hr />
      <p className="footer-copyright">
        © 2026 FoodTomatoApp.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer;
