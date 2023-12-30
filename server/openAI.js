
function generateAI(){
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const requestData = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: 'Who won the world series in 2020?' }
    ],
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.choices[0].message.content);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

