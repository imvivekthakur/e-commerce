import React from 'react'

const Categories = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-4xl text-[#CDA274] font-bold text-xl m-6 text-center'>Browse The Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Bedroom</div>
            </div>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Sofa</div>
            </div>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Decorative Items</div>
            </div>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Phone</div>
            </div>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1541348263662-e068662d82af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Car</div>
            </div>
            <div>
                <img className='w-full h-64 object-cover rounded-lg' src="https://images.unsplash.com/photo-1552642762-f55d06580015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Bedroom" />
                <div className='text-center m-2 font-bold text-xl'>Bike</div>
            </div>
        </div>
    </div>
  )
}

export default Categories