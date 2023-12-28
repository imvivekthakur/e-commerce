import React, { useEffect } from "react";
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
import UserProfile from "../Users/UserProfile";
import ProductForm from "./ProductForm";

const Home = () => {
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
      <Trend />
      <Working />
      <Categories />
      <Rooms />
      <Setup />
      <Items />
      <ProductForm/>
      <UserProfile/>
      <Testimonials />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
