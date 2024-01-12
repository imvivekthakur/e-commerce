import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-[#CDA274] font-bold m-8 text-center">
        Browse The Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <NavLink to="/furniture">
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200"
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Bedroom"
            />
          </NavLink>
          <div className="text-center m-4 font-bold text-xl">Furniture</div>
        </div>
        <div>
          <NavLink to="/popular">
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200"
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Bedroom"
            />
          </NavLink>
          <div className="text-center m-4 font-bold text-xl">Popular</div>
        </div>
        <div>
          <NavLink to="/decorative-items">
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200"
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Bedroom"
            />
          </NavLink>
          <div className="text-center m-4 font-bold text-xl">
            Decorative Items
          </div>
        </div>
        <div>
          <NavLink to="/vehicles">
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200"
              src="https://images.unsplash.com/photo-1552642762-f55d06580015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Bedroom"
            />
          </NavLink>
          <div className="text-center m-4 font-bold text-xl">Vehicles</div>
        </div>
        <div>
          <NavLink to="/home-appliance">
            <img
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 duration-200"
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Bedroom"
            />
          </NavLink>
          <div className="text-center m-4 font-bold text-xl">Home Appliance</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
