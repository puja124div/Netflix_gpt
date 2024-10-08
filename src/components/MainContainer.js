import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(store=>store.movie?.nowPlayingMovies)
    if(movies===null) return;
    const mainmovie=movies[0];
    //console.log(mainmovie);

    const {original_title,overview,id}=mainmovie;

  return (
    <div>
       <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
       
    </div>
  )
}

export default MainContainer