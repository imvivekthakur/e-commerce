import React from "react";
import furniture from "../assets/furniture.svg";
import appliances from "../assets/appliances.svg";
import stars from "../assets/stars.svg";
import bike from "../assets/motorbike.svg";
import { NavLink } from "react-router-dom";

const Buy = () => {
  return (
    <div className="max-h-screen overflow-auto">
      <h1 className="text-4xl font-bold text-primary text-center p-5">Buy</h1>
      <p className="text-2xl font-semibold text-center p-5">
        Own Brand New or Refurbished furniture for your homes.
        <br />
        Choose from over 2000 Products.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <NavLink to="/furniture">
          <button className="flex flex-col items-center m-4 p-4 hover:shadow-md hover:scale-90 hover:border hover:border-gray-500 hover:transition duration-300">
            <img src={furniture} alt="furniture-image" className="m-10"></img>
            <span>Furniture</span>
          </button>
        </NavLink>
        <NavLink to='/decorative-items'>
        <button className="flex flex-col items-center m-4 p-4 hover:shadow-md hover:scale-90 hover:border hover:border-gray-500 hover:transition duration-300">
          <img src={appliances} alt="decorative items" className="m-10"></img>
          <span>Decorative Items</span>
        </button>
        </NavLink>

        <NavLink to="/home-appliance">
          <button className="flex flex-col items-center m-4 p-4 hover:shadow-md hover:scale-90 hover:border hover:border-gray-500 hover:transition duration-300">
            <img src={stars} alt="decorations" className="m-10"></img>
            <span>Home Appliances</span>
          </button>
        </NavLink>

        <NavLink to="/vehicles">
          <button className="flex flex-col items-center m-4 p-4 hover:shadow-md hover:scale-90 hover:border hover:border-gray-500 hover:transition duration-300">
            <img src={bike} alt="Vehicles" className="m-10"></img>
            <span>Vehicles</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Buy;
