import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const naviagte = useNavigate();
  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        naviagte("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //sign in sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //signout
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute p-4  bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-24 sm:w-32 mx-4 sm:mx-6" src={LOGO} alt="" />
      {user && (
        <div className="flex  m-2 ">
          <img src={user?.photoURL} alt="hy" className=" mr-2 w-11 h-11 rounded-full  " />
          <button
            className="text-white  bg-red-600 rounded-lg p-1 m-1  "
            onClick={handlesignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
