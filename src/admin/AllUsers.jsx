import React, { useEffect, useState } from "react";
import DefaultNavbar from "../component/Default_Navbar";
import Footer from "../component/Footer";
import image from "../assets/default.jpg";
import ReactPaginate from "react-paginate";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        const response = await fetch(
          "https://renting-carnival.onrender.com/admin/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  console.log(users);
  return (
    <>
      <DefaultNavbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto  mt-40">
        {users.map((card, index) => (
          <UserCard
            key={card._id}
            img={card.photo || image}
            name={card.name}
            email={card.email}
            phone={card.phone}
            role={card.role}
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

export default AllUsers;
