import { useSelector } from "react-redux";
import MovieList from "./Browse/MovieList";

const GptSuggestions = () => {
  const { movieTitles, movieResults } = useSelector((store) => store?.gpt);
  if (!movieTitles) return null;
  return (<>
    {movieTitles.length>0 && <div className="bg-black text-white p-2 m-2 opacity-90">
      {/* <MovieList title={movieTitles[0]} movies={movieResults[0]} /> */}
      {movieTitles.map((movieName,index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}></MovieList>)}
    </div>}
    </>
  );
};

export default GptSuggestions;
