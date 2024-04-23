import React from "react";
import { IoSend } from "react-icons/io5";
import "./Footer.css";
import footerDowland from "../../images/footer-dowland.svg";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-1">
            <h1>Exclusive</h1>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="footer-input">
              <input type="text" placeholder="Enter your email" />
              <IoSend />
            </div>
          </div>
          <div className="footer-1">
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="footer-1">
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="footer-1">
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="footer-1">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <img src={footerDowland} alt="" />
            <div className="footer-icons">
              <LuFacebook />
              <SlSocialTwitter />
              <FaInstagram />
              <SlSocialLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
