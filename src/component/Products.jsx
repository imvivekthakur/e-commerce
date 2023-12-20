import React from "react";
import Card from "./Card";

const Products = () => {
  const cardsData = [
    {
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike1",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike2",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike3",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike4",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike1",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike2",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike3",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
    {
      img: "https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
      title: "Bike4",
      desc: "Lorem ipsum dolor sit amet.",
      price: 2000,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto mb-10">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          title={card.title}
          desc={card.desc}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default Products;
