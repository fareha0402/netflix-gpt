import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../constants";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export default geminiModel