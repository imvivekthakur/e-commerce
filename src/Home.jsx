import React from "react";
import Product from "./component/Product";
import Working from "./component/Working";
import Categories from "./component/Categories";
import Items from "./component/Items";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Default_Navbar from "./component/Default_Navbar";
import City_Preference from "./component/City_Preference";
import Slider from "./component/Slider";

const Home = () => {
  return (
    <>
      <Default_Navbar/>
      <Slider/>
      <City_Preference />
      <Product />
      <Working />
      <Categories />
      <Items />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;