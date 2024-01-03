import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import Products from "./Products";
import DefaultNavbar from "./Default_Navbar";
import Footer from "./Footer";
import Review from "./Review";
import { useParams } from "react-router-dom";
import ProductCard from "./DynamicProducts/ProductCard";

const Product = ({ allProducts }) => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { productId } = useParams();
  const [isActive, setIsActive] = useState(1);
  const [product, setProduct] = useState({});
  const handleClick = (index) => {
    setIsActive(index);
  };

  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    filterSimilarProducts(product);
  }, [product]);

  const filterSimilarProducts = (product) => {
    if (product && allProducts && allProducts.length > 0) {
      const arr = allProducts
        .filter(
          (item) =>
            item.category === product.category && item._id !== product._id
        )
        .map((item) => console.log("items ", item));
      const similar = allProducts.filter(
        (item) => item.category === product.category && item._id !== product._id
      );
      setSimilarProducts(similar);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(
          `https://renting-carnival.onrender.com/product/get/${productId}`
        );
        const data = await res.json();
        if (!data) {
          console.log("product details could not pe loaded");
        } else {
          setProduct(data.product);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductDetails();
  }, []);

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
            Product
          </span>
        </h1>
      </div>
      <div className="w-[90%] mx-auto mt-6">
        <div className="flex flex-wrap pb-4 mb-4 border-b-2">
          <div className="md:flex gap-2 w-full lg:w-1/2">
            <div className="flex md:block">
              <img
                className="h-12 w-24 m-1 overflow-hidden md:m-4 rounded-md"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="product"
              />
              <img
                className="h-12 w-24 m-1 overflow-hidden md:m-4 rounded-md"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="product"
              />
              <img
                className="h-12 w-24 m-1 overflow-hidden md:m-4 rounded-md"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="product"
              />
              <img
                className="h-12 w-24 m-1 overflow-hidden md:m-4 rounded-md"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="product"
              />
              <img
                className="h-12 w-24 m-1 overflow-hidden md:m-4 rounded-md"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                alt="product"
              />
            </div>
            <div className="">
              <img
                className="md:m-4 rounded-lg w-full block"
                src={product.productImage}
                alt="product"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="md:w-[90%] mx-auto my-4 md:mx-10">
              <h1 className="text-xl font-bold">{product.name}</h1>
              <div className="text-sm text-gray-500">Rs {product.price}</div>
              <div>
                <Rate
                  value={product.rating || 4}
                  disabled
                  className="text-sm"
                />
              </div>
              <p className="text-sm">{product.description}</p>

              <div className="flex mt-4">
                <div className="mt-2 w-24 text-xs md:text-sm md:w-32 mr-2 md:mr-6 flex justify-between border-2 border-black rounded-lg p-2">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <div>
                  <button className="mt-2 w-24 text-xs md:text-sm md:w-32 mr-2 md:mr-6 border-2 border-black rounded-lg p-2">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[75%] mx-auto">
          <div className="flex justify-center text-gray-500">
            <div className="m-4 text-center" onClick={() => handleClick(1)}>
              <h1 className={`${isActive == 1 ? "font-bold" : ""}`}>
                Description
              </h1>
            </div>
            <div
              className={`m-4 text-center ${isActive == 2 ? "font-bold" : ""}`}
              onClick={() => handleClick(2)}
            >
              Review
            </div>
          </div>
          <p
            className={`text-sm text-gray-700 mb-4 ${
              isActive == 2 ? "hidden" : ""
            }`}
          >
            <div className=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda tempora vel iste corrupti voluptates amet et dolorum
              provident, aspernatur nihil incidunt dolorem repudiandae eius,
              dolore voluptatum eos quam delectus possimus.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              quod unde dolores placeat non impedit iure praesentium similique
              iste et.
            </div>
            <div className="flex gap-6">
              <img
                className="w-1/2 h-56 my-6 rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
                alt="similar bedrooms"
              />
              <img
                className="w-1/2 h-56 my-6 rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D"
                alt="similar bedrooms"
              />
            </div>
          </p>
          <div className={`${isActive == 1 ? "hidden" : ""}`}>
            <Review />
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-center font-bold mt-10 mb-5">
            Related Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-5 pt-5 mb-5 ">
            {similarProducts.map((card) => (
              <ProductCard
                key={card.productId} // Remember to provide a unique key for list items
                img={card.productImage}
                desc={card.description}
                price={card.price}
                stock={card.stock}
                productCard={card.productId}
                seller={card.owner.name}
                category={card.category}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
