import { BG_URL } from "../utils/constants";
import GptSearchbar from "./GptSearchbar";
import GptSuggestions from "./GptSuggestions";

const GptSearchContainer = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img  src={BG_URL} className="h-screen object-cover md:w-screen"></img>
      </div>
      <div>
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearchContainer;
