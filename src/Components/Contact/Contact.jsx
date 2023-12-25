import React from "react";
import './Form.css';



const Contact = () => {
    return (
        
        <section className="contact-wrapper">
            <div  className="paddings innerWidth flexCenter C-container">
                <div className="flex center">
                <div class="container">
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" class="row">
                            <h1>Contact Us</h1>
                    </div>
                    
                    <div class="row input-container">
                            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="false">
                            <div class="col-xs-12">
                                <div class="styled-input wide">
                                    <input type="text" required />
                                    <label>Name</label> 
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="styled-input">
                                    <input type="text" required />
                                    <label>Email</label> 
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="styled-input" style={{float:'right'}}>
                                    <input type="text" required />
                                    <label>Phone Number</label> 
                                </div>
                            </div>
                            <div class="col-xs-12">
                                <div class="styled-input wide">
                                    <textarea required></textarea>
                                    <label>Message</label>
                                </div>
                            </div>
                            </div>
                            <div data-aos="zoom-out" data-aos-duration="5000" data-aos-once="false" class="col-xs-12">
                                <button className="button">Send Message</button>
                            </div>
                    </div>
                </div>
                </div>        
            </div>
        </section>
    )
}

export default Contact;