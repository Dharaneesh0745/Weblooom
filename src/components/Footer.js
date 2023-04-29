// Imported some react-icons.

import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./FooterStyles.css";

import React from 'react';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaHome>
                    <div>
                        <p>SIET, CBE-641016, Tamil Nadu.</p>
                        <p>India.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaPhone>
                        +91 9876543210.
                    </h4>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaMailBulk>
                        dharaneesh0745@gmail.com
                    </h4>
                </div>

            </div>
            <div className="right">
                <h4>About Us</h4>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div className="social">
                    <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem"}}></FaWhatsapp>
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}></FaFacebook>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}></FaTwitter>
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}></FaLinkedin>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer