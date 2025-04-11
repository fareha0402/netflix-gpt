import OpenAI from 'openai';
import { OPEN_API_KEY } from './constants';

const client = new OpenAI({
  apiKey: OPEN_API_KEY ,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client