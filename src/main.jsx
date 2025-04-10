import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/Index.jsx'
import Header from './components/Header.jsx'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/index.jsx'
import MyTrips from './my-trips/Index.jsx'
import ViewBlog from './view-trip/components/ViewBlog.jsx'
import Album from './components/Album.jsx'
import UploadImages from './components/UploadImages.jsx'
import Footer from './view-trip/components/Footer.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },{
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  },
  {
    path:'/my-trips',
    element:<MyTrips/>
  },
  {
    path:'/view-blog/:location',
    element:<ViewBlog/>
  },
  {
    path:'/my-trips/upload/:tripId',
    element:<UploadImages/>
  },
  {
    path:'/album/:tripId',
    element:<Album/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </GoogleOAuthProvider>
    
  </StrictMode>,
)
