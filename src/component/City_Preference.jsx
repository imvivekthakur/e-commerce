import React, { useState } from "react";
import "./City_Preference.css";
import { RiMapPin2Fill } from "react-icons/ri";
import bengalore from "../assets/Bengalore.svg";
import mumbai from "../assets/Mumbai.svg";
import pune from "../assets/Pune.svg";
import delhi from "../assets/Delhi.svg";
import gurugram from "../assets/Gurugram.svg";
import noida from "../assets/Noida.svg";
import hydrabad from "../assets/Hydrabad.svg";
import chennai from "../assets/Chennai.svg";
import ghaziabad from "../assets/Ghaziabad.svg";
import faridabad from "../assets/Faridabad.svg";
import jaipur from "../assets/Jaipur.svg";
import mysuru from "../assets/Mysuru.svg";
import chandigarh from "../assets/Chandigarh.svg";
import vijaywada from "../assets/Vijaywada.svg";
import nashik from "../assets/Nashik.svg";

const CityPreference = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);
  const [pinCode, setPinCode] = useState("");

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // const searchLocationByPinCode = async () => {
  //   try {
  //     const response = await fetch("/path/to/indian_pin_codes.json"); // Replace with the actual path to your JSON file
  //     const data = await response.json();
  
  //     const cityData = data[pinCode];
  
  //     if (cityData) {
  //       const cityName = cityData.city;
  //       setCity(cityName);
  //       setLocation({
  //         latitude: cityData.latitude,
  //         longitude: cityData.longitude,
  //       });
  //     } else {
  //       console.log("City not found for the provided pin code.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching city:", error);
  //   }
  // };
  
  
  
  
  const searchCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const cityName = data.address?.city;
            setCity(cityName);
            setLocation({ latitude, longitude });
          } catch (error) {
            console.error("Error fetching city:", error);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  const indianCities = [
    { name: "Bangalore", image: bengalore },
    { name: "Mumbai", image: mumbai },
    { name: "Pune", image: pune },
    { name: "Delhi", image: delhi },
    { name: "Gurugram", image: gurugram },
    { name: "Noida", image: noida },
    { name: "Hydrabad", image: hydrabad },
    { name: "Chennai", image: chennai },
    { name: "Ghaziabad", image: ghaziabad },
    { name: "Faridabad", image: faridabad },
    { name: "Jaipur", image: jaipur },
    { name: "Mysuru", image: mysuru },
    { name: "Chandigarh", image: chandigarh },
    { name: "Vijaywada", image: vijaywada },
    { name: "Nashik", image: nashik },
  ];

  const handleCitySelection = (selectedCity) => {
    setCity(selectedCity);
    setSidebarOpen(false);
  };

  return (
    <div className="flex justify-between">
      {/* Button for toggling sidebar */}
      <button
        className="fixed flex flex-row p-5 text-black bg-gray-300 px-4 rounded z-50 left-0 top-1/2 transform -translate-y-1/2"
        onClick={toggleSidebar}
      >
        <RiMapPin2Fill style={{ fontSize: "20px", marginRight: "10px" }} />
        {city ? `Current City: ${city}` : "Select Your City"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed z-60 top-0 left-0 h-full bg-white overflow-x-hidden transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 p-4 shadow z-0`}
        style={{ zIndex: 60 }}
      >
        {/* Close button */}
        <div className="flex z-60 justify-end mb-2">
          <button
            className="border p-2 text-black rounded-full hover:bg-red-600 hover:text-white cursor-pointer transition duration-300"
            onClick={closeSidebar}
          >
            X
          </button>
        </div>

        {/* Sidebar content */}
        <div className="sidebar-content">
          {/* Search button for current location */}
          <div>
            <button
              onClick={searchCurrentLocation}
              className="search-button w-full text-black underline p-2 rounded"
            >
              {city ? `Current City: ${city}` : "Get Current Location"}
            </button>
          </div>

          {/* Search by Pin Code */}
          <div>
            <input
              type="text"
              placeholder="Enter Pin Code"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="search-input w-full border focus:border-blue-500 focus:outline-5 outline-none px-4 py-2"
            />
            <button
              // onClick={searchLocationByPinCode}
              className="search-button w-full text-black underline p-2 rounded mt-2"
            >
              Search by Pin Code
            </button>
          </div>

          {/* City selection */}
          <nav className="mt-4">
            <p className="mb-2 font-bold text-center">Select a City:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indianCities.map(({ name, image }) => (
                <li
                  key={name}
                  className="cursor-pointer text-gray-500 hover:underline flex flex-col items-center"
                  onClick={() => handleCitySelection(name)}
                >
                  <img
                    src={image}
                    alt={name}
                    className="mb-2 rounded-full"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="text-center text-sm">{name}</div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CityPreference;
