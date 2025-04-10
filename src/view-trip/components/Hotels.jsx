import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  return (
    <div className=''>
      <div className='font-bold  mt-5 text-lime-500 text-2xl'>Hotel Recommedation</div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
        {trip?.tripData?.hotelOptions?.map((hotel,index)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ", "+ hotel?.address} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer borders p-2 h-85'>
            <img src="/hotels.jpg" className='rounded-xl' />
            <div className='my-2 flex flex-col gap-2'>
                <div className='font-medium'>{hotel?.hotelName} </div>
                <div className='text-xs text-gray-500'>📍 {hotel?.address} </div>
                <div className='text-sm font-bold'>💵 {hotel?.price} </div>
                <div className='text-sm font-bold'>⭐ {hotel?.rating} </div>
            </div>
            </div>
            </Link>
        ))}
      </div>

      
    </div>
  )
}

export default Hotels