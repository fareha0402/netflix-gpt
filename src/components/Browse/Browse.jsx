import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMoviesList";
import usePopularMoviesList from "../../hooks/usePopularMoviesList";
import useTopRatedMoviesList from "../../hooks/useTopRatedMoviesList";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GptSearchContainer from "../GptSearchContainer";
import Header from "../Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  const showGpt = useSelector((store) => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMoviesList();
  useTopRatedMoviesList();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearchContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;
