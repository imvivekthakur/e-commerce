import React from "react";
import fbImg from "../assets/Facebook.svg";
import instaImg from "../assets/Instagram.svg";
import twitterImg from "../assets/Twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-plus-jakarta-sans">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl text-center font-bold mb-4">Renting Carnival</h2>
            <p className="font-medium text-center">
              Our vision is to provide convenience and help increase your sales business.
            </p>
            <div className="flex mt-8 justify-center">
          <img src={fbImg} alt="Facebook" className="w-6 h-6 mr-4 hover:scale-150 hover:cursor-pointer" />
          <img src={twitterImg} alt="Twitter" className="w-6 h-6 mr-4 hover:scale-150 hover:cursor-pointer" />
          <img src={instaImg} alt="Instagram" className="w-6 h-6 hover:scale-150 hover:cursor-pointer" />
        </div>
          </div>

          <div>
            <h2 className="text-3xl text-center font-bold mb-4">Links</h2>
            <ul>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer ">Home</li>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer ">Shop</li>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer ">About</li>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer ">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-center font-bold mb-4">Help</h2>
            <ul>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer">Payment Options</li>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer">Returns</li>
              <li className="font-medium p-5 text-center hover:underline hover:cursor-pointer">Privacy Policies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
            <p className="font-medium">Enter Your Email Address</p>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Your Email"
                className="border rounded border-white p-2 mr-2 w-2/3"
              />
              <button className="bg-white hover:bg-red-600 rounded-lg hover:text-white text-primary py-2 px-4 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="my-8 border-white" />
        <p className="text-sm text-center">&copy; 2023 Renting Carnival. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
