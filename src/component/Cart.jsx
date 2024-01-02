import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import CartItems from "./CartItems";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // console.log(cart.cart);
  const cart2 = cart.cart;

  const [allCart, setAllCart] = useState([]);
  const [detailedCartItems, setdetailedCartItems] = useState([]);
  const [overallTotal, setOverallTotal] = useState(0);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    dispatch(getCartThunk())
      .then((res) => {
        console.log(res);
        setAllCart(res.payload.data.cart);
        setdetailedCartItems(res.payload.data.detailedCartItems);

        const total = res.payload.data.detailedCartItems.reduce(
          (acc, item) => acc + item.itemTotal,
          0
        );
        setOverallTotal(total);

        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }, [cart2]);

  // useEffect(() => {
  //   dispatch(getCartThunk())
  //     .then((res) => {
  //       console.log(res);
  //       setAllCart(res.payload.data.cart);
  //       setdetailedCartItems(res.payload.data.detailedCartItems);

  //       const total = res.payload.data.detailedCartItems.reduce(
  //         (acc, item) => acc + item.itemTotal,
  //         0
  //       );
  //       setOverallTotal(total);

  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return err.response;
  //     });
  // }, [cart]);

  // console.log(allCart);
  // console.log(detailedCartItems);
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
            Cart
          </span>
        </h1>
      </div>
      <div className="md:w-[90%] mx-auto flex flex-wrap my-10">
        <div className="w-[95%] mx-auto lg:w-2/3 border-2 border-primary rounded-lg overflow-hidden">
          <div className="bg-secondary">
            <h1 className="text-2xl font-bold px-4 py-6 w-max mx-auto">
              Buy Cart
            </h1>
          </div>

          {cart2 &&
            cart2.map((card, index) => (
              <CartItems
                key={index}
                quantity={card.quantity}
                price={card.product.price}
                name={card.product.name}
                description={card.product.description}
                image={card.product.productImage}
                // owner={card.product?.owner?.name || "vivek"}
                productId={card.product._id}
              />
            ))}
        </div>
        <div className="w-[95%] mx-auto max-w-md lg:w-1/3 bg-primary flex flex-col items-center">
          <div className="text-2xl font-bold text-center m-3 p-4 bg-white">
            Cart Total
          </div>

          {/* {cart2.map((card, index) => (
            <div key={index} className="w-[90%] mx-auto font-normal max-w-xs">
              <div className="py-1 flex justify-between">
                <span>
                  {card.product.name} x {card.quantity}
                </span>{" "}
                <span> {card.product.price * card.quantity}</span>
              </div>
            </div>
          ))} */}

          {/* Display overall total */}
          <button className="btn bg-black hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer mt-10 mb-5">
            Total: Rs {overallTotal}
          </button>

          <hr className="border-t-2 border-black my-5 w-full" />
          <Link to="/checkout">
            <button className="btn bg-black hover:bg-white text-white hover:text-primary hover:border-primary hover:border-2 border-2 border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl p-2 rounded-md cursor-pointer mb-5">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
