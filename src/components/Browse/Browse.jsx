import useNowPlayingMovies from "../../hooks/useNowPlayingMoviesList";
import Header from "../Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
    useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* { Main Container
              --Video Background
              -- Video Title
            Sec Container
              -- Movies *n 
              -- Cards *n   
      } */}
    </div>
  );
}

export default Browse;
