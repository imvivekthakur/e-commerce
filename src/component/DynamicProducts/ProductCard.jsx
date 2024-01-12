import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartThunk, removeFromCartThunk } from "../../redux/cartSlice";
import {
  addToWishlistThunk,
  getWishlistThunk,
} from "../../redux/wishlistSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import "../../App.css";

const ProductCard = ({
  img,
  desc,
  price,
  title,
  stock,
  seller,
  category,
  productId,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (img && img.length > 0) {
      setSelectedImage(img[0]); // Set the first image as the selected image
    }
  }, [img]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    dispatch(addToCartThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          setLoading(false);
          toast.success("Product added to cart successfully!");
        } else {
          setLoading(false);
          toast.error(`${res.payload.data.msg}`);
        }
        return res;
      })

      .catch((err) => {
        toast.error("Please Login to continue");
        return err.response;
      });
  };

  const addToWishlistF = () => {
    setLoading2(true);
    dispatch(addToWishlistThunk({ productId }))
      .then((res) => {
        setLoading2(false);
        if (res.payload.data.success) {
          toast.success("Product added to wishlist successfully!");
        } else {
          setLoading2(false);
          toast.error(`${res.payload.data.msg}`);
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  };

  // console.log("images ", img);
  return (
    <div className="product-card-link">
      <div className="rounded-lg overflow-hidden bg-gray-100 product-card h-[34rem]">
        <div className="hover-button">
          {(loading || loading2) && (
            <div className="loader-container hover-button ">
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="color-ring-loading"
                wrapperStyle={{
                  display: "flex",
                  alignItems: "center",
                }}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          )}
          {!loading && (
            <button
              onClick={handleAddToCart}
              className="w-48 block bg-white py-2 my-2 rounded-md"
            >
              Add To Cart
            </button>
          )}
          {!loading2 && (
            <button
              onClick={addToWishlistF}
              className="w-48 block bg-white py-2 my-2 rounded-md"
            >
              Add To Wishlist
            </button>
          )}
        </div>
        <NavLink to={`/product/${productId}`}>
          <div className="gradient-container">
            <img
              src={selectedImage}
              alt="Bikes"
              className="object-cover h-64 w-full"
            />
          </div>
        </NavLink>
        <div className="p-4">
          <h1 className="text-lg font-bold p-1">{title}</h1>
          <h2 className="text-md font-semibold p-1">
            <span>Seller: </span>
            {seller}
          </h2>

          <p className="text-sm p-1">
            {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
          </p>
          <p className="text-md font-medium p-1">
            <span>Category: </span>
            {category}
          </p>

          <p className="font-bold p-1">Rs: {price}</p>
          <p className="font-md p-1">
            <span>Stocks Left: </span>
            {stock}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
