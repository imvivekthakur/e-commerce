import React, { useEffect, useState } from "react";
import Products from "./Products";
import DynamicProducts from "./DynamicProducts/DynamicProducts";
import Card from "./Card";
import ProductCard from "./DynamicProducts/ProductCard";
import { Link } from "react-router-dom";

const Items = ({ allProducts }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    filterProducts(activeTab);
  }, [activeTab]);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  const filterProducts = (index) => {
    // console.log("filtered products called !!", index);
    if (index === 1) {
      setFilteredProducts(allProducts); // Show all products for "Popular" tab
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === getCategoryName(index)
      );
      // console.log("filtered ", filtered);
      setFilteredProducts(filtered);
    }
  };

  const getCategoryName = (index) => {
    switch (index) {
      case 1:
        return "Popular";
      case 2:
        return "Furniture";
      case 3:
        return "Decorative Items";
      case 4:
        return "Vehicles";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="text-center m-8">
        <h1 className="text-4xl text-primary font-bold m-3">
          Most popular Rental Items
        </h1>
        <p>Lorem ipsum dolor sit amet. </p>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto">
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 1
              ? "text-primary border-primary font-bold cursor-pointer"
              : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Popular
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 2
              ? "text-primary border-primary font-bold cursor-pointer"
              : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Furniture
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 3
              ? "text-primary border-primary font-bold cursor-pointer"
              : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Decorative Items
        </div>
        <div
          className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${
            activeTab === 4
              ? "text-primary border-primary font-bold cursor-pointer"
              : ""
          }`}
          onClick={() => handleClick(4)}
        >
          Vehicle
        </div>
      </div>
      {/* <Products/> */}
      {/* {console.log("filtered products ", filteredProducts)} */}
      {activeTab === 1 && <DynamicProducts />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-5 pt-5 mb-5 ">
        {activeTab !== 1 &&
          filteredProducts.map((card) => (
            <ProductCard
              img={card.productImages}
              desc={card.description}
              price={card.price}
              stock={card.stock}
              productId={card._id}
              seller={card.owner.name}
              name={card.name}
              category={card.category}
            />
          ))}
      </div>
      <div className="text-center my-6">
        <Link to="/shop">
          <button className="border-2 border-primary text-primary px-6 py-2 rounded-md">
            Show More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Items;
