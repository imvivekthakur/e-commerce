import React, { useEffect, useState } from "react";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";
import pack1 from "../assets/pack1.svg";

const ShowPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      let accessToken = await JSON.parse(localStorage.getItem("userInfo"))
        .accessToken;
      try {
        const response = await fetch(
          "https://renting-carnival.onrender.com/profile/package",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response ", response);
        if (!response.ok) {
          throw new Error("Failed to fetch packages");
        }
        const data = await response.json();
        setPackages(data.packages);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  console.log(packages);
  return (
    <>
      <DefaultNavbar />
      <div className="mt-40 my-10">
        <h1 className="text-4xl font-bold text-center m-8 text-primary">
          Bought Packages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto  mt-10">
          {packages ? (
            packages.map((P) => (
              <div className="product-card-link">
                <div className="rounded-lg overflow-hidden bg-gray-100 product-card">
                  <img
                    className="h-80 w-80 object-cover mx-auto"
                    src={pack1}
                    alt="random"
                  />
                  <div className="p-4">
                    <p className="text-md text-black font-medium p-1">
                      {P.name}
                    </p>
                    <p className="text-md text-gray-500 p-1">
                      {P.numberOfProducts} Products
                    </p>
                    <p className="text-md text-primary font-bold p-1">
                      ₹{P.durations[0].price}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center m-8 text-primary">
                You have not bought any package.
              </h1>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowPackages;
