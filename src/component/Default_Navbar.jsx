import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Heart from "../assets/Heart.png";
import Cart from "../assets/Cart.png";
import Suggestions from "./Suggestions";
import "./Default_Navbar.css";

const DefaultNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-[#CDA274] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            exact
            className="flex items-center space-x-3 rtl:space-x-reverse"
            activeClassName="active-link"
          >
            <img src={Logo} alt="Logo" className="h-14" />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse items-center md:space-y-4">
              <li className="mb-2 md:mb-0" style={{ marginTop: "17px" }}>
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active-link"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-2 md:mb-0">
                <NavLink
                  to="/shop"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Shop
                </NavLink>
              </li>
              <li className="mb-2 md:mb-0">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  About
                </NavLink>
              </li>
              <li className="mb-2 md:mb-0">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Contact
                </NavLink>
              </li>
              <li className="flex items-center mt-5">
                <Suggestions />
              </li>
              <li className="mb-2 md:mb-0">
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Login
                </NavLink>
              </li>
            </ul>

            <div className="flex flex-row items-center justify-center">
              <NavLink to="/wishlist">
                <button className="ml-4">
                  <img
                    src={Heart}
                    alt="Heart Image"
                    className="w-6 h-6 hover:scale-125 min-w-[24px] min-h-[24px] sm:mx-auto mt-5"
                    id="img1"
                  />
                </button>
              </NavLink>
              <NavLink to="/addtocart">
                <button className="ml-4">
                  <img
                    src={Cart}
                    alt="Heart Image"
                    className="w-6 h-6 hover:scale-125 min-w-[24px] min-h-[24px] sm:mx-auto mt-5"
                    id="img2"
                  />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>  
    </div>
  );
};

export default DefaultNavbar;
