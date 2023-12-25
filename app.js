// Import required modules
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const indexRouter = require('./routes/index');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser middleware to parse incoming JSON
app.use(express.json());

// Use indexRouter for all routes
app.use('/', indexRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ChatEnhance server is running on port ${port}`);
});

module.exports = app;
