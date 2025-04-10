

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchBlogs } from '../../utils/blogAPI';
import Footer from './Footer';

function ViewBlog() {
  const navigate = useNavigate();
  const { location } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs(location);
      setBlogs(data);
    };
    getBlogs();
  }, [location]);

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56 mt-20 flex flex-col gap-6">
      
      <button onClick={() => navigate(-1)} className="btn btn-outline  w-fit"> ← Go Back </button>

      <div className='top-0 text-3xl font-bold flex items-end gap-3'> Blogs for
         <div className="text-4xl font-bold">
          <span className='text-lime-500'>{location &&
                location.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </span> :)
         </div>
      </div>
      
      <div className='flex flex-col gap-4 '>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div className='flex gap-2'>
            <div className="w-10 text-2xl font-bold text-lime-600 borders flex items-center justify-center">{index + 1}</div>
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-full p-4 rounded-lg shadow hover:bg-gray-100 transition-all borders flex gap-3 items-start animate-pulse hover:scale-101"
            >
              
              <div>
                <div className="text-xl font-semibold text-lime-700">{blog.title}</div>
                <p className="text-sm text-gray-600">{blog.snippet}</p>
              </div>
            </a>
          </div>
          
        ))
      ) : (
        <p>Loading or no blogs found...</p>
      )}

      </div>
      <Footer/>
    </div>
  );
}

export default ViewBlog;
