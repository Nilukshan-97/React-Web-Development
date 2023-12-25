import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Rooms.css';
import 'swiper/css';
import data from './Details.json';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Rooms = () => {
    return (
       <section className="r-wrapper">
        <div className="padding innerWidth r-comtaimer">
            <div className="r-head flexColStart">
                <span className="primaryText">Rooms</span>
            </div>

            <Swiper slidesPerView={3}
                    breakpoints={{ 480: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 750: { slidesPerView: 3 },1100: { slidesPerView: 4 } }}
                    on={{
                    slideChange: () => console.log('slide changed'),
                    progress: (s, progress) => console.log(`progress is ${progress}`),
                    }} >

                {data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div data-aos="flip-right" data-aos-duration="1000" data-aos-once="false" className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className="secondaryText">
                                    <b>
                                    <span style={{color:"orange"}}>$</span>&nbsp;
                                    <span style={{color:"black"}}>{card.price}</span>
                                    </b>
                                </span>

                                <span>
                                    <span className="primaryText">{card.name}</span> <br />
                                    <span className="secondaryText" style={{color:"black"}}> <p>
                                    {card.details}</p></span>
                                </span>
                                <div>
                                    <button href="" className="button">Book Now {">"} </button>
                                </div>
                               
                            </div>
                            <sliderButtons/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
       </section>
    );
};




export default Rooms;