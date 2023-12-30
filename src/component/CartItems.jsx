import React from "react";

const CartItems = (props) => {
  return (
    <>
      <div className="border-secondary border-t-2 mb-4 pt-4 sm:flex sm:flex-wrap">
        <img
          src={props.image}
          alt="cart item"
          className="w-[100%]  m-2 mx-auto
         sm:w-3/12 object-cover  rounded-md  sm:order-1"
        />
        <div className="w-full sm:w-8/12 p-2 sm:order-2">
          <h1 className="text-lg font-bold md:text-2xl">{props.name}</h1>

          <h2 className="text-md font-semi-bold ">
            <span className="text-black pr-2">Seller:</span>
            {props.owner}
          </h2>

          <p className="text-primary font-bold md:text-lg">
            <span className="text-black pr-2">Rs</span>
            {props.price}
          </p>
          <p className="text-gray-500 text-sm md:text-md mt-2">
            {props.description}
          </p>
          <div className="text-primary text-xl font-bold border-2 border-primary rounded-full w-max mt-4 hover:shadow-lg shadow-secondary">
            <button className="mr-3 hover:bg-secondary px-3 py-1 rounded-full">
              -
            </button>
            {props.quantity}
            <button className="ml-3 hover:bg-secondary px-3 py-1 rounded-full ">
              +
            </button>
          </div>
          <button className="text-red-700 border-2 border-red-700 py-1 px-2 rounded-full my-2 hover:text-white hover:bg-red-700 duration-300">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
