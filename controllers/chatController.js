// Import required modules
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Define the chatController object
const chatController = {};

// Define the index action
chatController.index = (req, res) => {
  res.render('index');
};

// Define the chat action
chatController.chat = async (req, res) => {
  const message = req.body.message;

  try {
    // Call OpenAI API
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 60
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    // Extract the generated message from the response
    const generatedMessage = response.data.choices[0].text.trim();

    // Send the generated message as the response
    res.json({ message: generatedMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
};

module.exports = chatController;
