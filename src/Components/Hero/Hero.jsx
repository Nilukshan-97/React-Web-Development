import React from "react";
import './Hero.css';
import { motion } from "framer-motion";
import AutoImageSlider from "./Slider";


const Hero = () => {
    return (
        
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="flexColStart hero-title">
                            <motion.h1 initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 10, type:"spring" }} className="border-gradient border-gradient-green only-top">
                                WELCOME TO <br />
                                LUXURY HOTEL & SPA <br />
                                COLOMBO
                            </motion.h1>
                        
                    </div>
                    
                    <motion.div initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 15, type:"easeInOut" }} className="hero-des">
                        <span>Stay in one of Colombo’s most charming hotels and enjoy the sophisticated <br /> comforts it has to offer. Book your stay now.</span> <br />
                        <span>When you book directly with us, not only do we guarantee the best rate you will ever get, <br /> but you also get to select 2 more benefits and customise your holiday</span>
                    </motion.div>

                    <motion.div initial={{ x: "-40rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 5, type:"easeIn" }} className="flexCenter search-bar">
                        <label><h4>CHECK IN</h4></label> 
                        <input type="date" name="arrival" value="Today" placeholder="Arrival"/>
                        <label><h2>CHECK OUT</h2></label> 
                        <input type="date" name="departure" data-value="7" value="After one week" placeholder="Departure"/>
                        
                        <button className="button">Check</button>
                
                    </motion.div>
                
                </div>
                
                <div className="flex center hero-right">
                    <motion.div initial={{ x: "15rem", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 15, type:"spring" }} className="image-container">
                            <AutoImageSlider/>
                    </motion.div>
                
                </div>
            </div>

            <motion.div initial={{ y:"5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 20000, type:"spring" }} className="rules">
                    <span className="secondaryText"><b>Check-in time: 3:00 PM</b></span><br />
                    <span className="secondaryText"><b>Check-out time: 12:00 Noon</b></span> <br />
                    <span className="secondaryText"><b>Early check-in and late check-out on request</b></span><br />
                    <span className="secondaryText"><b>We accept American Express, Diner's Club, Master Card, Visa, JCB International.</b></span>  
            </motion.div>
        
        </section>
    )
}

export default Hero;