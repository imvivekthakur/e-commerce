import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slider1 from "../Images/slider-1.jpg";
import slider2 from "../Images/slider2.jpg";
import slider3 from "../Images/slider3.jpg";
import slider4 from "../Images/slider4.jpg";
import slider5 from "../Images/slider5.jpg";

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex:1
};

const Slider = () => {
  return (
    <Carousel  interval={1000}>
      <div style={{ height: '600px' }}>
        <img src={slider1} style={imageStyle} alt="Slider 1" />
      </div>
      <div style={{ height: '600px' }}>
        <img src={slider2} style={imageStyle} alt="Slider 2" />
      </div>
      <div style={{ height: '600px' }}>
        <img src={slider3} style={imageStyle} alt="Slider 3" />
      </div>
      <div style={{ height: '600px' }}>
        <img src={slider4} style={imageStyle} alt="Slider 4" />
      </div>
      <div style={{ height: '600px' }}>
        <img src={slider5} style={imageStyle} alt="Slider 5" />
      </div>
    </Carousel>
  );
};

export default Slider;

