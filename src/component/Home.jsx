import React from "react";
import Product from "./Product";
import Working from "./Working";
import Categories from "./Categories";
import Items from "./Items";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Default_Navbar from "./Default_Navbar";
import City_Preference from "./City_Preference";
import Slider from "./Slider";
import Features from "./Features";

const Home = () => {
  return (
    <>
      <Default_Navbar />
      <Slider />
      <City_Preference />
      <Product />
      <Working />
      <Categories />
      <Items />
      <Testimonials />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
