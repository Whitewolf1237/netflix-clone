import OpenAI from 'openai';
import { OpenAiKey } from './constants';

const openai = new OpenAI({
  apiKey: OpenAiKey, //copied from open ai documentation
  dangerouslyAllowBrowser: true
});

export default openai