// import React from 'react'

// function Footer() {
//   return (
//     <div className=' my-7 bg-gray-100 '>
//       <div className='text-center  text-gray-600'>Made for NLP & GenAI Project</div>
      
//       <div className='text-start  text-gray-400'>Members of group:
//         <ul className='list-disc list-inside'>
//           <li>Akhilesh Choudhary - 20120361</li>
//           <li>Ritesh Alkuthe - 20120363</li>
//           <li>Vedant Deshpande - 20120364</li>
//           <li>Akash gangurde - 20120365</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';

function Footer() {
  return (
    <footer className="left-0 bottom-0 bg-gray-100 py-4 px-4 text-sm text-gray-600">
      <div className="text-center mb-2">Made for NLP & GenAI Project</div>
      <div className="text-start text-gray-500 max-w-4xl mx-auto">
        <p className="font-semibold">Members of group:</p>
        <ul className="list-disc list-inside">
          <li>Akhilesh Choudhary - 20120361</li>
          <li>Ritesh Alkuthe - 20120363</li>
          <li>Vedant Deshpande - 20120364</li>
          <li>Akash Gangurde - 20120365</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
