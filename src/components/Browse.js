import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import usePopularTvList from '../hooks/usePopularTvList';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies()
usePopularTvList()
  return (
    <div>
      <Header/>
    <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse