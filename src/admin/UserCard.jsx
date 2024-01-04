import React from "react";

const UserCard = ({ img, name, email, phone, role }) => {
  return (
    <div className="product-card-link">
      <div className="rounded-lg overflow-hidden bg-gray-100 product-card">
        <img
          src={img}
          alt="Bikes"
          // className="h-80 w-full"
          className="rounded-full w-40 h-40 border mx-auto mt-3"
        />
        <div className="p-4">
          <h1 className="text-lg font-bold p-1">{name}</h1>
          <h2 className="text-sm font-semibold p-1">{email}</h2>

          <p className="text-sm p-1">{phone}</p>
          <p className="text-md text-black font-medium p-1">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
