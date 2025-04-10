
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../utils/firebase';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { Toaster, toast } from 'react-hot-toast';

const UploadImages = () => {
  const { tripId } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [error, setError] = useState(false);

  // Fetch trip location when component mounts
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
  }, [tripId]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file to upload.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'trip-images-new');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/dto2m15bh/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      const uploadedUrl = data.secure_url;
      setImageUrl(uploadedUrl);

      await addDoc(collection(db, 'tripAlbums', tripId, 'images'), {
        imageUrl: uploadedUrl,
        createdAt: new Date(),
      });

      toast.success('Image uploaded and saved!');
    } catch (err) {
      console.error('Upload error:', err);
      toast.error('Failed to upload image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[80vh] ">
      
      <div className='mt-30 ml-10 mr-10 flex flex-row justify-between items-center'>
        <div className=' borders w-fit p-3 cursor-pointer'  onClick={() => navigate(`/view-trip/${tripId}`)}>← back to {location.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} trip</div>
        <button className=" btn btn-neutral" onClick={() => navigate(`/album/${tripId}`)} >
          View Album
        </button>
      </div>

        {/* Trip Heading */}
        <div className='flex justify-center mt-20'>
          {error ? (
            <div className="text-lg font-semibold text-red-600 underline">
              Trip not found!
            </div>
          ) : (
            <div className="text-3xl font-semibold  ">
              Upload Images for trip to <span className='text-lime-600'>{location.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} </span> :)
            </div>
          )}
        </div>
        
      <div className="p-4 borders space-y-2 mt-20 max-w-md mx-auto flex flex-col items-center justify-center bg-white shadow-lg">
          
          <div className="text-xl font-semibold text-center text-lime-700">Upload Image</div>

          <div className="flex flex-col items-center space-y-2 w-full">
            <input type="file" id="fileUpload" onChange={handleFileChange} className="hidden" />
            <label htmlFor="fileUpload" className="cursor-pointer underline text-blue-500 px-4 py-2 rounded-lg text-sm">
              Choose File
            </label>
            <p className="text-sm text-gray-600 italic">
              {file ? file.name : 'No file chosen'}
            </p>
          </div>

          <button
            onClick={handleUpload}
            className={`${file ? 'btn btn-outline btn-success':'btn btn-outline btn-error'} w-fit px-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>

          {imageUrl && (
            <div className="mt-4">
              <h4 className="text-md font-medium mb-1">Uploaded Preview:</h4>
              <img src={imageUrl} alt="Uploaded" className="rounded shadow-md" />
            </div>
          )}
      </div>

     






    >
    </div>
  );
};

export default UploadImages;
