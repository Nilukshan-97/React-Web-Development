import React from "react";
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Header = () => {
    return (
        <section className="h-wrapper">
            <div  className="flexCenter paddings innerWidth h-container">
                <div data-aos="flip-up" data-aos-duration="5000" data-aos-once="false">
                    <img src="./logo.png" alt="logo" width={100} />
                </div>

                <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className="flexCenter h-menu" >
                    <a href="">HOME</a>
                    <a href="">ACCOMMODATION</a>
                    <a href="">GALLERY</a>
                    <a href="">FACILITIES</a>
                    <a href="">CONTACT</a>
                    <button className="button"> <a href="">Book Direct</a></button>
                   
                </div>
            </div>
        </section>
    )
}

export default Header;