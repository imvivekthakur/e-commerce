import React, { useState } from 'react'
import { Rate } from 'antd';

const Product = () => {
  const [isActive, setIsActive] = useState(1);
  const handleClick = (index) => {
    setIsActive(index);
  };
  
  return (
    <div className='w-[90%] mx-auto'>
        <div className='flex flex-wrap pb-4 mb-4 border-b-2'>
            <div className='md:flex gap-2 w-full lg:w-1/2'>
                <div className='flex md:block'>
                    <img className='h-12 w-16 m-1 overflow-hidden md:m-4 rounded-md' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                    <img className='h-12 w-16 m-1 overflow-hidden md:m-4 rounded-md' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                    <img className='h-12 w-16 m-1 overflow-hidden md:m-4 rounded-md' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                    <img className='h-12 w-16 m-1 overflow-hidden md:m-4 rounded-md' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                    <img className='h-12 w-16 m-1 overflow-hidden md:m-4 rounded-md' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
                </div>
                <img className='md:m-4 rounded-lg w-full block' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="product" />
            </div>
            <div className='lg:w-1/2'>
                <div className='md:w-[90%] mx-auto my-4'>
                    <h1 className='text-xl font-bold'>Product Heading</h1>
                    <div className='text-sm text-gray-500'>Rs 2000</div>
                    <div>
                        <Rate allowHalf defaultValue={4.5} className='text-sm'/>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, nobis! </p>
                    <div className='my-2'>
                        <div className='text-gray-500'>Sizes</div>
                        <div>
                            <button className='w-10 py-1 bg-[#CDA274] rounded-sm text-white '>L</button>
                            <button className='w-10 py-1 ml-4 bg-[#CDA274] rounded-sm text-white '>XL</button>
                            <button className='w-10 py-1 ml-4 bg-[#CDA274] rounded-sm text-white '>XS</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className='text-gray-500'>Colors</div>
                        <div>
                            <button className='w-8 h-8 rounded-full bg-blue-300'></button>
                            <button className='w-8 h-8 rounded-full bg-purple-300 ml-4'></button>
                            <button className='w-8 h-8 rounded-full bg-red-300 ml-4'></button>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <div className='mt-2 w-24 text-xs md:text-sm md:w-32 mr-2 md:mr-6 flex justify-between border-2 border-black rounded-lg p-2'><span>-</span><span>1</span><span>+</span></div>
                        <div><button className='mt-2 w-24 text-xs md:text-sm md:w-32 mr-2 md:mr-6 border-2 border-black rounded-lg p-2'>Add To Cart</button></div>
                        <div><button className='mt-2 w-24 text-xs md:text-sm md:w-32 mr-2 md:mr-6 border-2 border-black rounded-lg p-2'>+ Compare</button></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='w-[90%] md:w-[75%] mx-auto'>
            <div className='flex justify-center text-gray-500'>
                <div className={`m-4 text-center ${isActive == 1 ? 'font-bold' : ''}`} onClick={() => handleClick(1)}>Description</div>
                <div className={`m-4 text-center ${isActive == 2 ? 'font-bold' : ''}`} onClick={() => handleClick(2)}>Reviews[5]</div>
            </div>
            <div className=' text-sm text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tempora vel iste corrupti voluptates amet et dolorum provident, aspernatur nihil incidunt dolorem repudiandae eius, dolore voluptatum eos quam delectus possimus.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quod unde dolores placeat non impedit iure praesentium similique iste et.
            </div>
            <div className="flex gap-6">
                <img className='w-1/2 h-56 my-6 rounded-2xl object-cover' src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D" alt="similar bedrooms" />
                <img className='w-1/2 h-56 my-6 rounded-2xl object-cover' src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlZHJvb218ZW58MHx8MHx8fDA%3D" alt="similar bedrooms" />
            </div>
        </div>
    </div>
  )
}

export default Product