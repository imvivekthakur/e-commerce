import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import Footer from "./Footer";
import ProductCard from "./DynamicProducts/ProductCard";

const Category = ({ category, allProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    if(display === 1) {
      filteredProducts.sort((a,b) => b.price - a.price)
    } else {
      filteredProducts.sort((a,b) => a.price - b.price)
    }
  }, [display]);

  // Filter products based on the category
  useEffect(() => {
    console.log("filtered products ", filteredProducts);
    if (category.toLowerCase() === "popular") {
      // Display all products for "Popular" category
      setFilteredProducts(allProducts);
    } else {
      // Filter products based on the specified category
      const filtered = allProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category, allProducts]);

  return (
    <>
      <DefaultNavbar />
      {/* Replace category name in the title */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0b3JlfGVufDB8fDB8fHww"
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            {category}
          </span>
        </h1>
      </div>
      <div className="w-[90%] mx-auto my-10">
        <button className="mr-4 border-2 border-primary px-4 py-2 rounded-full">
          Sort by :
        </button>
        <button
          className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
            display == 1 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setDisplay(1)}
        >
          Low to High
        </button>
        <button
          className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
            display == 2 ? "bg-primary text-white" : ""
          }`}
          onClick={() => setDisplay(2)}
        >
          High to Low
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto my-10">
        {/* Map filtered products to ProductCard */}
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            img={product.productImage}
            title={product.name}
            desc={product.description}
            price={product.price}
            stock={product.stock}
            category={product.category}
            seller={product.owner.name}
            productId={product._id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Category;
