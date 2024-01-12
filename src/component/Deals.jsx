import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import ProductCard from "./DynamicProducts/ProductCard";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import { ColorRing } from "react-loader-spinner";

const Deals = ({ allProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (allProducts && allProducts.length  > 0) {
      setProducts(allProducts);
      setLoading(true);
    }
  }, [allProducts]);

  return (
    <>
      <div className="text-center text-primary text-4xl font-bold my-10">
        Steal Deals on Rental Items
      </div>
      <div className="mb-8">
        {!loading ? (
          <div className="loader-container w-[10%] mx-auto flex items-center justify-center">
            <ColorRing
              visible={true}
              height="40"
              width="40"
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
          <Carousel
            responsive={responsive}
            containerClass="carousel-container"
            className="w-[90%] mx-auto"
          >
            {products.map((card) => (
              <div key={card._id}>
                <ProductCard
                  img={card.productImages}
                  title={card.name}
                  desc={card.description}
                  price={card.price}
                  stock={card.stock}
                  category={card.category}
                  seller={card.owner.name}
                  productId={card._id}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default Deals;
