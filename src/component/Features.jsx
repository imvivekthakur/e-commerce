import React from "react";
import customer from "../assets/customer.svg";
import guarntee from "../assets/guarantee.svg";
import trophy from "../assets/trophy.svg";
import shipping from "../assets/shipping.svg";

const Features = () => {
  return (
    <>
      <div className="w-[90%] mx-auto m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto  ">
          <div className="flex w-fit my-4">
            <img
              src={trophy}
              alt="trophy"
              className="mx-auto p-2 rounded-xl w-16 h-16"
            />
            <div>
              <h1 className="text-[19.5px] font-bold">High Quality</h1>
              <p className="text-[#898989]">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex w-fit my-4">
            <img
              src={guarntee}
              alt="gurantee"
              className="mx-auto p-2 rounded-xl w-16 h-16"
            />
            <div>
              <h1 className="text-[19.5px] font-bold">Renting Carnival Warrantly <br />on New Products</h1>
              
            </div>
          </div>
          <div className="flex w-fit my-4">
            <img
              src={shipping}
              alt="shipping"
              className="mx-auto p-2 rounded-xl w-16 h-16"
            />
            <div>
              <h1 className="text-[19.5px] font-bold">Free Shipping</h1>
              <p className="text-[#898989]">
                Products over Rs 10000
              </p>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </>
  );
};

export default Features;
