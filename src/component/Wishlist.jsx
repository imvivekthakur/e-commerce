import React, { useEffect, useState } from "react";
import DefaultNavbar from "./Default_Navbar";
import ReactPaginate from "react-paginate";
import Footer from "./Footer";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { getWishlistThunk } from "../redux/wishlistSlice";
import WishlistCard from "./WishListCard";

const Wishlist = () => {
  const dispatch = useDispatch();

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
        console.log(res);
        setArr(res.payload.data.wishlist.products);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }, []);

  console.log(cardsData);
  // const cardsData = [
  //   {
  //     img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike1",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike2",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike3",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike4",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike1",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike2",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike3",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
  //     title: "Bike4",
  //     desc: "Lorem ipsum dolor sit amet.",
  //     price: 2000,
  //   },
  // ];
  const items = cardsData;
  //   console.log(items);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-[90%] mx-auto">
        {currentItems.map((card, index) => (
          <WishlistCard
            key={index}
            img={card.productImage}
            title={card.name}
            desc={card.description}
            price={card.price}
            productId={card._id}
          />
        ))}
      </div>
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
