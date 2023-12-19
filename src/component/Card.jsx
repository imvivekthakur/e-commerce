import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({img, desc, price, title}) => {
  
  return (
    <NavLink to='/product'>
      <div className='rounded-lg overflow-hidden bg-gray-100'>
          <img src={img} alt="Bikes" className='object-cover h-64 w-full'/>
          <div className='p-3'>
              <h1 className='text-lg font-bold p-1'>{title}</h1>
              <p className='text-sm p-1'>{desc}</p>
              <p className='font-bold p-1'>Rs: {price}</p>
          </div>
      </div>
    </NavLink>
  )
}

export default Card