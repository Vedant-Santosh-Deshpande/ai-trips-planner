import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div className='top-10'>
      <div className='font-bold text-2xl mt-10 text-lime-500'>Places to Visit</div>

      <div>
        {/* trip.tripData?.itinerary &&
        Object.entries(trip.tripData.itinerary).map(([day, details], index) => (
          <div key={index}>
            <div className="font-medium text-lg">{day}</div>
            <p>Best Time to Visit: {details.bestTimeToVisit}</p>
            {/* {details.plan.map()} */}
           
           {trip.tripData?.itinerary && Object.entries(trip.tripData.itinerary).sort().map(([day, details], index) => (
              <div  className=" ">
                <div className="font-bold text-lg ">{day.toUpperCase()}</div>

                <div className=' grid md:grid-cols-2 gap-5'>
                  {details.plan?.map((place, i) => (
                    <div key={i} className="ml-4">
                      <div className='my-3'>
                        <PlaceCardItem place={place}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

      


      </div>
    </div>
  )
}

export default PlacesToVisit
