import { API_OPT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const topratedMovies=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPT);
       const json=await data.json();
       //console.log(json)
     dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
      topratedMovies();
    },[])
  
}
export default useTopRatedMovies;