import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);
  const [errorMsg,setErrorMsg]=useState(null);
  const email=useRef();
  const password=useRef();
  const toggleSignup = () => {
    setIsSignInform(!isSignInForm);
  };
  const checkValidation=()=>{
   const massage= validate(email.current.value,password.current.value);
   //console.log(massage)
   setErrorMsg(massage);

  }
  console.log(checkValidation);
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
        <form onSubmit={(e)=>{e.preventDefault()}} className=" relative bg-black p-4  w-3/12   rounded-lg bg-opacity-75 sm:p-6 lg:8 ">
          <label className="text-xl font-bold my-2">
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </label>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="p-2  my-4 bg-slate-700 w-full"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-2  my-4 bg-slate-700 w-full"
          />
          <input
          ref={password}
            type="password"
            placeholder="password"
            className="p-2  my-4 bg-slate-700 w-full"
          />
          <p className="text-red-700 text-xl font-bold">{errorMsg}</p>
          <button type="submit " className="bg-red-700 p-2  w-full my-4 " onClick={checkValidation}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="my-4 cursor-pointer" onClick={toggleSignup}>
            {" "}
            {isSignInForm
              ? "New to Netflix ? Sign Up Now"
              : "Already registered!!! Start Watching !!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
