  import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/firebaseConfig' 
import toast from 'react-hot-toast';
import InfoSection from '../components/infoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

  
  function ViewTrip() {
    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
      if (tripId) {
        console.log("Fetching Trip ID:", tripId);
        GetTripData(tripId);
      } else {
        console.log("No tripId found in URL");
      }
    }, [tripId]);

    // Use to get Trip Information from Firebase

    const GetTripData =async ()=>{
        const docRef = doc(db, 'AITrip', tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log('Document: ',docSnap.data()); 
            setTrip( docSnap.data());
        }else{
            console.log("No such document!");
            toast.error('No trip found!')
        }
    }

    // const GetTripData = async (tripId) => {
    //   if (!tripId) {
    //     console.error("Trip ID is undefined!");
    //     return;
    //   }
    
    //   try {
    //     const docRef = doc(db, 'AITrip', tripId);
    //     const docSnap = await getDoc(docRef);
    //     console.log("here");
        
    //     if (docSnap.exists()) {
    //       console.log('Document:', docSnap.data());
    //       setTrip( docSnap.data());
    //     } else {
    //       console.log("No such document!");
    //       toast.error('No trip found!');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching trip:', error);
    //     toast.error('Error fetching trip data!');
    //   }
    // };
    

    return (
      <div className='bg-lime-100'>

        <div className='p-10 md:px-20 lg:px-44 xl:px-56 mt-20 flex flex-col gap-10 bg-white'>
          {/* Information Section */}
          <InfoSection trip={trip} />

          {/* recomended Hotels */}
          <Hotels trip={trip} />

        {/* Daily Plan */}
          <PlacesToVisit trip={trip} />

          {/* Footer */}
          <Footer trip={trip} />
        </div>
      </div>
    )
  }
  
  export default ViewTrip
    