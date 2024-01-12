import React from "react";
import bikerec from "../assets/bikerec.png";
import rentalLogo from "../assets/rentalLogo.svg";
import { FiMapPin } from "react-icons/fi";

const RentalSubscription = () => {
  return (
    <div className="flex justify-center items-center my-10 ">
    <div className=" flex flex-col md:flex-row justify-center gap-20 mx-auto mt-5">
      <div className="md:w-1/2 shadow-2xl p-5 rounded-lg">
        <div className="bg-primary rounded-lg flex sm:flex-row justify-between">
          <div
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 89%, 62% 89%, 50% 100%, 38% 89%, 0 90%)" }}
            className="bg-white rounded-lg p-5 w-full flex flex-col m-5 justify-center md:w-1/2"
          >
            <p className="text-black text-xl text-center font-bold">Rentals</p>
            <p className="text-black text-md text-center font-semibold">
              For Hours & Days
            </p>
          </div>
          <div
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 89%, 62% 89%, 50% 100%, 38% 89%, 0 90%)" }}
            className="rounded-lg p-5 w-full flex flex-col m-5 justify-center md:w-1/2"
          >
            <p className="text-white text-center text-xl font-bold">
              Subscriptions
            </p>
            <p className="text-white text-center text-md font-semibold">
              For more than one month
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <img src={rentalLogo} alt="logo" />
        </div>
        <p className="text-center my-3 text-gray-500">Bike Rental</p>
        <div className="">
          <div className="border w-full rounded-lg hover:bg-primary text-black transition duration-[0.3s] hover:text-white">
            <button className="flex m-5 font-bold ">
              <FiMapPin className="text-2xl mr-2" /> Location
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              className="border p-5 mt-2 w-full md:w-1/2 rounded-lg"
              placeholder="Start Time"
            />
            <input
              type="text"
              className="border p-5 mt-2 w-full md:w-1/2 rounded-lg"
              placeholder="End Time"
            />
          </div>
        </div>
        <button className="border w-full p-3 mt-2 rounded-full hover:bg-primary text-black transition duration-[0.3s] hover:text-white">Search</button>
      </div>
      <div className="md:w-1/2 mt-10">
        <img src={bikerec} alt="" className="w-full rounded-lg" />
      </div>
    </div>
    </div>
  );
};

export default RentalSubscription;