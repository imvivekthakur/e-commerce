import React from "react";
import contactImg from "../assets/contactImg.svg";
import DefaultNavbar from "./Default_Navbar";
import Features from "./Features";
import Footer from "./Footer";
const Blog = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="mx-auto w-full md:w-[100%] relative">
        <img
          src={contactImg}
          alt="contact"
          className="w-full h-auto object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            Blog
          </span>
        </h1>
      </div>
      {/* <Features />
      <Footer /> */}
    </>
  );
};

export default Blog;
