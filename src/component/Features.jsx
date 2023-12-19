import React from "react";
import customer from "../assets/customer.svg";
import guarntee from "../assets/guarantee.svg";
import trophy from "../assets/trophy.svg";
import shipping from "../assets/shipping.svg";

const Features = () => {
  return (
    <>
      <div className="w-[90%] mx-auto m-4">
        <div className="flex flex-wrap justify-center sm:flex-column  ">
          <div className="text-center w-full lg:w-1/4 p-6">
            <img
              src={trophy}
              alt="trophy"
              className="mx-auto p-2 rounded-xl  w-16 h-16"
            />
            <div>
              <h1 className=" text-[19.5px] font-bold p-4">High Quality</h1>
              <p className="text-center text-[#898989]">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="text-center w-full lg:w-1/4 p-6">
            <img
              src={guarntee}
              alt="trophy"
              className="mx-auto p-2 rounded-xl  w-16 h-16 "
            />
            <div>
              <h3 className="text-[19.5px] font-bold p-4">
                Warranty Protection
              </h3>
              <p className="text-center text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="text-center w-full lg:w-1/4 p-6 ">
            <img
              src={shipping}
              alt="trophy"
              className="mx-auto p-2 rounded-xl w-16 h-16 "
            />
            <div>
              <h3 className="text-[19.5px] font-bold p-4">Free Shipping</h3>
              <p className="text-center text-[#898989]">Order over 150 $</p>
            </div>
          </div>
          <div className="text-center w-full lg:w-1/4 p-6">
            <img
              src={customer}
              alt="trophy"
              className="mx-auto p-2 rounded-xl  w-16 h-16 "
            />
            <div>
              <h3 className="text-[19.5px] font-bold p-4">24 / 7 Support</h3>
              <p className="text-center text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
