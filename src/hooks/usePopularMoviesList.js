import { useEffect } from "react"
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";

const usePopularMoviesList = () => {
    const dispatch = useDispatch();
    const getPopularMovieListAPI = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
        const movieList = await data.json()
        dispatch(addPopularMovies(movieList.results))
    }
    useEffect(() =>{
        getPopularMovieListAPI()
    },[])
}

export default usePopularMoviesList