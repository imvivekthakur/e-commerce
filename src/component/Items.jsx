import React, { useState } from 'react'
import Card from './Card';

const Items = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  const cardsData = [
    {
        img:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike1",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike2",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike3",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike4",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike1",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike2",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1611429532458-f8bf8f6121fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike3",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
    {
        img:"https://images.unsplash.com/photo-1617109887854-f661d37fca2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXN8ZW58MHx8MHx8fDA%3D",
        title:"Bike4",
        desc: "Lorem ipsum dolor sit amet.",
        price: 2000
    },
  ]
  return (
    <>
        <div className='text-center m-8'>
            <h1 className='text-4xl text-[#CDA274] font-bold m-3'>Most popular Rental Items</h1>
            <p>Lorem ipsum dolor sit amet. </p>
        </div>
        <div className='flex flex-wrap w-[90%] mx-auto'>
            <div className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${activeTab === 1 ? 'text-[#CDA274] border-[#CDA274] font-bold' : ''}`} onClick={() => handleClick(1)}>Popular</div>
            <div className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${activeTab === 2 ? 'text-[#CDA274] border-[#CDA274] font-bold' : ''}`} onClick={() => handleClick(2)}>Furniture</div>
            <div className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${activeTab === 3 ? 'text-[#CDA274] border-[#CDA274] font-bold' : ''}`} onClick={() => handleClick(3)}>Decorative Items</div>
            <div className={`text-center w-full lg:w-1/4 p-6 border-b-2 ${activeTab === 4 ? 'text-[#CDA274] border-[#CDA274] font-bold' : ''}`} onClick={() => handleClick(4)}>Bikes</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto'>
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
        <div className='text-center my-6'><button className='border-2 border-[#CDA274] text-[#CDA274] px-6 py-2 rounded-md'>Show More</button></div>
    </>
  )
}

export default Items