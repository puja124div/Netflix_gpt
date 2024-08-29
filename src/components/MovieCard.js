import React from 'react'
import { POSTER_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log({posterPath})
  return (
    <div className='w-48'>
        <img className='p-2 m-2' alt=' poster' src={POSTER_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard