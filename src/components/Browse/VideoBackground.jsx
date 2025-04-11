import { useSelector } from "react-redux";
import useFetchMovieTrailer from "../../hooks/useFetchMovieTrailer";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store.movies?.trailerVideo);
  useFetchMovieTrailer(movieId); // SRP (modularization)
  return (
    // inside JSX we have to use camel case other wise error is thrown frameBorder-- frameborder
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerInfo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};  

export default VideoBackground;
