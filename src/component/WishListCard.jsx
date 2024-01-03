import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromWishlistThunk } from "../redux/wishlistSlice";
import { ToastContainer, toast } from "react-toastify";

const WishlistCard = ({ img, desc, price, title, productId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromWishlistThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success("Product removed from wishlist successfully!", {
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

  return (
    <div className="rounded-lg overflow-hidden bg-gray-100">
      <NavLink to="/product">
        <img src={img} alt="Bikes" className="object-cover h-64 w-full" />
      </NavLink>

      <div className="p-3">
        <h1 className="text-lg font-bold p-1">{title}</h1>
        <p className="text-sm p-1">{desc}</p>
        <p className="font-bold p-1">Rs: {price}</p>
      </div>
      <button
        className="bg-gray-500 p-3 rounded-lg hover:bg-primary hover:text-white hover:no-underline text-white text-center m-4"
        onClick={handleRemove}
      >
        Remove From Wishlist
      </button>
      <ToastContainer />
    </div>
  );
};

export default WishlistCard;
