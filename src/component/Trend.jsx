import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg";
import mark from "../assets/mark.svg";
import DatePicker from "react-datepicker";
import "./trend.css";

const Trend = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [showDatePicker2, setShowDatePicker2] = useState(false);
  const [showTimePicker2, setShowTimePicker2] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [selectedTime2, setSelectedTime2] = useState(null);

  // Inside your functional component
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCity2, setSelectedCity2] = useState(null);
  const [showCityDropdown2, setShowCityDropdown2] = useState(false);

  const cities = [
    "Bangalore",
    "Mumbai",
    "Pune",
    "Delhi",
    "Gurugram",
    "Noida",
    "Hyderabad",
    "Chennai",
    "Ghaziabad",
    "Faridabad",
    "Mysuru",
    "Chandigarh",
    "Vijaywada",
    "Nashik",
  ];

  const toggleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
  };

  const toggleCityDropdown2 = () => {
    setShowCityDropdown2(!showCityDropdown2);
  };
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCityDropdown(false);
  };

  const handleCitySelect2 = (city) => {
    setSelectedCity2(city);
    setShowCityDropdown2(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  const toggleDatePicker2 = () => {
    setShowDatePicker2(!showDatePicker2);
  };

  const toggleTimePicker2 = () => {
    setShowTimePicker2(!showTimePicker2);
  };

  return (
    <>
      <div className="w-[80%] mx-auto m-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={mark} alt="" />
              <h3 className="text-primary p-4">Pick-up</h3>
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <h3 className="font-bold">Locations</h3>
                <div className="flex items-center gap-1">
                  <p>{selectedCity ? selectedCity : "Select city"}</p>
                  <img
                    src={arrow}
                    alt=""
                    onClick={toggleCityDropdown}
                    className="cursor-pointer"
                  />

                  {showCityDropdown && (
                    <div className="dropdown-list">
                      <ul>
                        {cities.map((city) => (
                          <li key={city} onClick={() => handleCitySelect(city)}>
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-l-2 pl-4 border-primary">
                <h3 className="font-bold">Date</h3>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p>Select Date</p>
                      <img
                        src={arrow}
                        className="w-4 cursor-pointer"
                        alt=""
                        onClick={toggleDatePicker}
                      />
                    </div>
                    <div className="w-[110px] dropdown-list">
                      {showDatePicker && (
                        <div className="">
                          <DatePicker
                            selected={selectedDate}
                            className="w-[100%]"
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="yyyy-MM-dd"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-2 pl-4 border-primary">
                <h3 className="font-bold">Time</h3>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p>Select Time</p>
                      <img
                        src={arrow}
                        className="w-4 cursor-pointer"
                        alt=""
                        onClick={toggleTimePicker}
                      />
                    </div>
                    <div className="w-[110px] dropdown-list">
                      {showTimePicker && (
                        <div className="">
                          <DatePicker
                            className="w-[100%]"
                            selected={selectedTime}
                            onChange={(time) => setSelectedTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={mark} alt="" />
              <h3 className="text-primary p-4">Drop-off</h3>
            </div>

            <div className="flex flex-wrap gap-10">
              <div>
                <h3 className="font-bold">Locations</h3>
                <div className="flex items-center gap-1">
                  <p>{selectedCity2 ? selectedCity2 : "Select city"}</p>
                  <img
                    src={arrow}
                    alt=""
                    onClick={toggleCityDropdown2}
                    className="cursor-pointer"
                  />

                  {showCityDropdown2 && (
                    <div className="dropdown-list">
                      <ul>
                        {cities.map((city) => (
                          <li
                            key={city}
                            onClick={() => handleCitySelect2(city)}
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-l-2 pl-4 border-primary">
                <h3 className="font-bold">Date</h3>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p>Select Date</p>
                      <img
                        src={arrow}
                        className="w-4 cursor-pointer"
                        alt=""
                        onClick={toggleDatePicker2}
                      />
                    </div>
                    <div className="w-[110px] dropdown-list">
                      {showDatePicker2 && (
                        <div className="">
                          <DatePicker
                            selected={selectedDate2}
                            className="w-[100%]"
                            onChange={(date) => setSelectedDate2(date)}
                            dateFormat="yyyy-MM-dd"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-2 pl-4 border-primary">
                <h3 className="font-bold">Time</h3>
                <div className="flex items-center gap-1">
                  <div className="flex flex-col">
                    <div className="flex">
                      <p>Select Time</p>
                      <img
                        src={arrow}
                        className="w-4 cursor-pointer"
                        alt=""
                        onClick={toggleTimePicker2}
                      />
                    </div>
                    <div className="w-[110px] dropdown-list">
                      {showTimePicker2 && (
                        <div className="">
                          <DatePicker
                            className="w-[100%]"
                            selected={selectedTime2}
                            onChange={(time) => setSelectedTime2(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            dateFormat="h:mm aa"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
