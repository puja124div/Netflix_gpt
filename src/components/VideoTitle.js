import React from 'react'
import { IoPlay } from "react-icons/io5";
const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-6 absolute text-white bg-gradient-to-r from-black lg:px-24'>
      <h1 className='font-bold text-md pt-[30%] w-4 lg:w-12 lg:text-5xl lg:pt-[15%]'>{title}</h1>
      <p className='  hidden  lg:block lg:font-semibold lg:w-1/4'>{overview}</p>
      <div className='flex gap-2 lg:gap-4'>
      <div className=' font-xs px-2 py-1 flex items-center bg-white text-black  lg:font-bold rounded-md mt-2 lg:px-8 lg:py-2 hover:bg-opacity-70 '>
      <IoPlay/>
      <button className=' '> Play </button>
      </div>
        
        <button className='font-xs px-2 py-1 bg-gray-500 bg-opacity-50 text-white lg:font-bold lg:px-8 lg:py-2 rounded-md mt-2 '>⨀ More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle