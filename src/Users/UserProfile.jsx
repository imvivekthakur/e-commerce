import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";
import { useDispatch } from "react-redux";
import { profileThunk } from "../redux/authSlice";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  const [profile, setProfile] = useState();

  const showUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users/1");
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(profileThunk())
      .then((res) => {
        // console.log(res);
        setProfile(res.payload.data.profile);
        return res;
      })
      .catch((err) => {
        // console.log(err);
        return err.response;
      });
  }, []);

  useEffect(() => {
    showUsers();
  }, []);

  const handleUpdateImage = () => {
    // Add your logic to handle the image update here
    console.log("Update Image clicked");
  };

  return (
    <>
      <DefaultNavbar />

      <div className="flex flex-col justify-center items-center" key={users.id}>
        <h1 className="text-4xl font-bold p-3 mt-40">User Profile</h1>
        <div className="relative">
          <img
            className="rounded-full w-40 h-40 border"
            src={users.image}
            alt=""
          />
          <button
            className="absolute top-0 right-0 bg-gray-300 p-2 rounded-full hover:bg-primary hover:text-white"
            onClick={handleUpdateImage}
          >
            <FaPlus />
          </button>
        </div>
        <h2 className="p-2 font-semibold">{profile ? profile.name : ""}</h2>
      </div>
      <div>
        <h1 className="text-3xl p-3 text-center m-3 font-semibold">
          My Information
        </h1>
        <ul className="list-none p-0">
          <li className="p-3 border transition duration-500 text-center ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Email:</span> {profile ? profile.email : ""}
          </li>
          <li className="p-3 border transition text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Phone:</span> {profile ? profile.phone : ""}
          </li>
          {/* <li className="p-3 border transition text-center duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90">
            <span>Gender:</span> {users.gender}
          </li> */}
        </ul>
      </div>
      <div className="flex justify-center">
        <Link to="/product/create">
          <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
            Create New Product
          </button>
        </Link>
        <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
          Update Profile
        </button>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
