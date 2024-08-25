import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setIsSignInform]=useState(true);
    const toggleSignup=()=>{
        setIsSignInform(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt=""
        />
      </div>
      <div className="h-screen flex  items-center justify-center text-white">
      <form className=" relative bg-black p-4  w-3/12   rounded-lg bg-opacity-75 sm:p-6 lg:8 ">
      <label  className="text-xl font-bold my-2"> {isSignInForm?'Sign In':'Sign Up'}</label>
      {!isSignInForm &&  <input type="text" placeholder="Name" className="p-2  my-4 bg-slate-700 w-full" />}
        <input type="email" placeholder="Email" className="p-2  my-4 bg-slate-700 w-full" />
        <input type="password" placeholder="password" className="p-2  my-4 bg-slate-700 w-full" />
        <button type="submit "className="bg-red-700 p-2  w-full my-4 ">{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className="my-4 cursor-pointer" onClick={toggleSignup}> {isSignInForm?'New to Netflix ? Sign Up Now':'Already registered!!! Start Watching !!'}
            </p>
      </form>
      
      </div>
    </div>
  );
};

export default Login;
