import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCartThunk, removeFromCartThunk } from "../../redux/cartSlice";

const ProductCard = ({
  img,
  desc,
  price,
  title,
  stock,
  seller,
  category,
  productId,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartThunk({ productId }))
      .then((res) => {
        console.log(res);
        if (res.payload.data.success) {
          toast.success("Product added to cart successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add product to cart. Please try again.");
        return err.response;
      });
  };

  return (
    <div className="product-card-link">
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

        <button
          onClick={handleAddToCart}
          className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-4"
        >
          Add To Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
