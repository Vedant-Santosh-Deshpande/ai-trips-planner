// import React from 'react'
// import { Link } from 'react-router-dom'
// import { IoMdImages } from "react-icons/io";

// function UserTripCardItem({trip}) {


//   return (
//     <div className='borders p-3'>
//       <Link to={'/view-trip/'+ trip?.id}>
//           <div className='hover:scale-105 transition-all '>
//               <img src="/placeholder.jpg" className='object-cover rounded-xl h-[220px]' />

//               <div>
//               <div className='font-bold text-lg'>
//                 {trip?.userSelection?.location &&
//                   trip.userSelection.location
//                     .toLowerCase()
//                     .split(' ')
//                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//                     .join(' ')
//                 }
//               </div>
//                   <div className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} days trip with {trip?.userSelection?.budget} budget</div>
//               </div>

//           </div>
//       </Link>
//       <div className='flex justify-around mt-2'>
//         <button className='btn btn-outline'><IoMdImages className='text-2xl' />+</button>
//         <button className='btn btn-outline'>Album</button>
//       </div>
//     </div>
//   )
// }

// export default UserTripCardItem





import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdImages } from "react-icons/io";

function UserTripCardItem({ trip }) {
  const navigate = useNavigate();

  const handleAddImage = () => {
    navigate(`/upload-images/${trip.id}`);
  };

  const handleViewAlbum = () => {
    navigate(`/album/${trip.id}`);
  };

  return (
    <div className='borders p-3'>
      <div className='hover:scale-105 transition-all '>
        <img
          src="/placeholder.jpg"
          className='object-cover rounded-xl h-[220px]'
          onClick={() => navigate('/view-trip/' + trip?.id)}
          style={{ cursor: 'pointer' }}
        />

        <div>
          <div className='font-bold text-lg'>
            {trip?.userSelection?.location &&
              trip.userSelection.location
                .toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            }
          </div>
          <div className='text-sm text-gray-500'>
            {trip?.userSelection?.noOfDays} days trip with {trip?.userSelection?.budget} budget
          </div>
        </div>
      </div>

      <div className='flex justify-around mt-2'>
        {/* <button className='btn btn-outline' onClick={handleAddImage}>
          <IoMdImages className='text-2xl' />+
        </button> */}
        <Link to={`/my-trips/upload/${trip?.id}`}>
          <button className='btn btn-outline'><IoMdImages className='text-2xl' />+</button>
        </Link>

        <button className='btn btn-outline' onClick={handleViewAlbum}>
          Album
        </button>
      </div>
    </div>
  );
}

export default UserTripCardItem
