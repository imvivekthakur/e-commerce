import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ img, desc, price, title, stock, seller, category }) => {
  return (
    <NavLink to="/product" className="product-card-link">
      <div className="rounded-lg overflow-hidden bg-gray-100 product-card">
        <img src={img} alt="Bikes" className="object-cover h-64 w-full" />
        <div className="p-4">
          <h1 className="text-lg font-bold p-1">{title}</h1>
          <h2 className="text-md font-semibold p-1">
            <span>Seller: </span>
            {seller}
          </h2>

          <p className="text-sm p-1">{desc}</p>
          <p className="text-md font-medium p-1">
            <span>Category: </span>
            {category}
          </p>

          <p className="font-bold p-1">Rs: {price}</p>
          <p className="font-md p-1">
            <span>Stocks Left: </span>
            {stock}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
