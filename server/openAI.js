//const { OpenAIApi } = require('openai');

// const openai = new OpenAIApi({
//   //api_key: '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"'
// });
// const {Configuration, OpenAIApi} =require('openai');
// const config=new Configuration({
//   apiKey: "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"
// })
//const openAI =new OpenAIApi(config)


// import {OpenAI} from 'openai';

// const openAI = new OpenAI({
//   apiKey: "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", // This is the default and can be omitted
// });
//const OpenAI = require('openai');

//const OpenAI =from "openai";

//const openAI = new OpenAI({ apiKey: "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" });

async function main() {
  // const list = await openAI.fineTuning.jobs.list();

  // for await (const fineTune of list) {
  //   console.log(fineTune);
  // }


const r= await fetch("https://api.openai.com/v1/images/generations  ",{
    method: 'POST', 
    headers: {'Authorization': 'Bearer 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' ,
    'Content-Type': 'application/json',},
    body: JSON.stringify({
      "model": "dall-e-3",
      "prompt": "A cute baby sea otter",
      "n": 1,
      "size": "1024x1024"
    }),
    // Add other options like 'mode', 'credentials', etc. as needed
  });
  console.log(r)
}
main();


// const openai = new OpenAIApi.OpenAI({ apiKey: "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" });
// async function hh() {
//   const response=await openai.embeddings.create({
//     model: "text-embedding-ada-002",
//     input: "The quick brown fox jumped over the lazy dog",
//     encoding_format: "float",
//   });

// console.log(response)
// }
// hh()

// openai.({
//   model:"text-davinci-003",
//   prompt:"Write me 3 a birthday greeting for a 4-year-old in a funny atmosphere in a short length",
//   max_tokens:100,
// });






















// const completion = await openai.completions.create({
//     model: 'gpt-3.5-turbo-instruct',
//     prompt: 'Write a tagline for an ice cream shop.'
// });
//important link:)

// https://platform.openai.com/docs/api-reference/completions/create

// curl https://api.openai.com/v1/models \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -H "OpenAI-Organization: org-uSbptIN7qjzeVX3k0W5tVJiP"
// import fs from "fs";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   organization: 'org-uSbptIN7qjzeVX3k0W5tVJiP',
// });

// async function main() {
//   const transcription = await openai.audio.transcriptions.create({
//     file: fs.createReadStream("audio.mp3"),
//     model: "whisper-1",
//   });

//   console.log(transcription.text);
// }
// main();
