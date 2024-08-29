import React from 'react'
import { POSTER_CDN } from '../utils/constants'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    //console.log({type})
  return (
    <div className='p-6'>
        
        <p className='text-white font-bold text-xl'>{title}</p>
    <div className='flex overflow-x-scroll'>
      <div className='flex '>
    {movies.map((movie)=>( <MovieCard key={movie.id} posterPath={movie?.poster_path}/>))}
    </div>
    </div>
    </div>
  )
}

export default MovieList