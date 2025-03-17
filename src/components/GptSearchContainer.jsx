import { BG_URL } from "../utils/constants"
import GptSearchbar from "./GptSearchbar"
import GptSuggestions from "./GptSuggestions"

const GptSearchContainer = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL}></img>
      </div>
      <GptSearchbar/>
      <GptSuggestions/>
      </div>
    )
}

export default GptSearchContainer