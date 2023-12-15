import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <div className='rounded-lg overflow-hidden bg-gray-100'>
        <img src={props.img} alt="Bikes" className='object-cover h-64 w-full'/>
        <div className='p-3'>
            <h1 className='text-lg font-bold p-1'>{props.title}</h1>
            <p className='text-sm p-1'>{props.desc}</p>
            <p className='font-bold p-1'>Rs: {props.price}</p>
        </div>
    </div>
  )
}

export default Card