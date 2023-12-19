import React from "react";
import DefaultNavbar from "./Default_Navbar";
import contactImg from "../assets/contactImg.svg";
import addressImg from "../assets/address.svg";
import phoneImg from "../assets/phone.svg";
import clockImg from "../assets/clock.svg";
import Features from "./Features";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="mx-auto w-full md:w-[100%]">
        <img
          src={contactImg}
          alt="contact"
          className="w-full h-auto object-cover"
        />
        <div className="text-center m-8 pb-9">
          <h1 className="text-4xl text-[#CDA274] font-bold m-3">
            Get In Touch With Us
          </h1>
          <p className="font-plus-jakarta-sans text-center text-base font-normal leading-5 tracking-normal mt-5 pt-2 text-[#9F9F9F] mx-auto text-center md:w-[50%]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex w-full md:w-[90%] flex-col md:flex-row p-4 items-center mx-auto justify-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-[80%] ">
          <div className=" md:w-1/2 pr-0 md:pr-8">
            <div className="mb-4 p-4 flex items-center">
              <img src={addressImg} alt="" className="mr-8" />
              <div>
                <strong>Address</strong>
                <p>
                  236 5th SE Avenue, New York NY10000,
                  <p>United States</p>
                </p>
              </div>
            </div>

            <div className="mb-4 p-4 flex items-center">
              <img src={phoneImg} alt="" className="mr-8 -ml-2" />
              <div>
                <strong>Phone</strong>
                <p>
                  Mobile: +(84) 546-6789
                  <p>Hotline: +(84) 456-6789</p>
                </p>
              </div>
            </div>
            <div className="mb-4 p-4 flex items-center">
              <img src={clockImg} alt="" className="mr-8" />
              <div>
                <strong>Working time</strong>
                <p>
                  Monday-Friday: 9:00 - 22:00
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form action="#">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 w-full border rounded-md border-primary"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 w-full border-primary rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="mt-1 p-3 w-full border-primary rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-3 w-full border-primary rounded-md"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-primary text-white py-2 mt-4 px-4 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
};

export default Contact;