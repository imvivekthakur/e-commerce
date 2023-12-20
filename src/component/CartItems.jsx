import React from "react";

const CartItems = () => {
  return (
    <>
      <div className="border-secondary border-t-2 mb-4 pt-4 sm:flex sm:flex-wrap">
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          alt="cart item"
          className="w-[98%] m-2 mx-auto sm:w-3/12 object-cover  rounded-md overflow-hidden sm:order-1"
        />
        <div className="w-full sm:w-8/12 p-2 sm:order-2">
          <h1 className="text-lg font-bold md:text-2xl">Product Title</h1>
          <p className="text-primary font-bold md:text-lg">$2000</p>
          <p className="text-gray-500 text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, deserunt.
          </p>
          <div className="text-primary text-xl font-bold border-2 border-primary rounded-full w-max mt-4 hover:shadow-lg shadow-secondary">
            <button className="mr-3 hover:bg-secondary px-3 py-1 rounded-full">-</button>1<button className="ml-3 hover:bg-secondary px-3 py-1 rounded-full ">+</button>
          </div>
          <button className="text-red-700 border-2 border-red-700 py-1 px-2 rounded-full my-2 hover:text-white hover:bg-red-700 duration-300">Delete</button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
