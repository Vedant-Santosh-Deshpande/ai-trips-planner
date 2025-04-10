import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from "../constants/Option";
import toast from "react-hot-toast";
import { chatSession } from "../service/AIModal";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog]= useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 


  const handleInputChange = (name, value)=>{
    setFormData({
      ...formData,
      [name]: value
    })
  }


  useEffect(()=>{
    console.log(formData);
    
  },[formData])


  const onGenerateTrip =async () => {

    const user = localStorage.getItem('user');
    if(!user){
      setOpenDialog(true);
      return;
    }

    // Check if any required field is missing
    if (!formData?.location || !formData?.noOfDays || !formData?.budget || !formData?.traveler) {
      toast.error("Please fill all details carefully!");
      console.log("Warning! Error in form filling.");
      return;
    }
  
    // Check if number of days is greater than 10
    if (formData?.noOfDays > 10) {
      toast.error("You cannot plan a trip for more than 10 days.");
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
    // .replace('{location}',formData?.location?.label)                              <<<------    *'here'*   
    .replace('{location}',formData?.location)
    .replace('{totalDays}', formData?.noOfDays)
    .replace('{traveler}', formData?.traveler)
    .replace('{budget}', formData?.budget)
    .replace('{totalDays}', formData?.noOfDays)

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--",result?.response?.text());
    setLoading(false);
    saveAiTrip(result?.response?.text());
    
  };

  const saveAiTrip=async (TripData)=>{
    setLoading(true);
    const user =JSON.parse( localStorage.getItem('user'));
    const docId = Date.now().toString()
    // await setDoc(doc(db,"AITrip",docId),{
    //   userSelection:formData,
    //   tripData:TripData,
    //   userEmail:user?.email,
    //   id:docId
    // })
    await setDoc(doc(db, "AITrip", docId), {
      userSelection: formData,
      tripData:JSON.parse(TripData) ,
      userEmail: user?.email,
      id: docId
    }).then(() => {
      toast.success("Data saved successfully!");
    }).catch((error) => {
      toast.error("Error saving data:", error);
    });
    
    setLoading(false);
    navigate('/view-trip/'+docId)
  }

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
        onGenerateTrip();
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  })

  

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-35">
      <div className="font-bold text-3xl">Tell us your travel preferences 🏕️🌴</div>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itinerary on your prefrences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <div className="text-xl my-3 font-medium">
            What is desination of choice?
          </div>
          {/* {/* <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place, onChange:(v)=>{setPlace(v); handleInputChange('location',v )}
            }}
          />                                                                                <<----   * 'Here' */}
          <input
            type="text"
            placeholder="Waiting for google place api then after comment out above code!"
            className="w-[500px] borders paddings"
            onChange={(e) => {
              setPlace(e.target.value); 
              handleInputChange('location', e.target.value);
            }}
          />
        </div>

        <div>
          <div className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </div>
          <input
            type="number"
            className="borders input validator input-sm"
            required
            placeholder={"Ex.3"}
            min="1"
            max="10"
            title="Must be between be 1 to 10"
            onChange={(e)=>handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        <div>
            <div className="text-xl my-3 font-medium">
              What is Your Budget?
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 w-full">
              {SelectBudgetOptions.map((item, index)=>(
                <div key={index}
                onClick={()=>handleInputChange('budget',item.title)}
                className={`tags ${formData?.budget === item.title ? 'selected' : ''}`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-sm  text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
        </div>

        <div>
            <div className="text-xl my-3 font-medium">
              Who do you plan to trvelling with on your next adventure?
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 w-full">
              {SelectTravelsList.map((item, index)=>(
                <div key={index}
                onClick={()=>handleInputChange('traveler',item.people)}
                className={`tags ${formData?.traveler === item.people ? 'selected' : ''}`}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-sm  text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
        </div>

      </div>
        
        {/* Generate Trip Button */}
      <div className="flex my-10 justify-end">
        <button disabled={loading} className="btn btn-neutral" onClick={onGenerateTrip}>
          {loading?<AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />:'Generate Trip'}
          </button>
      </div>

      
     
        <dialog id="my_modal_3" className="modal" open={openDialog} >
          <div className="modal-box relative" >
            <form method="dialog" >
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <img src="/logo.svg" alt="" className="w-40 h-40" />
              <div className="font-bold text-lg mt-7">Sign In with Google</div>
              <p className="">Sign In to the app with Google authentication</p>
              <button disabled={loading} onClick={login} className="btn btn-neutral btn-sm w-full flex gap-4 items-center ">
              <FcGoogle className="w-7 h-7" />  
                Sign In with Google</button>
            </form>
          </div>
      </dialog>

    </div>
    
    
  );
}

export default CreateTrip;
