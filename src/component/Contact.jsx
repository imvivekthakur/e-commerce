import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import contactImg from "../assets/contactImg.svg";
import addressImg from "../assets/address.svg";
import phoneImg from "../assets/phone.svg";
import clockImg from "../assets/clock.svg";
import Features from "./Features";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { contactFormThunk } from "../redux/contactSlice";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const data = {
    name,
    email,
    phone,
    message,
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(contactFormThunk(data))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setEmail("");
          setName("");
          setPhone("");
          setMessage("");
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };
  return (
    <>
      <DefaultNavbar />
      <div className="relative">
        <img
          src={contactImg}
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            Contact Us
          </span>
        </h1>
      </div>
      <div className="mx-auto w-full md:w-[100%]">
        <div className="text-center m-8 pb-9">
          <h1 className="text-4xl text-[#CDA274] font-bold m-3">
            Get In Touch With Us
          </h1>
          <p className="font-plus-jakarta-sans text-base font-normal leading-5 tracking-normal mt-5 pt-2 text-[#9F9F9F] mx-auto text-center md:w-[50%]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="flex w-full md:w-[70%] flex-col md:flex-row p-4 items-center mx-auto justify-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-[80%] ">
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
            <form onSubmit={submit}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  value={phone}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="mt-1 p-3 w-full border-primary rounded-md"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center"
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
      <ToastContainer />
    </>
  );
};

export default Contact;
