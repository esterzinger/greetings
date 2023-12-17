const express = require('express');
const { OpenAIAPI } = require('openai');

const app = express();
const port = 3000;

const openai = new OpenAIAPI({
  key: 'YOUR_OPENAI_API_KEY',
  model: 'text-davinci-002', // Adjust the model as needed
});

app.use(express.json());

app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    const gptResponse = await openai.complete({
      prompt,
      temperature: 0.7, // Adjust the temperature as needed
    });

    const answer = gptResponse.data.choices[0].text.trim();
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
