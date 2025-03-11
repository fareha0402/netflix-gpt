// eslint-disable-next-line react/prop-types
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[15%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="p-2 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-white hover:bg-green-700 p-2 px-6 text-black w-35 rounded-lg text-xl cursor-pointer">Play</button>
        <button className="mx-2 p-2 px-6 text-white w-35 bg-gray-500 rounded-lg text-xl cursor-pointer">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle