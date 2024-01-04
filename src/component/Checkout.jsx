import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../redux/cartSlice";
import CartItems from "./CartItems";
import { toast } from "react-toastify";

const Checkout = () => {
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    pinCode: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const placeOrder = async () => {
    let accessToken = await JSON.parse(localStorage.getItem("userInfo"))
        .accessToken;
    try {
      const productsForOrder = cart2.map((item) => ({
        _id: item.product._id,
      }));
      const response = await fetch("http://localhost:5000/order/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // Pass the form data and possibly cart information
          ...formData,
          customer: `${formData.firstName} ${formData.lastName}`,
          products: productsForOrder, // Add the products from the cart or relevant information
          totalAmount: overallTotal, // Calculate total amount based on cart
          shippingLocation: `${formData.address}, ${formData.city}, ${formData.pinCode}`,
        }),
      });

      const data = await response.json();
      if(!data) {
        console.log("error in placing order ");
        toast.error(data)
        return ;
      }
      console.log("Order placed:", data);
      toast.success("Order placed successfully!!")
      
      // Handle success/failure or redirect after order placement
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error occurred while placing order!!")
      // Handle error state
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
            Checkout
          </span>
        </h1>
      </div>
      
      <div className="w-[90%] mx-auto flex flex-wrap my-10">
          <div className="w-full md:w-7/12">
            <h1 className="text-2xl font-bold text-center my-4">
              Billing details
            </h1>
            <div className="flex flex-wrap justify-between">
              <div className="text-primary">
                <div className="text-xs py-2">First Name</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
              </div>
              <div className="text-primary">
                <div className="text-xs py-2">Last Name</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="text-primary">
                <div className="text-xs py-2">Email</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="text-primary">
                <div className="text-xs py-2">Phone</div>
                <input
                  className="outline-none border-primary w-64 rounded-lg"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Country</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Street Address</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">City</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
            </div>
            <div>
              <div className="text-primary">
                <div className="text-xs py-2 ">Pin Code</div>
                <input
                  className="w-full outline-none border-primary rounded-lg"
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleInputChange}
                  placeholder="Pin Code"
                />
              </div>
            </div>
        </div>
        <div className="bg-primary rounded-lg md:my-0 my-8 mx-auto w-full md:w-4/12 h-max text-white">
          <div className="text-2xl font-bold text-center p-4">Cart Total</div>
          <div className="w-[90%] mx-auto font-bold max-w-xs">
            {cart2 &&
            cart2.map((card, index) => (
              <div className="flex justify-between max-w-[200px] mx-auto">
                <span>{card.product.name}</span>
                <span>{card.product.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 font-bold max-w-xs">
            Total : {overallTotal}
          </div>
          <div className="text-center">
            <button className="text-primary bg-white px-4 py-2 rounded-lg my-6 hover:scale-110 duration-200" onClick={placeOrder}>
              <NavLink to="/checkout">Place order</NavLink>
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;
