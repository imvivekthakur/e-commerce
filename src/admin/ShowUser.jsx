import React, { useState, useEffect } from "react";
import axios from "axios";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";
import AllOrders from "./AllOrders";

const ShowUser = () => {
  const [users, setUsers] = useState([]);

  const showUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users/1");
      setUsers(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <DefaultNavbar />
      
      <div className="flex flex-col justify-center items-center" key={users.id}>
        <h1 className="text-4xl font-bold p-3 mt-40">Admin Profile</h1>
        <img
          className="rounded-full w-40 h-40 border"
          src={users.image}
          alt=""
        />
        <h2 className="p-2 font-semibold">
          {users.firstName} {users.lastName}
        </h2>
      </div>
      <div>
        <h1 className="text-3xl p-3 text-center m-3 font-semibold">
          My Information
        </h1>
        <ul className="list-none p-0">
          <li className="p-3 border transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Email:</span> {users.email}
          </li>
          <li className="p-3 border transition  text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Phone:</span> {users.phone}
          </li>
          {/* <li className="p-3 border transition  text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>City:</span> {users.address.city}
          </li>
          <li className="p-3 border transition  text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Pin-code:</span> {users.address.postalCode}
          </li> */}
          <li className="p-3 border transition text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Gender:</span> {users.gender}
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Add Product
        </button>
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Rating And Reviews
        </button>
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Users
        </button>
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Update Profiles
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ShowUser;
