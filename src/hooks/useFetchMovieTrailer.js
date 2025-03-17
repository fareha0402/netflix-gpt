import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useFetchMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const videoJson = await data.json();
    // in case there are no trailer how to handle, show first data from video list
    const getFilterTrailer = videoJson.results.filter(
      (m) => m.type === "Trailer"
    );
    const trailer = getFilterTrailer.length
      ? getFilterTrailer
      : videoJson.results[0];
    dispatch(addTrailerVideo(trailer?.[0]));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

};
export default useFetchMovieTrailer;
