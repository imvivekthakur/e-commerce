import React from 'react'
import testimonials from '../assets/testimonials.png'

const Testimonials = () => {
  return (
    <>
        <h1 className='text-4xl text-[#CDA274] font-bold m-6 text-center'>Our Testimonials</h1>
        <img src={testimonials} alt="testimonials" className='w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-contain'/>
    </>
  )
}

export default Testimonials