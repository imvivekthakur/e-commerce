import React from 'react'
import calender from '../assets/calender.svg'

const Working = () => {
  return (
    <div className='w-[90%] mx-auto m-8'>
        <div className='text-center m-8'>
            <h1 className='text-4xl text-[#CDA274] font-bold m-3'>How it works</h1>
            <p>A high-performing web based rental system</p>
        </div>
        <div className='flex flex-wrap'>
            <div className='text-center w-full lg:w-1/3 p-6'>
                <img src={calender} alt="location" className='mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]'/>
                <h3 className='text-2xl font-bold p-4'>Choose Location</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero sint. Inventore quo amet molestiae fugiat cum odio, ipsa corrupti. </p>
            </div>
            <div className='text-center w-full lg:w-1/3 p-6'>
                <img src={calender} alt="location" className='mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]'/>
                <h3 className='text-2xl font-bold p-4'>Choose Location</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero sint. Inventore quo amet molestiae fugiat cum odio, ipsa corrupti. </p>
            </div>
            <div className='text-center w-full lg:w-1/3 p-6'>
                <img src={calender} alt="location" className='mx-auto p-3 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]'/>
                <h3 className='text-2xl font-bold p-4'>Choose Location</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, libero sint. Inventore quo amet molestiae fugiat cum odio, ipsa corrupti. </p>
            </div>
        </div>
    </div>
  )
}

export default Working