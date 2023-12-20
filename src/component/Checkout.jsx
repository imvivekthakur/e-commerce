import React from "react";
import DefaultNavbar from "./Default_Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Checkout = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0b3JlfGVufDB8fDB8fHww"
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            Checkout
          </span>
        </h1>
      </div>
      
      <div className="w-[90%] mx-auto flex flex-wrap my-10">
          <div className="w-full md:w-7/12">
            <h1 className="text-2xl font-bold text-center my-4">
              Billing details
            </h1>
            <div className="flex flex-wrap justify-between">
              <div className="text-primary">
                <div className="text-xs py-2">First Name</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="text-primary">
                <div className="text-xs py-2">Last Name</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="text-primary">
                <div className="text-xs py-2">Email</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="text-primary">
                <div className="text-xs py-2">Phone</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Country</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  placeholder="Country"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Street Address</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">City</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Pin Code</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  placeholder="Pin Code"
                />
              </div>
            </div>
        </div>
        <div className="bg-primary rounded-lg md:my-0 my-8 mx-auto w-full md:w-4/12 h-max text-white">
          <div className="text-2xl font-bold text-center p-4">Cart Total</div>
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
              <NavLink to="/checkout">Place order</NavLink>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;
