import { API_OPT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const moviesPlayingNow=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPT);
       const json=await data.json();
       //console.log(json)
     dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      moviesPlayingNow();
    },[])
  
}
export default useNowPlayingMovies;