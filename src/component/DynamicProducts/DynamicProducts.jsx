import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductThunk } from "../../redux/productSlice";
import ProductCard from "./ProductCard";
import "./style.css";
import { ColorRing } from "react-loader-spinner";
const DynamicProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProductThunk())
      .then((res) => {
        if (res.payload.data.success) {
          setAllProducts(res.payload.data.products);
          setLoading(false);
        }
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  return (
    <div className="parent-container mt-5">
      {loading ? (
        <div className="loader-container w-[100%] mx-auto flex items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{
              display: "flex",
              alignItems: "center",
            }}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-[90%] mx-auto mt-5 pt-5 mb-5 ">
          {allProducts.map((card, index) => (
            <ProductCard
              key={card._id}
              img={card.productImages}
              title={card.name}
              desc={card.description}
              price={card.price}
              stock={card.stock}
              category={card.category}
              seller={card.owner.name}
              productId={card._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DynamicProducts;
