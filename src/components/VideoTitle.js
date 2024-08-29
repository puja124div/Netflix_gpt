import React from 'react'
import { IoPlay } from "react-icons/io5";
const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-5xl w-12 pt-[15%] '>{title}</h1>
      <p className='font-semibold w-1/4'>{overview}</p>
      <div className='flex gap-4'>
      <div className='flex items-center bg-white text-black  font-bold rounded-md mt-2 px-8 py-2 hover:bg-opacity-70 '>
      <IoPlay/>
      <button className=' '> Play </button>
      </div>
        
        <button className='bg-gray-500 bg-opacity-50 text-white font-bold px-8 py-2 rounded-md mt-2 '>⨀ More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle