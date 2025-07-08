import axios from 'axios';

export async function paraphraseText(text: string) {
  const response = await axios.post('/api/paraphrase', { text });
  return response.data.result;
}
