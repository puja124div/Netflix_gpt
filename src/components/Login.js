import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt=""
        />
      </div>
      <div className="h-screen w-screen flex flex-col items-center justify-center">
      <form className="h-3/5 relative bg-black p-8  w-3/12 flex flex-col ">
        <input type="email" placeholder="Email" className="p-2 m-4 bg-slate-700" />
        <input type="password" placeholder="****" className="p-2 m-4 bg-slate-700" />
        <button type="submit "className="bg-white p-2 m-4 bg-red-700">submit</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
