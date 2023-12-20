import React, { useEffect } from "react";
import DefaultNavbar from "./Default_Navbar";
import CartItems from "./CartItems";
import Pricing from "./Pricing";
import Footer from "./Footer";

const Cart = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
            Cart
          </span>
        </h1>
      </div>
      <div className="md:w-[90%] mx-auto flex flex-wrap my-10">
        <div className="w-[95%] mx-auto lg:w-2/3 border-2 border-primary rounded-lg overflow-hidden">
          <div className="bg-secondary">
            <h1 className="text-2xl font-bold px-4 py-6 w-max mx-auto">
              Buy Cart
            </h1>
          </div>
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <div className="w-[95%] mx-auto max-w-md lg:w-1/3">
          <Pricing />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
