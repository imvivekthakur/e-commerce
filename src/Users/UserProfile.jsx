import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { profileThunk } from "../redux/authSlice";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";
import ProductForm from "../component/CreateProduct/ProductForm";
import Modal from "../component/CreateProduct/Modal";
import { ToastContainer, toast } from "react-toastify";
import defaultImg from "../assets/default.jpg";
import { Link } from "react-router-dom";

const UserProfile = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [imageInArr, setImageInArr] = useState(null);
  const [profile, setProfile] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState(users ? users.name : "");
  const [email, setEmail] = useState(profile ? profile.email : "");
  const [phone, setPhone] = useState(profile ? profile.phone : "");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [sendImage, setSendImage] = useState(null);
  const [img, setImg] = useState("");

  const fileInputRef = useRef(null);

  const showUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users/1");
      setUsers(response.data);
    } catch (error) {}
  };

  const handleEditProfile = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUpdateImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const updateProfile = async () => {
    // Validate email and phone number
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number");
      return;
    } else {
      setPhoneError("");
    }
    let accessToken = await JSON.parse(localStorage.getItem("userInfo"))
      .accessToken;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    if (sendImage) {
      formData.append("file", sendImage);
    }

    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    try {
      const response = await axios.put(
        "https://renting-carnival.onrender.com/profile/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        toast.success(`${response.data.msg}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      setIsEditMode(false);
    } catch (error) {}
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Simple phone number validation using a regular expression
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const openProductForm = () => {
    setIsProductFormOpen(true);
  };

  const closeProductForm = () => {
    setIsProductFormOpen(false);
  };

  const handleSendImage = (e, index) => {
    setImageInArr(URL.createObjectURL(e.target.files[0]));
    setSendImage(e.target.files[0]);

    // setUsers((prevUsers) => ({
    //   ...prevUsers,
    //   photo: URL.createObjectURL(e.target.files[0]),
    // }));
  };

  useEffect(() => {
    dispatch(profileThunk())
      .then((res) => {
        setProfile(res.payload.data.profile);
        setName(res.payload.data.profile.name);
        setEmail(res.payload.data.profile.email);
        setPhone(res.payload.data.profile.phone);
        setImg(res.payload.data.profile.photo);
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <DefaultNavbar />
      <div className="flex flex-col justify-center items-center" key={users.id}>
        <h1 className="text-4xl font-bold p-3 mt-40">
          {profile && profile.role === "Admin" && "Admin "}
          {profile && profile.role !== "Admin" && "User "}
          Profile
        </h1>
        <div className="relative">
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={(e) => {
              handleSendImage(e);
            }}
            accept="image/png, image/jpg, image/jpeg"
            name="file"
          />

          {sendImage ? (
            <img
              src={imageInArr}
              className="rounded-full w-40 h-40 border"
              alt=""
            />
          ) : (
            <>
              {profile ? (
                <img
                  src={profile.photo ? profile.photo : defaultImg}
                  className="rounded-full w-40 h-40 border"
                  alt=""
                />
              ) : (
                <img
                  src={defaultImg}
                  className="rounded-full w-40 h-40 border"
                  alt=""
                />
              )}
            </>
            // <img
            //   src={profile.photo ? profile.photo : defaultImg}
            //   className="rounded-full w-40 h-40 border"
            //   alt=""
            // />
          )}

          {isEditMode && (
            <button
              className="absolute top-0 right-0 bg-gray-300 p-2 rounded-full hover:bg-primary hover:text-white"
              onClick={handleUpdateImage}
            >
              <FaPlus />
            </button>
          )}
        </div>
        {isEditMode ? (
          <>
            <input
              type="text"
              className="w-80 p-3 m-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <input
              type="text"
              value={email}
              className="w-80 p-3 m-2"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-primary font-semibold">{emailError}</p>
            )}
            <input
              type="text"
              value={phone}
              className="w-80 p-3 m-2"
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError("");
              }}
              placeholder="Enter your phone number"
            />
            {phoneError && (
              <p className="text-primary font-semibold">{phoneError}</p>
            )}
            <button
              className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2"
              onClick={updateProfile}
            >
              Save Changes
            </button>
          </>
        ) : (
          <h2 className="p-2 font-semibold">{profile ? profile.name : ""}</h2>
        )}
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
        </ul>
      </div>
      <div className="flex justify-center flex-wrap">
        <button
          onClick={handleEditProfile}
          className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2"
        >
          {isEditMode ? "Cancel" : "Edit Profile"}
        </button>

        {isEditMode && (
          <button
            onClick={handleUpdateImage}
            className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2"
          >
            Update Profile Picture
          </button>
        )}
        <Link to="/user/package">
          <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
            View Packages
          </button>
        </Link>

        {profile && profile.role !== "buyer" && (
          <Link to="/product/create">
            <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
              Create Product
            </button>
          </Link>
        )}

        <Link to="/allUsers">
          {profile && profile.role === "Admin" && (
            <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
              Show Users
            </button>
          )}
        </Link>

        <Link to="/admin/allProducts">
          {profile && profile.role === "Admin" && (
            <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
              Show Products
            </button>
          )}
        </Link>
        <Link to="/orders">
          {profile && profile.role === "Admin" && (
            <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-2">
              All orders
            </button>
          )}
        </Link>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default UserProfile;
