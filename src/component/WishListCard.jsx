import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromWishlistThunk } from "../redux/wishlistSlice";
import toast from "react-hot-toast";
import { addToCartThunk } from "../redux/cartSlice";
import { ColorRing } from "react-loader-spinner";

const WishlistCard = ({ img, desc, price, title, productId }) => {
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

  const handleRemove = () => {
    setLoading2(true);
    dispatch(removeFromWishlistThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          setLoading2(false);
          toast.success("Product removed from wishlist successfully!");
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

  return (
    <div className="rounded-lg overflow-hidden bg-gray-100">
      <NavLink to="/product">
        <img src={img[0]} alt="Bikes" className="object-cover h-64 w-full" />
      </NavLink>

      <div className="p-3">
        <h1 className="text-lg font-bold p-1">{title}</h1>
        <p className="text-sm p-1">{desc}</p>
        <p className="font-bold p-1">Rs: {price}</p>
      </div>
      {loading2 ? (
        <>
          <div className="loader-container w-[70%] mx-auto flex items-center justify-center">
            <ColorRing
              visible={true}
              height="50"
              width="50"
              ariaLabel="color-ring-loading"
              wrapperStyle={{
                display: "flex",
                alignItems: "center",
              }}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        </>
      ) : (
        <>
          <button
            className="bg-gray-500 p-3 rounded-lg hover:bg-primary mb-5 hover:text-white hover:no-underline text-white text-center m-4"
            onClick={handleRemove}
          >
            Remove From Wishlist
          </button>
        </>
      )}

      {loading ? (
        <div className="loader-container w-[40%] mx-auto flex items-center justify-center">
          <ColorRing
            visible={true}
            height="60"
            width="60"
            ariaLabel="color-ring-loading"
            wrapperStyle={{
              display: "flex",
              alignItems: "center",
            }}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <button
          className="bg-gray-500 p-3 rounded-lg hover:bg-primary hover:text-white hover:no-underline text-white text-center m-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default WishlistCard;
