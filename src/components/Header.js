import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user);
  const naviagte=useNavigate();
const handlesignout=()=>{
  signOut(auth).then(() => {
    naviagte("/")
  }).catch((error) => {
    
  });
}


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //sign in sign up
      const { uid, email, displayName ,photoURL} = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
      navigate("/browse");
    } else {
      //signout
      dispatch(removeUser());
      navigate("/");
    }
  });
}, []);

  return (
    
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-30 w-full flex justify-between' >
        <img className='w-36' src={LOGO} alt='' />
       {user && ( <div className='flex   '>
          <img src={user?.photoURL} alt='hy' className=' m-2 w-14 h-14  '/>
      <button className='text-white font-bold bg-red-600 rounded-lg p-2 m-2  ' onClick={handlesignout} >Sign Out</button>
      </div>)}
       
    </div>
  )
}


export default Header;