// import axios from 'axios';

// export const uploadImageToCloudinary = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', 'trip_album'); // Preset from Cloudinary dashboard
//   formData.append('cloud_name', 'dto2m15bh');

//   try {
//     const res = await axios.post(
//       'https://api.cloudinary.com/v1_1/dto2m15bh/image/upload',
//       formData
//     );
//     return res.data.secure_url; // Use this URL wherever needed
//   } catch (err) {
//     console.error('Cloudinary upload error:', err);
//     return null;
//   }
// };

import axios from 'axios';

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset'); // MUST match the one in your Cloudinary settings

  try {
    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/<your_cloud_name>/image/upload',
      formData
    );
    return res.data.secure_url; // image URL
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};
