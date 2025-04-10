import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { db } from '../service/firebaseConfig';
import UserTripCardItem from './components/UsertripcardItem';
import Footer from '../view-trip/components/Footer';

function MyTrips() {
    const navigate = useNavigate();
    const [trips, setTrips] = useState([]);
    const [userTrips, setUserTrips] = useState([]);

    useEffect(()=>{
        GetUserTrips();
    },[])

    /*Funtion is for getting all User Trips.. */

    const GetUserTrips=async()=>{
        const user =JSON.parse(localStorage.getItem('user'));
        
        if(!user){
            navigate('/');
            return;
        }
        const q = query(collection(db, 'AITrip'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        setUserTrips([]);
        querySnapshot.forEach((doc)=>{
            console.log(doc.id,'=>', doc.data());
            setUserTrips(prevVal =>[...prevVal, doc.data()])
            // trips.push(doc.data()); 
            // console.log('trips: ', trips);
            
        }) 
    }
  return (

        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-35 '>
            <div className='font-bold text-3xl'>My Trips</div>

            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 gap-8 mb-30'>
                {userTrips?.length>0?userTrips.map((trip, index)=>(
                    <UserTripCardItem trip={trip} key={index} />
                    ))
                    :[1,2,3,4,5,6].map((item, index)=>(
                        <div key={index} className='h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'>fd</div>
                    ))
                }
            </div>
        </div>
  )
}

export default MyTrips
