import React from "react";
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        
        <section className="footer-wrapper">
            <footer>
                <div class="footer-content">
                    <h3>LUXURY HOTEL & SPA</h3>
                    <b><p>Luxury Hotel & Spa Colombo <br /> 25 Galle Face Center Rd, Colombo 80000, Sri Lanka</p></b>
                    <ul class="socials">
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagramSquare /></a></li>
                        <li><a href="#"><ImYoutube2 /></a></li>
                        <li><a href="#"><FaTwitterSquare /></a></li>
                        <li><a href="#"><FaSquareWhatsapp /></a></li>
                    </ul>
                </div>
                <div class="footer-bottom">
                    <p>© 2023 &nbsp; <a href="#">Luxury Hotel & Spa Colombo.</a> &nbsp; All Rights Reserved.</p>
                </div>

            </footer>
        
        </section>
    )
}

export default Footer;