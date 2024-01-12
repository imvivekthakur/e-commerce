import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductThunk } from "../redux/productSlice";
import Working from "./Working";
import Categories from "./Categories";
import Items from "./Items";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Default_Navbar from "./Default_Navbar";
import City_Preference from "./City_Preference";
import Slider from "./Slider";
import Buy from "./Buy";
import Rent from "./Rent";
import Rooms from "./Rooms";
import Setup from "./Setup";
import Features from "./Features";
import Trend from "./Trend";
import DynamicProducts from "./DynamicProducts/DynamicProducts";
import Deals from "./Deals";

const Home = ({allProducts}) => {
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Default_Navbar />
      <Slider />
      <City_Preference />
      <Deals allProducts={allProducts}/>
      {/* <Trend /> */}
      <Working />
      <Categories />
      <Rooms />
      <Setup />
      {/* <DynamicProducts /> */}
      <Items allProducts={allProducts}/>
      <Testimonials />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
