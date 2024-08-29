import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPT } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=({ movieId })=>{
    const dispatch=useDispatch()
    //fetch videos using api call
    const getmovievideo = async () => {
      console.log({ movieId });
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPT
      );
      const json = await data.json();
      //console.log(json);
      const getTrailers = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = getTrailers.length ? getTrailers[0] : json.results[0];
      //console.log(trailer);
  dispatch(addTrailerVideo(trailer))
    };
    useEffect(() => {
      getmovievideo();
    }, []);
}
export default useMovieTrailer;