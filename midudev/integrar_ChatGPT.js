// 10 líneas de código JavaScript para integrar ChatGPT a tu app:

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function talkWithChatGPT(prompt) {
  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: propmpt }],
  });

  return completion.data.choices[0].text;
}
