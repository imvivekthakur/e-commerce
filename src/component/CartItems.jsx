import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  deleteProductThunk,
  getCartThunk,
  removeFromCartThunk,
} from "../redux/cartSlice";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const handleAddToCart = () => {
    const productId = props.productId;
    setLoading(true);
    dispatch(addToCartThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          setLoading(false);
          toast.success("Product added to cart successfully!");
          props.refreshCart();
          //   window.location.reload();
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

  const handleRemoveFromCart = () => {
    const productId = props.productId;
    setLoading2(true);
    dispatch(removeFromCartThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          setLoading2(false);
          toast.success("Product removed from cart successfully!");
          props.refreshCart();
          //  window.location.reload();
        } else {
          setLoading2(false);
          toast.error(`${res.payload.data.msg}`);
        }

        return res;
      })
      .catch((err) => {
        toast.error("Please Login to continue");
        return err.response;
      });
  };

  const deleteProduct = () => {
    setLoading3(true);
    const productId = props.productId;
    dispatch(deleteProductThunk({ productId })).then((res) => {
      if (res.payload.data.success) {
        setLoading3(false);
        toast.success("Product deleted from cart successfully!");
        props.refreshCart();
        //   window.location.reload();
        return res;
      } else {
        setLoading3(false);
        toast.error(`${res.payload.data.msg}`);
      }
    });
  };

  return (
    <>
      {loading || loading2 || loading3 ? (
        <>
          <div className="loader-container w-[100%] mx-auto flex items-center justify-center bg-red h-[30%]">
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
          <div
            className="border-secondary border-t-2 mb-4 pt-4 sm:flex sm:flex-wrap"
            id="hi"
          >
            <img
              src={props.image && props.image[0]}
              alt="cart item"
              className="w-[100%]  m-2 mx-auto
         sm:w-3/12 object-cover  rounded-md  sm:order-1"
            />
            <div className="w-full sm:w-8/12 p-2 sm:order-2">
              <h1 className="text-lg font-bold md:text-2xl">{props.name}</h1>

              {props.owner ? (
                <h2 className="text-md font-semi-bold ">
                  <span className="text-black pr-2">Seller:</span>
                  {props.owner}
                </h2>
              ) : (
                <></>
              )}

              <p className="text-primary font-bold md:text-lg">
                <span className="text-black pr-2">Rs</span>
                {props.price}
              </p>
              <p className="text-gray-500 text-sm md:text-md mt-2">
                {props.description}
              </p>
              <div
                className="text-primary text-xl font-bold border-2 border-primary rounded-full w-max mt-4 hover:shadow-lg shadow-secondary"
                id="boxs"
              >
                <button
                  className="mr-3 hover:bg-secondary px-3 py-1 rounded-full"
                  onClick={handleRemoveFromCart}
                >
                  -
                </button>

                {props.quantity}

                <button
                  className="ml-3 hover:bg-secondary px-3 py-1 rounded-full "
                  onClick={handleAddToCart}
                >
                  +
                </button>
              </div>

              <button
                className="text-red-700 border-2 border-red-700 py-1 px-2 rounded-full my-2 hover:text-white hover:bg-red-700 duration-300"
                onClick={deleteProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartItems;
