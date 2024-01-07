import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Heart from "../assets/Heart.png";
import Cart from "../assets/Cart.png";
import Suggestions from "./Suggestions";
import "./Default_Navbar.css";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { profileThunk } from "../redux/authSlice";

const DefaultNavbar = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState();

  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const userAvailable = localStorage.getItem("userInfo") ? true : false;

  const [users, setUsers] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(true);
  };

  useEffect(() => {
    dispatch(profileThunk())
      .then((res) => {
        setProfile(res.payload.data.profile);
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  const showUsers = async () => {
    try {
      const userPhoto = await JSON.parse(localStorage.getItem("userInfo")).user;
      console.log("user photo ", userPhoto.photo);
      setUsers(
        userPhoto?.photo ||
          "https://img.freepik.com/free-photo/3d-portrait-people_23-2150793895.jpg?t=st=1704347606~exp=1704351206~hmac=7bba358415593ecddcb20f57f8216d864fa66bc65b652121ab1e5362d8b5b168&w=740"
      );
      console.log(users);
    } catch (error) {}
  };

  useEffect(() => {
    showUsers();
  }, []);

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
                  to="/toggle"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  Package
                </NavLink>
              </li>
              <li className="mb-2 md:mb-0">
                {!userAvailable ? (
                  <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="active-link"
                  >
                    Login
                  </NavLink>
                ) : (
                  <>
                    <div
                      className="flex justify-center items-center w-8 h-8 hover:scale-125 duration-300 overflow-hidden rounded-full border-2"
                      onClick={() => setModalOpen(true)}
                    >
                      <img
                        className="w-full object-cover justify-center items-center text-white"
                        src={profile && profile.photo}
                        alt=""
                      />
                    </div>
                    <div className="relative">
                      <Modal
                        style={{
                          position: "absolute",
                          top: "16%",
                          right: "10%",
                        }}
                        open={modalOpen}
                        onOk={() => setModalOpen(false)}
                        onCancel={() => setModalOpen(false)}
                        footer={null}
                      >
                        <div
                          className="flex items-center"
                          // onClick={handleProfile}
                        >
                          <img
                            src={profile && profile.photo}
                            className="object-cover h-9 w-9 mr-2 rounded-full bg-secondary"
                          />
                          <div className="text-lg font-bold">
                            <NavLink to="/userProfile">
                              <div onClick={() => setModalOpen(false)}>
                                {profile ? profile.name : ""}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                        <div className="flex w-full justify-center items-center">
                          <button
                            className="mt-4 p-2 bg-primary rounded-md hover:bg-gray-500 hover:text-white"
                            onClick={handleLogout}
                          >
                            <div className="font-bold text-lg tracking-wider text-white ">
                              Signout
                            </div>
                          </button>
                        </div>
                      </Modal>
                    </div>
                  </>
                )}
              </li>
            </ul>

            <div className="flex flex-row justify-center m-[-2px]">
              <NavLink to="/wishlist">
                <button className="ml-4 justify-center items-center">
                  <img
                    src={Heart}
                    alt="Heart Image"
                    className="w-6 h-6 hover:scale-125 min-w-[24px] min-h-[24px] sm:mx-auto mt-5"
                    id="img1"
                  />
                </button>
              </NavLink>
              <NavLink to="/cart">
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
