import React from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Function to fetch all orders
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://renting-carnival.onrender.com/order/getAll");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const ordersData = await response.json();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    // Call the function when component mounts
    fetchOrders();
  }, []);
  return (
    <>
      <div>
        <h1>All Orders</h1>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              {/* Display order details as needed */}
              Order ID: {order._id}, Total Amount: {order.totalAmount}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AllOrders;
