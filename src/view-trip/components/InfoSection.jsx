import React, { useEffect } from 'react'
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetails } from '../../service/GlobalApi';
import { useNavigate } from 'react-router-dom';


function InfoSection({trip}) {
  const navigate = useNavigate();

  useEffect(()=>{
    trip&&GetPlacePhoto();
  },[trip])
  const GetPlacePhoto=async()=>{
    const data ={
      textQuery:trip?.userSelection?.location
    }
    const result = await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data);
    })
  }
return (

    <div className=''>
      <img src="/image-9.jpg" alt="" className='borders h-[320px] w-full object-cover rounded ' />
      <div className='flex justify-between items-center '>
        <div className='my-10 flex flex-col gap-2'>
            <div className='font-bold text-4xl text-lime-700'>
                {trip?.userSelection?.location.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Loading..."}
                <div className='flex gap-5 mt-3'>
                    <div className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>📆 {trip?.userSelection?.noOfDays} Day</div>
                    <div className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>💰 {trip?.userSelection?.budget} Budget</div>
                    <div className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm'>🥂 No. of traveler: {trip?.userSelection?.traveler} </div>
                </div>
            </div>
        </div>
            <div className=' flex gap-5 items-center'>
              {trip?.userSelection?.location && (
                <button
                  className="btn btn-outline mt-4"
                  onClick={() => navigate(`/view-blog/${trip.userSelection.location}`)}
                >
                  View Related Blogs
                </button>
              )}

              <button className='btn btn-neutral '><IoIosSend className='text-xl' /></button>
            </div>

      </div>
    </div> 
  )
}

export default InfoSection
