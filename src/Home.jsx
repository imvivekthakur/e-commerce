import React from "react";
import Product from "./component/Product";
import Working from "./component/Working";
import Categories from "./component/Categories";
import Items from "./component/Items";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

const Home = () => {
  return (
    <>
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
