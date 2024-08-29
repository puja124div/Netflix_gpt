import { API_OPT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addPopularTvList, addTopRatedMovies } from '../utils/moviesSlice';
import { useEffect } from 'react'


const usePopularTvList=()=>{
    const dispatch=useDispatch()
    const popularTvList=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_OPT);
       const json=await data.json();
       //console.log(json)
     dispatch(addPopularTvList(json.results))
    }
    useEffect(()=>{
      popularTvList();
    },[])
  
}
export default usePopularTvList;