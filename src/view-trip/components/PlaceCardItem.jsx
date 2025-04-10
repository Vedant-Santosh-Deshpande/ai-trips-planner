import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+ place.placeName} target='_blank'>
      <div className=' borders rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all  hover:shadow-md cursor-pointer'>
        <img src="/photo.jpg" className='w-[130px] h-[130px] rounded-xl ' />
        <div>
          <div className='font-bold text-lg'>{place.placeName}</div>
          <p className='text-sm text-gray-400'>{place.placeDetails}</p>
          <p className='pt-2 text-sm font-bold'>🕙 {place.timeToTravel} </p>
          {/* <button className='btn btn-neutral btn-sm'><FaMapLocationDot className='' /></button> */}
        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem
