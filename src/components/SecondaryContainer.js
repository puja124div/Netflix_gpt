import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieList=useSelector(store=>store.movie)
  //console.log(movieList)
  return(movieList.nowPlayingMovies && movieList.popularMovies && movieList.topratedMovies && movieList.popularTvList) && (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
      <MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movieList?.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movieList?.topratedMovies}/>
      <MovieList title={"Popular TV Series List"} movies={movieList?.popularTvList}/>
     
      </div>
      
    </div>
  )
}


export default SecondaryContainer