import React, { useState } from "react";
import Products from "./Products";
import DynamicProducts from "./DynamicProducts/DynamicProducts";

const Items = (allProducts) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="text-center m-8">
        <h1 className="text-4xl text-primary font-bold m-3">
          Most popular Rental Items
        </h1>
        <p>Lorem ipsum dolor sit amet. </p>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto">
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 1 ? "text-primary border-primary font-bold" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Popular
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 2 ? "text-primary border-primary font-bold" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Furniture
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 3 ? "text-primary border-primary font-bold" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Decorative Items
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 4 ? "text-primary border-primary font-bold" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          Bikes
        </div>
      </div>
      {/* <Products/> */}
      <DynamicProducts/>
      <div className="text-center my-6">
        <button className="border-2 border-primary text-primary px-6 py-2 rounded-md">
          Show More
        </button>
      </div>
    </>
  );
};

export default Items;
