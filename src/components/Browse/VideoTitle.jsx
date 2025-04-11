/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const VideoTitle = ({ title, overview }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 5000);
  }, []);
  const shortenOverView = () => {
    return overview.length > 300 ? overview.slice(0, 300) + "..." : overview;
  };
  return (
    <div className="px-3 pt-[15%] md:pt-[10%] md:px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-xl md:text-5xl">{title}</h1>
      {/* {show && <p className="p-2 w-1/4 text-lg">{shortenOverView()}</p>} */}
      <p className="hidden md:inline-block md:p-2 md:w-1/4 bold text-md  md:text-lg">{shortenOverView()}</p>
      <div className="mt-2 md:m-0 flex ">
        <button className="bg-white hover:bg-green-700 p-1 px-2 md:p-2 md:px-6 text-black md:w-35 rounded-lg text-lg md:text-xl cursor-pointer">
          Play
        </button>
        <button className="hidden md:inline-block mx-1 md:mx-2 md:p-2 md:px-6 text-white md:w-35 bg-gray-500 rounded-lg text-lg md:text-xl cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
