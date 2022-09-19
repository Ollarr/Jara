/* eslint-disable no-empty */
// import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import image from '../image.png';



const initialState = {
  firstName: "",
  lastName:"",
  email: "",
  password: "",
  confirmPassword: ""
}

// eslint-disable-next-line react/prop-types
const Auth = ({setActive}) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const {firstName, lastName, email, password,  confirmPassword} = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
  const navigate = useNavigate();
  const handleAuth = async (e)=> {
    e.preventDefault();
    if(!signUp){

    } else{
      if (password !== confirmPassword) {
        return toast.error("passwords do not match");
      }
      if(firstName && lastName && password){
        const { user } = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password);
        await updateProfile(user, {displayName: `${firstName} ${lastName}`});
        setActive("home")
      }
      else{
        return toast.error('All fields are mandatory');
      }
    }
    navigate("/");
  }
  return (
    <>
    <div className=" mt-8 mb-16 flex max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-lg dark:bg-gray-900 lg:max-w-4xl">
      <div className= "bg-cover lg:block lg:w-1/2" 
      style= {{ backgroundImage:  `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      backgroundPosition: 'center center'}}>
    </div>
    
    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">JARA</h2>

    <p className="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p>
    <a href="Google.com" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
              <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                  <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                  <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                  <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
              </svg>
          </div>

                <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
            </a>
   
    
{/* check input field */}
<form className='' onSubmit={handleAuth}>
{signUp && (
  <>
   <div className="mt-4">
      <label className="text-left block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">First Name</label>
      <input type="text" name="firstName" placeholder='First name' value={firstName} onChange={handleChange} className="form-control input-text-area block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" ></input>
    </div>
    <div className="mt-4">
      <label className="text-left block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Last Name</label>
      <input type="text" name="lastName" placeholder='Last name' value={lastName} onChange={handleChange} className="form-control input-text-area block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" ></input>
    </div>
  </>
)}
    <div className="mt-4">
      <label className="text-left block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
      <input type="email" name="email" placeholder='Email' value={email} onChange={handleChange} id="LoggingEmailAddress" className="form-control input-text-area block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" ></input>
    </div>

    <div className="mt-4">
      <div className="flex justify-between">
        <label className="text-left block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
        <p className=" cursor-pointer text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</p>
      </div>
      <input type="password" name="password" placeholder='Password' value={password} onChange={handleChange} id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" ></input>
    </div>
{signUp && (
  <div className="mt-4">
      <label className="text-left block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Confirm Password</label>
      <input type="password" name="confirmPassword" placeholder='Confirm password' value={confirmPassword} onChange={handleChange} id="LoggingEmailAddress" className="form-control input-text-area block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" ></input>
    </div>
)}
    
    <div className="mt-8">
      <button type= "submit" className={`bg-green-400 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}>
        {!signUp ? "Login" : "Sign-up"}
      </button>
    </div>
    </form>
{/* Sign up */}
{!signUp ? (
  <>
  <div className="flex items-center justify-between mt-4">

      <p className="text-xs text-gray-500 uppercase dark:text-gray-400 text-center" >Don&apos;t have an account?
      <span className="hover:underline" style={{textDecoration: "none", cursor: "pointer", }} onClick={() => setSignUp(true)}>&emsp;&emsp;Sign up</span>
      </p>
    </div>
    </>
) : (
  <>
   <div className="flex items-center justify-between mt-4">

      <p className="text-xs text-gray-500 uppercase dark:text-gray-400 text-center" >Already have an account?
      <span className="hover:underline" style={{textDecoration: "none", cursor: "pointer"}} onClick={() => setSignUp(false)}>&emsp;&emsp;Sign in</span>
      </p>

    </div>
  </>
)}
    

  </div>
  </div>
</>
  )
}

export default Auth