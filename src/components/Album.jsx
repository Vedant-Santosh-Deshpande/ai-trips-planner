import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';

const Album = () => {
  const { tripId } = useParams();
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchTripLocation = async () => {
      try {
        const tripRef = doc(db, 'AITrip', tripId);
        const tripSnap = await getDoc(tripRef);

        if (tripSnap.exists()) {
          const data = tripSnap.data();
          console.log('here id your data: ',data);
          
          setLocation(data.userSelection.location || 'Unknown Location');
        } else {
          setError(true);
        }
      } catch (err) {
        toast.error('Error fetching trip:', err);
        console.log('Error fetching trip:', err);
        setError(true);
      }
    };

    fetchTripLocation();

    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "tripAlbums", tripId, "images"));
      const imgs = querySnapshot.docs.map(doc => doc.data().imageUrl);
      setImages(imgs);
    };

    fetchImages();
  }, [tripId]);

  return (
    <div className=' p-24'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>Picture Album of <span className='text-lime-600 text-3xl'>{location.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} </span></div>
        <button className='btn btn-neutral' onClick={() => Navigate(`/my-trips/upload/${tripId}`)}>+ Add Images</button>
      </div>
      <div className='borders  w-fit p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
        {images.length > 0 ? images.map((url, i) => (
          <img key={i} src={url} alt="Trip" className="rounded-xl shadow-md" />
        )) : <p>No images yet.</p>}
      </div>
    </div>

  );
};

export default Album;
