import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import packagebg from "../assets/packagepg.svg";
import pack1 from "../assets/pack1.svg";
import pack2 from "../assets/pack2.svg";
import pack3 from "../assets/pack3.svg";
import pack4 from "../assets/pack4.svg";

const TogglePack = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="relative">
        <img
          src={packagebg}
          alt="package"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            All the furniture you can take.
            <br />
            One Price
          </span>
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
      </div>
    </>
  );
};

export default TogglePack;
