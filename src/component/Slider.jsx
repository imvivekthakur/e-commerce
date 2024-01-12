import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import Modal from "react-modal";
import Buy from "./Buy";
import Rent from "./Rent";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
};
const customStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    position: "static",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "800px",
    padding: "20px",
    border: "none",
    backgroundColor: "white",
    borderRadius: "10px",
    outline: "none",
  },
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "24px",
  zIndex: 2,
};

const Slider = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  return (
    <div style={{ position: "relative" }}>
      <div style={overlayStyle}>
        <div
          id="box"
          className="text-left p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16 mt-10 rounded-lg"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl  font-semibold p-2 sm:p-4 text-black">
            Rent High-Quality
            <br />
            Appliances, Furnitures
            <br />& Bikes
          </h1>
          <p className="text-sm sm:text-md md:text-lg font-semibold p-2 sm:p-4 text-left text-black">
            Plan and book your perfect trip with expert advice, travel tips,
            <br />
            destination information and inspiration from us!
          </p>
          <div className="flex flex-col sm:flex-row">
            <button
              onClick={openModal}
              className="flex items-center text-primary mr-3 mt-3 border rounded-lg p-2 sm:p-3 hover:bg-primary hover:text-white hover:scale-110 transition-transform"
            >
              <CiCircleCheck className="mr-2" /> Buy
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div>
                <button
                  onClick={closeModal}
                  className="bg-red-500 border rounded-lg absolute text-white p-2 mt-4"
                >
                  x
                </button>
                <Buy className="z-50" />
              </div>
            </Modal>

            <button
              onClick={openModal1}
              className="flex items-center text-primary mr-3 mt-3 border rounded-lg p-2 sm:p-3 hover:bg-primary hover:text-white hover:scale-110 transition-transform"
            >
              <CiClock2 className="mr-2" /> Rent
            </button>
            <Modal
              isOpen={modalIsOpen1}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal1}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div>
                <button
                  onClick={closeModal1}
                  className="bg-red-500 border rounded-lg text-white p-2 mt-10  "
                >
                  x
                </button>
                <Rent className="z-50" />
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <Carousel interval={1000} showIndicators={false}>
        <div
          style={{
            height: "600px",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
          }}
        >
          <img src={slider1} style={imageStyle} alt="Slider 1" />
        </div>
        <div style={{ position: "relative", height: "600px" }}>
          <img src={slider2} style={imageStyle} alt="Slider 2" />
        </div>
        <div style={{ position: "relative", height: "600px" }}>
          <img src={slider3} style={imageStyle} alt="Slider 3" />
        </div>
        <div style={{ position: "relative", height: "600px" }}>
          <img src={slider4} style={imageStyle} alt="Slider 4" />
        </div>
        <div style={{ position: "relative", height: "600px" }}>
          <img src={slider5} style={imageStyle} alt="Slider 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
