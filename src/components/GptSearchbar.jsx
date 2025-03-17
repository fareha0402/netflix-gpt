import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/translate";
import { useRef } from "react";
// import client from "../utils/gptAPI/openAPI";
import geminiModel from "../utils/gptAPI/geminiai";
import { API_options } from "../utils/constants";
import { addMovieResults } from "../utils/store/gptSlice";

const GptSearchbar = () => {
  const getLanguage = useSelector((store) => store.config?.langSelected);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_options
    );
    const jsonData = await data.json();
    return jsonData.results
  };

  const handleFormSubmit = async () => {
    // console.log(searchText?.current?.value);
    // GEMINI AI implementation
    const promptQuery = `Act as a movie recommendation system.Give only 5 results in comma separated form example.
    Eg:DDLJ,Koi mil gaya, KGF,Dil se for query ${searchText?.current?.value}`;

    const result = await geminiModel.generateContent(promptQuery);
    // console.log(result.response.text());
    const gptMoviesTitles = result.response.text().split(",");
    // console.log(gptMoviesResults);
    // call TMDB API to get the movie details using movie title.
    // We need to call api 5 times for each movies and it will be async call and promise will be returned so we need to wait till all the promises are resolved
    const promiseArray = gptMoviesTitles.map((movie) => searchMovieTMDB(movie))
    // [p1,p2,p3,p4,p5]
    const tmdbResults = await Promise.all(promiseArray)
    console.log(tmdbResults)
    dispatch(addMovieResults({gptMoviesTitles,tmdbResults}))

    /* Open ai implementation
    const completion = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'developer', content: promptQuery },
      ],
    });

    console.log(completion.choices[0].message.content); */
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="p-2 m-3 rounded-md borderborder-neutral-400 bg-blue-200 text-black w-3/4"
          ref={searchText}
          type="text"
          placeholder={lang[getLanguage]?.LABEL_PLACEHOLDER}
        ></input>
        {/* <span className="p-1 m-1 ml-[-50] text-white">X</span> */}
        <button
          className="px-2 py-3 m-3 rounded-lg bg-red-600 text-white w-2/12"
          onClick={handleFormSubmit}
        >
          {lang[getLanguage]?.LABEL_SEARCH}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
