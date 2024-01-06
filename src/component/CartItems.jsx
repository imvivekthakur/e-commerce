import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  deleteProductThunk,
  getCartThunk,
  removeFromCartThunk,
} from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productId = props.productId;

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
          //   window.location.reload();
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

  const handleRemoveFromCart = () => {
    const productId = props.productId;

    dispatch(removeFromCartThunk({ productId }))
      .then((res) => {
        if (res.payload.data.success) {
          toast.success("Product removed from cart successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          //  window.location.reload();
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

  const deleteProduct = () => {
    const productId = props.productId;
    dispatch(deleteProductThunk({ productId })).then((res) => {
      if (res.payload.data.success) {
        toast.success("Product deleted from cart successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        //   window.location.reload();
        return res;
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
    });
  };

  return (
    <>
      <div className="border-secondary border-t-2 mb-4 pt-4 sm:flex sm:flex-wrap">
        <img
          src={props.image[0]}
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
          <div className="text-primary text-xl font-bold border-2 border-primary rounded-full w-max mt-4 hover:shadow-lg shadow-secondary">
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
      <ToastContainer />
    </>
  );
};

export default CartItems;
