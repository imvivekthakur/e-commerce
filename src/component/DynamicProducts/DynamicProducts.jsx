import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProductThunk } from "../../redux/productSlice";
import ProductCard from "./ProductCard";
import "./style.css";

const DynamicProducts = () => {
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProductThunk())
      .then((res) => {
        console.log(res);
        setAllProducts(res.payload.data.products);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }, []);

  console.log(allProducts);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto mt-5 pt-5">
        {allProducts.map((card, index) => (
          <ProductCard
            key={index}
            img={card.productImage}
            title={card.name}
            desc={card.description}
            price={card.price}
            stock={card.stock}
            category={card.category}
            seller={card.owner.name}
          />
        ))}
      </div>
    </>
  );
};

export default DynamicProducts;
