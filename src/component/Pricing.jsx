import React from "react";
import { NavLink } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <div className="bg-primary rounded-lg lg:my-0 my-8 lg:w-[90%] mx-auto text-white">
        <div className="w-[90%] mx-auto font-bold max-w-xs">
          <div className="py-1 flex justify-between">
            <span>Item1</span> <span>$100</span>
          </div>
          <div className="py-1 flex justify-between">
            <span>Item2</span> <span>$100</span>
          </div>
          <div className="py-1 flex justify-between">
            <span>Item3</span> <span>$100</span>
          </div>
          <div className="py-1 flex justify-between">
            <span>Total</span> <span>$300</span>
          </div>
        </div>
        <div className="text-center">
          <button className="text-primary bg-white px-4 py-2 rounded-lg my-6 hover:scale-110 duration-200">
            <NavLink to="/checkout">Checkout</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Pricing;
