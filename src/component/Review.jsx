import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import ReactPaginate from "react-paginate";

const Review = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [commentMsg, setCommentMsg] = useState({
    comment: "",
    rating: 0,
    productId: productId,
  });
  const user = JSON.parse(localStorage.getItem("userInfo")) ? true : false;
  const userData = JSON.parse(localStorage.getItem("userInfo"))?.user;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCommentMsg({ ...commentMsg, [name]: value });
  };

  const handleRating = (newRating) => {
    setCommentMsg({ ...commentMsg, rating: newRating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Sign in To Leave a Comment!!");
      return;
    }
    let accessToken = await JSON.parse(localStorage.getItem("userInfo"))
      .accessToken;

    setCommentMsg({
      ...commentMsg,
      name: userData.name,
      email: userData.email,
    });

    try {
      const res = await fetch(
        "https://renting-carnival.onrender.com/review/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(commentMsg),
        }
      );
      const data = await res.json();
      if (!data) {
        toast.error("Some error occurred! Comment not sent");
      } else {
        toast.success("Comment Sent Successfully");
        setCommentMsg({
          comment: "",
          rating: 0,
          productId: productId,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error occurred while commenting!!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://renting-carnival.onrender.com/review/get/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productId]);

  const reviewsPerPage = 6;
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="p-4">
      <div>
        <p className="text-2xl font-bold mb-4 mt-4">Leave a comment</p>
        {user ? (
          <div className="my-4">
            <div className="flex gap-4 items-center">
              <img
                className="w-10 h-10 object-cover bg-primary rounded-full"
                src="https://robohash.org/hicveldicta.png"
                alt="user profile"
              />
              <div className="text-sm md:text-md">
                <h1 className="font-bold">{userData.name}</h1>
                <Rate value={commentMsg.rating} onChange={handleRating} />
              </div>
            </div>
            <div className="flex flex-wrap justify-between my-4">
              <input
                className="w-fit min-w-md sm:w-[75%] border-0 border-b outline-none bg-transparent focus:outline-none text-sm"
                type="text"
                placeholder="Add a comment..."
                value={commentMsg.comment}
                onChange={handleInput}
                name="comment"
              />
              <button
                className="bg-primary p-3 w-[17%] min-w-fit rounded-lg hover:bg-gray-500 hover:text-white hover:no-underline text-white text-center mt-2"
                onClick={handleSubmit}
              >
                Comment
              </button>
            </div>
          </div>
        ) : (
          <div className="text-md border-b-2 text-red-600 w-fit font-bold flex items-center">
            <MdErrorOutline className="mx-2" />
            Sign in to leave a comment!!
          </div>
        )}

        {currentReviews.map((review) => (
          <div className="my-6" key={review._id}>
            <div className="flex gap-4 items-center">
              <img
                className="w-10 h-10 object-cover bg-primary rounded-full"
                src="https://robohash.org/hicveldicta.png"
                alt="user profile"
              />
              <div className="text-sm md:text-md">
                <h1 className="font-bold">{review.name}</h1>
                <Rate value={review.rating} disabled />
              </div>
            </div>
            <p className="text-sm mt-1">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-fit mx-auto">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          prenderOnZeroPageCount={null}
          containerClassName="pagination flex space-x-3 text-xl"
          previousLinkClassName="prev bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          nextLinkClassName="next bg-secondary rounded-full px-3 py-1 hover:bg-primary hover:text-white duration-300"
          pageLinkClassName="page-link bg-secondary rounded-lg hover:text-white hover:bg-primary px-3 py-1 duration-300"
          activeLinkClassName="active border-2 border-primary"
          breakLinkClassName="text-primary"
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Review;