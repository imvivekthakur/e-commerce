import React, { useState, useEffect } from "react";
import DefaultNavbar from "./Default_Navbar";
import ReactPaginate from "react-paginate";
import Card from "./Card";
import Footer from "./Footer";
import ProductCard from "./DynamicProducts/ProductCard";

const Shop = ({ allProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("popular"); 
  const [filteredProduct, setFilteredProduct] = useState(allProducts);
  const [display, setDisplay] = useState(1);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    filterProduct(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      setFilteredProduct(allProducts);
    }
  }, [allProducts]);

  useEffect(() => {
    // Check for display value to sort on initial load and subsequent clicks
    if (display === 1) {
      const sortedLowToHigh = [...filteredProduct].sort((a, b) => a.price - b.price);
      setFilteredProduct(sortedLowToHigh);
    } else if (display === 2) {
      const sortedHighToLow = [...filteredProduct].sort((a, b) => b.price - a.price);
      setFilteredProduct(sortedHighToLow);
    }
  }, [display]);

  const filterProduct = (selectedCategory) => {
    if (selectedCategory === "popular") {
      setFilteredProduct(allProducts);
    } else {
      const filteredItems = allProducts.filter(
        (item) => item.category === selectedCategory
      );
      console.log("filtered items ", filteredItems);
      setFilteredProduct(filteredItems);
    }
  };

  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredProduct.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProduct.slice(startIndex, endIndex);

  return (
    <>
      <DefaultNavbar />
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0b3JlfGVufDB8fDB8fHww"
          alt="shop"
          className="w-screen h-80 blur-sm object-cover"
        />
        <h1 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-opacity-70 p-4">
          <span className="text-white drop-shadow text-4xl font-bold">
            Shop
          </span>
        </h1>
      </div>

      <div className="text-sm w-[90%] mx-auto my-8">
        <div>
          <button
            className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
              selectedCategory === "popular" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setSelectedCategory("popular")}
          >
            Popular
          </button>
          <button
            className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
              selectedCategory === "Furniture" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Furniture")}
          >
            Furniture
          </button>
          <button
            className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
              selectedCategory === "Decorative Items"
                ? "bg-primary text-white"
                : ""
            }`}
            onClick={() => setSelectedCategory("Decorative Items")}
          >
            Decorative Items
          </button>
          <button
            className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${
              selectedCategory === "Vehicles" ? "bg-primary text-white" : ""
            }`}
            onClick={() => setSelectedCategory("Vehicles")}
          >
            Vehicles
          </button>
        </div>
        <br />
        <div>
          <button className="mr-4 border-2 border-primary px-4 py-2 rounded-full">
            Sort by :
          </button>
          <button className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${display == 1 ? "bg-primary text-white" : ""}`} onClick={() => setDisplay(1)}>
            Low to High
          </button>
          <button className={`mr-4 border-2 border-primary px-4 py-2 rounded-full ${display == 2 ? "bg-primary text-white" : ""}`} onClick={() => setDisplay(2)}>
            High to Low
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto">
        {currentProducts.map((card, index) => (
          <ProductCard
            key={card._id}
            img={card.productImages}
            title={card.name}
            desc={card.description}
            price={card.price}
            stock={card.stock}
            category={card.category}
            seller={card.owner.name}
            productId={card._id}
          />
        ))}
      </div>
      <div className="flex justify-center items-center m-10 mb-16">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex space-x-3 text-xl"
          previousLinkClassName="prev bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          nextLinkClassName="next bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          pageLinkClassName="page-link bg-secondary rounded-lg hover:text-white hover:bg-primary px-3 py-1 duration-300"
          activeLinkClassName="active border-2 border-primary"
          breakLinkClassName="text-primary"
        />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
