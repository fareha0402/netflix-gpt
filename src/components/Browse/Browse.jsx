import useNowPlayingMovies from "../../hooks/useNowPlayingMoviesList";
import usePopularMoviesList from "../../hooks/usePopularMoviesList";
import useTopRatedMoviesList from "../../hooks/useTopRatedMoviesList";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import Header from "../Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
    useNowPlayingMovies();
    usePopularMoviesList();
    useTopRatedMoviesList()
    useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
    </div>
  );
}

export default Browse;
