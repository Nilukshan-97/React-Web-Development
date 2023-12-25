import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Form.css';

const AutoImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the duration between slides (in milliseconds)
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % settings.slidesToShow);
    }, settings.autoplaySpeed);

    return () => clearInterval(interval);
  }, [settings.autoplaySpeed]);

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="./Contact 1.png" alt="Slide 1"/>
        </div>
      </Slider>
      <p>Current Slide: {currentSlide + 1}</p>
    </div>
  );
};

export default AutoImageSlider;