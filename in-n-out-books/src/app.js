// Name: Chris Weaver
// Class: WEB420
// Date: June 16, 2025
// File: app.js
// Description: Express app for the "in-n-out-books" project

const express = require('express');
const app = express();

// Root route – landing page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>In-n-Out Books</title>
        <style>
          body { font-family: sans-serif; background: #fff8f0; text-align: center; padding: 50px; }
          h1 { color:rgb(4, 10, 185); }
          p { font-size: 18px; color: #333; }
        </style>
      </head>
      <body>
        <h1>Welcome to In-n-Out Books </h1>
        <p>Reading is the beez-neez</p>
      </body>
    </html>
  `);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 Not Found – That page might’ve checked out!');
});

// 500 handler
app.use((err, req, res, next) => {
  const isDev = req.app.get('env') === 'development';
  res.status(500).json({
    message: 'Internal Server Error',
    ...(isDev && { stack: err.stack })
  });
});

module.exports = app;
