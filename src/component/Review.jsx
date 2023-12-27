import React, { useState } from "react";
import review from "../assets/review.svg"
import { Rate } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Review = () => {
  const [commentMsg, setCommentMsg] = useState({
    name: "",
    email: "",
    course: "",
    comment: "",
    rating: 0,
  });
  console.log(commentMsg);
  const user = JSON.parse(localStorage.getItem("userInfo")) ? true : false;
  const userData = JSON.parse(localStorage.getItem("userInfo"))?.user;

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setCommentMsg({ ...commentMsg, [name]: value });
  };

  const handleRating = (newRating) => {
    setCommentMsg({ ...commentMsg, rating: newRating });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Signin To Leave a Comment!!");
      console.log("login first");
      return;
    }
    setCommentMsg({
      ...commentMsg,
      name: userData.name,
      email: userData.email,
    });
    try {
      const res = await fetch(
        "https://hea-zg7o.onrender.com/feedback/submitFeedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentMsg),
        }
      );
      console.log("data sent!!");
      const data = await res.json();
      console.log("hello", data);
      if (!data) {
        console.log("comment not sent");
      } else {
        toast.success("Comment Sent Successfully");
        console.log("comment sent successfully");
        setCommentMsg({
          name: "",
          email: "",
          course: "",
          comment: "",
          rating: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center my-12">
      <form
        method="POST"
        className="w-full sm:w-[86%] grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 rounded-lg overflow-hidden shadow-md "
      >
        <div className="rounded-lg overflow-hidden ">
          <img className="w-full object-cover" src={review} alt="Review" />
        </div>
        <div className="flex justify-center items-center px-8 pt-2 md:pt-6 rounded-lg overflow-hidden ">
          <div>
            <h1 className="text-4xl text-center p-3 font-extrabold text-black">
              Reviews and Comments
            </h1>
            <div className="text-center">
              Remember to give a positive feedback
            </div>
            {user ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  className="input border-2 rounded-md border-gray-200 w-full mt-6 bg-white"
                  readOnly
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  className="input border-2 rounded-md border-gray-200 w-full mt-6 bg-white"
                  readOnly
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={commentMsg.name}
                  placeholder="Enter name"
                  className="input border-2 rounded-md border-gray-200 w-full mt-6 bg-white"
                  onChange={handleInput}
                />
                <input
                  type="email"
                  name="email"
                  value={commentMsg.email}
                  placeholder="Enter email"
                  className="input border-2 rounded-md border-gray-200 w-full mt-6 bg-white"
                  onChange={handleInput}
                />
              </>
            )}
            

            <div className="px-4 py-2 my-4 border rounded-lg">
              <div>What would you rate the course? </div>
              <Rate
                className="text-primary"
                name="rating"
                value={commentMsg.rating}
                onChange={handleRating}
              />
            </div>

            <textarea
              name="comment"
              value={commentMsg.comment}
              className="textarea textarea-bordered w-full h-32 mt-2 bg-white"
              placeholder="Enter your response"
              onChange={handleInput}
            ></textarea>
            <div className="container text-center my-6">
              <div
                className="btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl"
                onClick={handleSubmit}
              >
                Leave a comment
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Review;
