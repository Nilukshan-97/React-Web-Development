import React from "react";
import './Partner.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Partner = () => {
    return (
        <section className="c-wrapper">
                <h1 className="primaryText">Our Valuable Partners</h1>
            <div className="paddings innerWidth flexCenter c-container">  
                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false" ><img src="./partner 1.png" alt="partner" /></div>
                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false"><img src="./partner 2.png" alt="partner" /></div>
                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false"><img src="./partner 3.png" alt="partner" /></div>
                <div data-aos="flip-up" data-aos-duration="1000" data-aos-once="false"><img src="./partner 4.png" alt="partner" /></div>
            </div>
        
        </section>
    )
}

export default Partner;