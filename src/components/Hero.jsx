// import React from 'react'

// function Hero() {
//   return (
//     <div className='flex flex-col justify-center item-center mx-56 gap-9'>
//       <div className='font-extrabold text-[50px] text-center mt-16'>
//         <span className='text-[#f56551]'>Discover Your Next Adventure
//         with AI:</span> Personalized Itineraies at Your Fingertips</div>
//         <p className='text-xl text-gray-500 text-center'>Your personal trip planner
//              and travel curator, creating custom Itineraies tailored to your interests
//               and budget.
//         </p>
//         <button className="btn btn-neutral btn-md w-fit ">Get Started, Its Free</button>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <div className="flex flex-col items-center justify-center mt-30 mx-auto px-4 text-center gap-9">
      {/* Heading */}
      <div className="font-extrabold text-4xl md:text-5xl">
        <span className="text-lime-500">Discover Your Next Adventure with AI:</span><br /> Personalized Itineraries at Your Fingertips
      </div>

      {/* Description */}
      <p className="text-lg text-gray-500 max-w-2xl">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* Button */}
      <Link to={'/create-trip'}>
        <button className="btn btn-neutral btn-md w-fit">Get Started, It's Free</button>
      </Link>

      <img src="/laptop2.png" alt="" />
    </div>
  );
}

export default Hero;
