import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import packagebg from "../assets/packagepg.svg";
import pack1 from "../assets/pack1.svg";
import pack2 from "../assets/pack2.svg";
import pack3 from "../assets/pack3.svg";
import pack4 from "../assets/pack4.svg";
import DefaultNavbar from "./Default_Navbar";
import calender from "../assets/calender.svg";
import location from "../assets/location.svg";
import car from "../assets/car.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import room1 from "../assets/Room1.svg";
import room2 from "../assets/Room2.svg";
import room3 from "../assets/Room3.svg";
import room4 from "../assets/Room4.svg";
import room5 from "../assets/Room5.svg";

const TogglePack = () => {
  const [enabled, setEnabled] = useState(false);
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
    <>
      <DefaultNavbar />
      <div className="relative">
        <img
          src={packagebg}
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 w-full mx-auto transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <div className="text-white text-center leading-relaxed drop-shadow text-4xl font-bold">
            All the furniture you can take.
            <br />
            One Price
          </div>
        </h1>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-primary text-4xl font-bold mt-10">
            INVESTMENT OFFERS
          </h1>
          <p className="text-primary text-md mb-5">Choose your plans</p>
          <p className="text-gray-600 text-center">
            You cannot withdraw from your principal balance until at least one
            month has passed from the deposit date.
            <br /> However, you can withdraw the profits earned during this
            period.
          </p>
          <div className="flex flex-row items-center">
            <span className="text-lg font-medium ml-2">
              {enabled ? "Annually" : "Monthly"}
            </span>
            <label className="cursor-pointer flex items-center">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
              />
              <div
                onClick={() => {
                  setEnabled(!enabled);
                }}
                className={`relative m-5 mr-2 flex items-center rounded-full w-20 h-10 bg-primary peer cursor-pointer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9 after:w-10 after:transition-transform peer-checked:transform translate-x-full`}
              ></div>
            </label>
          </div>

          {enabled ? (
            <div className="flex flex-row justify-center">
              <div className="card-Annually">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack1}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Basic</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$11</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack2}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Lite</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$25</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack3}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Premium</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$35</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack4}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Luxury</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$121</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-center">
              <div className="card-half">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack1}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Basic</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$11</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack2}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Lite</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$25</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack3}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Premium</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$35</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                  <div className="bg-white text-black border rounded-lg mx-auto text-center">
                    <img
                      className="h-80 w-80 mx-auto"
                      src={pack4}
                      alt="random"
                    />
                    <div className="text-2xl font-bold pt-2">Luxury</div>
                    <div className="p-2">
                      <ul
                        className="m-5"
                        style={{ borderTop: "2px solid black" }}
                      >
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Private Bathroom
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Mini Refrigerator
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Flat-screen TV
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          In-Room Heating
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Hairdryer
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          High Speed Free WiFi
                        </li>
                        <li className="p-3 text-left font-bold flex items-center">
                          <GoDotFill className="text-primary text-base mr-2" />{" "}
                          Iron and Ironing Board
                        </li>
                      </ul>
                      <p className="text-center text-md">
                        From <b className="text-4xl font-bold">$121</b> /night
                      </p>
                      <button className="w-32 lg:w-40 my-3 lg:my-5 mx-auto text-white bg-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        Book Now
                      </button>
                      <p className="text-center text-xs text-gray-500">
                        No booking or credit card fees!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="max-w-screen-lg mx-auto p-8 my-10">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Unlimited opportunities to furnish your home.
          </h2>
          <p className="text-xl font-semibold mb-4 text-center">
            Take home up to 15 products from a catalogue of 150+ products.
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
        <div className="w-[90%] mx-auto my-20">
          <div className="text-center m-8">
            <h1 className="text-2xl font-bold m-3">
              Unlimited opportunities to furnish your home
            </h1>
            <p>
              Take home up to 15 products from a catalogue of 150+ products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
            <div>
              <div className="w-20 h-20 rounded-full bg-primary mx-auto my-2"></div>
              <h2 className="text-center text-lg font-bold my-1">
                Easy on the wallet
              </h2>
              <p className="text-center ">
                Basic products worth more than Rs 2L for 6 months at just ₹4,199
                per month.
              </p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-primary mx-auto my-2"></div>
              <h2 className="text-center text-lg font-bold my-1">
                Easy on the wallet
              </h2>
              <p className="text-center ">
                Basic products worth more than Rs 2L for 6 months at just ₹4,199
                per month.
              </p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-primary mx-auto my-2"></div>
              <h2 className="text-center text-lg font-bold my-1">
                Easy on the wallet
              </h2>
              <p className="text-center ">
                Basic products worth more than Rs 2L for 6 months at just ₹4,199
                per month.
              </p>
            </div>
            <div>
              <div className="w-20 h-20 rounded-full bg-primary mx-auto my-2"></div>
              <h2 className="text-center text-lg font-bold my-1">
                Easy on the wallet
              </h2>
              <p className="text-center ">
                Basic products worth more than Rs 2L for 6 months at just ₹4,199
                per month.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto m-8">
          <div className="text-center m-8">
            <h1 className="text-4xl text-[#CDA274] font-bold m-3">
              How Unlimited Works
            </h1>
            <p>
              A high-performing web-based car rental system for any rent-a-car
              company and website
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="text-center w-full lg:w-1/3 p-6">
              <img
                src={location}
                alt="location"
                className="mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              />
              <h3 className="text-2xl font-bold p-4">Choose Location</h3>
              <p className="text-center">
                Choose from Basic, Lite, Premium or Luxury subscription plans.
              </p>
            </div>
            <div className="text-center w-full lg:w-1/3 p-6">
              <img
                src={calender}
                alt="location"
                className="mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              />
              <h3 className="text-2xl font-bold p-4">Choose Location</h3>
              <p className="text-center">
                Pick furniture and appliances to add to your cart and pay the
                half yearly subscription fee.
              </p>
            </div>
            <div className="text-center w-full lg:w-1/3 p-6">
              <img
                src={car}
                alt="location"
                className="mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
              />
              <h3 className="text-2xl font-bold p-4">Choose Location</h3>
              <p className="text-center">
                Submit the required documents and complete onboarding. We'll
                deliver your products within 7-10
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TogglePack;
