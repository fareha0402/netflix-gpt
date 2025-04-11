/* eslint-disable react/prop-types */
import { MOVIE_CDN_URL } from "../../utils/constants"

const MovieCard = ({poster_path}) => {
  return (
    <div className="w-36 md:w-44 pr-3">
        <img alt="movieImg" src={MOVIE_CDN_URL+ poster_path}></img>
    </div>
  )
}

export default MovieCard