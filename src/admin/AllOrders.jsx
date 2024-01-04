import React, { useEffect, useState } from "react";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Function to fetch all orders

    const fetchOrders = async () => {
      let accessToken = await JSON.parse(localStorage.getItem("userInfo"))
        .accessToken;
      try {
        const response = await fetch(
          "http://localhost:5000/order/getAll",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response ", response);
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const ordersData = await response.json();
        console.log("orders data ", ordersData.orders);
        console.log("orders data customer ", ordersData.orders.customer);
        console.log("orders data products ", ordersData.orders.products);
        setOrders(ordersData.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    // Call the function when component mounts
    fetchOrders();
  }, []);
  return (
    <>
    <DefaultNavbar/>
      <div className="mt-40 my-10">
        <h1 className="text-4xl font-bold text-center m-8 text-primary">All Orders</h1>
        <table className="mx-auto border-collapse border">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Order</th>
              <th className="border border-gray-400 p-2">Name</th>
              <th className="border border-gray-400 p-2">Amount</th>
              <th className="border border-gray-400 p-2">Shipping Address</th>
              <th className="border border-gray-400 p-2">
                Product Name and Price
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td className="border border-gray-400 p-2">{index + 1}</td>
                <td className="border border-gray-400 p-2">{order.customer}</td>
                <td className="border border-gray-400 p-2">{order.totalAmount}</td>
                <td className="border border-gray-400 p-2">
                  {order.shippingLocation}
                </td>
                <td className="border border-gray-400 p-2">
                  <ul className="list-disc pl-4">
                    {order.products.map((product) => (
                      <li key={product._id}>
                        {product.name} : Rs{product.price}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default AllOrders;
