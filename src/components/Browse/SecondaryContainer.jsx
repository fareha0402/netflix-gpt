import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)
  return (
    <div className="bg-black pl-6">
    <div className="-mt-50 relative z-20">
      <MovieList  title={"Now Playing"} movies={movies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming"} movies={upcomingMovies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Now Playing"} movies={movies} />
    </div>
    </div>
  );
};
export default SecondaryContainer;
