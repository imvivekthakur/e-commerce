import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistThunk } from "../redux/wishlistSlice";
import WishlistCard from "./WishListCard";
import empty from "../assets/empty1.png";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist).wishlist;
  const [cardsData, setArr] = useState([]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    dispatch(getWishlistThunk())
      .then((res) => {
        setArr(res.payload.data.wishlist.products);
        return res;
      })
      .catch((err) => {
        return err.response;
      });
  }, []);

  const items = wishlist;
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  //   console.log(Loading items from ${itemOffset} to ${endOffset});
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    // console.log(
    //   User requested page number ${event.selected}, which is offset ${newOffset}
    // );
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
            Wishlist
          </span>
        </h1>
      </div>

      {currentItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-[90%] mx-auto">
            {currentItems.map((card, index) => (
              <WishlistCard
                key={index}
                img={card.productImages}
                title={card.name}
                desc={card.description}
                price={card.price}
                productId={card._id}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-center my-10 text-gray-300 font-bold">
              Wishlist is Empty!!
            </h1>
            <img src={empty} alt="" />
            <Link to="/shop">
              <button className="bg-primary p-3 rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center m-4">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}

      <div className="flex justify-center items-center m-10 mb-16">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex space-x-3 text-xl"
          previousLinkClassName="prev bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          nextLinkClassName="next bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          pageLinkClassName="page-link bg-secondary rounded-lg hover:text-white hover:bg-primary px-3 py-1 duration-300"
          activeLinkClassName="active border-2 border-primary"
          breakLinkClassName="text-primary"
        />
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
