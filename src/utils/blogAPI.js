// // utils/blogAPI.js

// export const searchBlogs = async (query) => {
//     // Dummy response for now
//     return [
//       {
//         title: `Top things to do in ${query}`,
//         snippet: 'Explore the best places, food and culture in ' + query,
//         link: 'https://example.com/blog1',
//       },
//       {
//         title: `Ultimate Travel Guide for ${query}`,
//         snippet: 'From planning to packing, everything you need for your trip to ' + query,
//         link: 'https://example.com/blog2',
//       },
//     ];
  
//     // Later: Integrate a real API like Bing Search, if needed
//   };

import axios from 'axios';

const API_KEY = 'AIzaSyA4hj3Ns0sdmk0DwLe7rsbiD5GS1e_Mips'; // Replace with your actual API key
const SEARCH_ENGINE_ID = 'c6077b62cfaff489c'; // For Google Custom Search

export const fetchBlogs = async (location) => {
  const query = `travel blog ${location}`;
  const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}`;

  try {
    const response = await axios.get(url);
    return response.data.items.map(item => ({
      title: item.title,
      snippet: item.snippet,
      link: item.link,
    }));
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

  