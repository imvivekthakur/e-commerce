import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCartThunk, removeFromCartThunk } from "../../redux/cartSlice";
import {
  addToWishlistThunk,
  getWishlistThunk,
} from "../../redux/wishlistSlice";
import { NavLink } from "react-router-dom";

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

  const handleAddToCart = () => {
    dispatch(addToCartThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success("Product added to cart successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
        return res;
      })

      .catch((err) => {
        toast.error("Please Login to continue");
        return err.response;
      });
  };

  const addToWishlistF = () => {
    dispatch(addToWishlistThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success("Product added to wishlist successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
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
      <div className="rounded-lg overflow-hidden bg-gray-100 product-card">
        <NavLink to={`/product/${productId}`}>
          <img src={selectedImage} alt="Bikes" className="object-cover h-64 w-full" />
        </NavLink>
        <div className="p-4">
          <h1 className="text-lg font-bold p-1">{title}</h1>
          <h2 className="text-md font-semibold p-1">
            <span>Seller: </span>
            {seller}
          </h2>

          <p className="text-sm p-1">{desc}</p>
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

        <div className="flex">
          <button
            onClick={handleAddToCart}
            className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-4"
          >
            Add To Cart
          </button>

          <button
            className="bg-gray-500 p-3 rounded-lg hover:bg-primary hover:text-white hover:no-underline text-white text-center m-4"
            onClick={addToWishlistF}
          >
            Add To Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
