import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import CartItems from "./CartItems";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
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
        return err.response;
      });
  }, []);

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51OUUpPSAXRW2sHukUtP8nHfxLnDC2pX0pgP0LdWW0BEUdWQh5txtBTux9yPvNiWGQYDyqYBqBOYhn4Ej1Con6LU300fMfqNxOi"
    );
    const body = {
      products: cart2,
      customer: {
        name: "John Doe",
        address: {
          line1: "123 Main St",
          city: "New Delhi",
          state: "Delhi",
          postal_code: "110043",
          country: "IN",
        },
      },
    };

    const user = JSON.parse(localStorage.getItem("userInfo"));

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    };

    const res = await fetch(
      "https://renting-carnival.onrender.com/payment/checkout",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await res.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

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
                image={card.product.productImages}
                // owner={card.product?.owner?.name || "vivek"}
                productId={card.product._id}
              />
            ))}
        </div>
        <div className="w-[90%] mx-auto max-w-md lg:w-1/3 bg-primary flex flex-col items-center rounded-md h-fit">
          <div className="text-2xl font-bold text-center m-3 p-4 text-white">
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
          <div className="bt text-white text-center mt-10 mb-5">
            Total: Rs {overallTotal}
          </div>

          <hr className="border-t-2 border-white my-5 w-full" />
          <button
            className="btn bg-white text-primary text-center hover:scale-110 duration-300 hover:shadow-2xl p-2 rounded-md cursor-pointer mb-5"
            onClick={makePayment}
          >
            Checkout
          </button>
          <Link to="/checkout">
            <button className="btn bg-white text-primary text-center hover:scale-110 duration-300 hover:shadow-2xl p-2 rounded-md cursor-pointer mb-5">
              Cash on Delivery
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
