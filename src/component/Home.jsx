import React from "react";
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

const Home = () => {
  return (
    <>
      <Default_Navbar />
      <Slider />
      <City_Preference />
      <Working />
      <Categories />
      <Buy />
      <Rent />
      <Rooms />
      <Setup />
      <Items />
      <Testimonials />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
