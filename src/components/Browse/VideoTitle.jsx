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
    <div className="pt-[15%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-5xl">{title}</h1>
      {/* {show && <p className="p-2 w-1/4 text-lg">{shortenOverView()}</p>} */}
      <p className="p-2 w-1/4 text-lg">{shortenOverView()}</p>
      <div >
        <button className="bg-white hover:bg-green-700 p-2 px-6 text-black w-35 rounded-lg text-xl cursor-pointer">
          Play
        </button>
        <button className="mx-2 p-2 px-6 text-white w-35 bg-gray-500 rounded-lg text-xl cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
