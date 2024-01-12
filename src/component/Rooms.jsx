import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import room1 from "../assets/Room1.svg";
import room2 from "../assets/Room2.svg";
import room3 from "../assets/Room3.svg";
import room4 from "../assets/Room4.svg";
import room5 from "../assets/Room5.svg";
import "./trend.css"

const Rooms = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        50+ Beautiful rooms
        <br />
        inspiration
      </h2>
      <p className="text-xl font-semibold mb-4 text-center">
        Our designer already made a lot of beautiful
        <br />
        prototypes of rooms that inspire you
      </p>
      <Carousel responsive={responsive} containerClass="carousel-container">
        <div className="room-item bg-white border-gray-300 rounded p-4">
          <img src={room1} alt="Room 1" className="w-full h-[372px] p-2" />
          <p className="font-bold">Room 1</p>
        </div>
        <div className="room-item bg-white border-gray-300 rounded p-4">
          <img src={room2} alt="Room 2" className="w-full h-auto p-2" />
          <p className="font-bold">Room 2</p>
        </div>
        <div className="room-item bg-white border-gray-300 rounded p-4">
          <img src={room3} alt="Room 3" className="w-full h-auto p-2" />
          <p className="font-bold">Room 3</p>
        </div>
        <div className="room-item bg-white border-gray-300 rounded p-4">
          <img src={room5} alt="Room 4" className="w-full h-full p-2" />
          <p className="font-bold">Room 4</p>
        </div>
      </Carousel>
      <div className="flex justify-center">
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Rooms;
