/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="md:px-2">
      <div className="font-medium text-lg md:text-xl p-4">
        <h1 className="text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return (
              <MovieCard key={movie.id} poster_path={movie?.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
