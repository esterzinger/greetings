const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;



const apiKey = process.env.API_KEY;

console.log(apiKey)
app.use(express.json());

app.post('/generate-greeting', async (req, res) => {
  try {
    const { event, age, type, atmosphere, NumberOfResponses = 1 } = req.body;

    let prompt = `Please write me a greeting for `;
    if (age) {
      prompt += `${age} year old `;
    }
    switch (event) {
      case 'birthday':
        prompt += `for the birthday `
        break;
      case 'wedding':
        prompt += `for the wedding `;
        break;
      default:
        break;
    }
    if (type) prompt += `in a ${type} type `;
    if (atmosphere) prompt += `with ${atmosphere} atmosphere `;
    prompt += 'Please return 3 greetings in a parsable JSON format like follows: { "1": "first greeting", "2": "second greeting", "3": "third greeting" }'

    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: prompt }
      ],
    };
  
    const generatedGreetings = fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    })
    res.json({ greetings: generatedGreetings.choices[0].message.content });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
