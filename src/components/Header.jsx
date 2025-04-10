import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Header() {
  const [openDialog, setOpenDialog]= useState(false);
  const user=JSON.parse(localStorage.getItem('user'));
  const isCreateTripPage = window.location.pathname === "/create-trip"; 
  const isMyTripsPage = window.location.pathname === "/my-trips"; 

  useEffect(()=>{
    console.log(user);
  },[user])

  const login = useGoogleLogin({

    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      
      try {
        // Fetch user profile using the access token
        const res = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
  
        console.log("User Info:", res.data);
        localStorage.setItem("user", JSON.stringify(res.data)); // Store user in local storage
        setOpenDialog(false);
        window.location.reload();
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast.error("Error fetching user profile:", error);
      }
    },
    onError: (error) => {
      console.log("Login Failed:", error);
      toast.error('Login Failed:', error);
    }
  })

  return (
    <div className="navbar borderbottom fixed left-0 top-0 p-2 shadow-lg flex justify-between items-center px-5 z-50 bg-white bg-opacity-100 backdrop-blur-md  ">
      
      <div className="navbar-start">
        
        <a href="/" className="flex justify-center items-center">
          <img src="/Travel.svg" alt="" className="w-20 h-20 ml-10"  /><span className="text-[#76ad84]">Travus</span> 
        </a>
      </div>
      
      <div className="navbar-end mr-2">
        {user? 
        <div className="flex items-center gap-3">
          {!isCreateTripPage && (
            <a href="/create-trip">
              <button className="btn btn-outline ">+ Create Trip</button>
            </a>
          )}
          
          {!isMyTripsPage && (
            <a href="/my-trips">
              <button className="btn btn-outline ">My Trips</button>
            </a>
          )}
          
          <details className="dropdown">
            <summary className="btn m-1"><img src={user?.picture} className="h-[35px] w-[35px] rounded-full " alt="user" /></summary>
            <ul className="menu dropdown-content borders cursor-pointer  mt-4 flex flex-col items-center justify-center ">
                <li className="hover:font-semibold p-2 hover:bg-gray-100 " onClick={() => {window.location.href = "/create-trip";}} >Create trip</li>
                <li className="hover:font-semibold p-2 hover:bg-gray-100" onClick={() => {window.location.href = "/my-trips";}}>My Trips</li>
                <li>
                  <a onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.href = "/";
                  window.location.reload();
                }}
                className="hover:font-semibold border border-b-2">Logout</a></li>
            </ul>
          </details>
        </div>
          : 
          <button className="btn btn-outline btn-success" onClick={()=>setOpenDialog()} >Try for Free!</button>
        }
      </div>
              <dialog id="my_modal_3" className="modal absolute" open={openDialog} >
                <div className="modal-box relative" >
                  <form method="dialog" >
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <img src="/logo.svg" alt="" className="w-40 h-40" />
                    <div className="font-bold text-lg mt-7">Sign In with Google</div>
                    <p className="">Sign In to the app with Google authentication</p>
                    <button onClick={login} className="btn btn-neutral btn-sm w-full flex gap-4 items-center ">
                    <FcGoogle className="w-7 h-7" />  
                      Sign In with Google</button>
                  </form>
                </div>
            </dialog>
    </div>
  );
}

export default Header;
