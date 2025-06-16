// Name: Chris Weaver
// Class: WEB420
// Date: June 16, 2025
// File: app.js
// Description: Express app for "in-n-out-books" project with full-featured landing page and error handling

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>In-n-Out Books</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #fefcf8;
          color: #333;
        }ss
        header {
          background-color:rgb(89, 31, 92);
          color: white;
          padding: 1.5em;
          text-align: center;
        }
        main {
          padding: 2em;
          max-width: 800px;
          margin: auto;
        }
        section {
          margin-bottom: 2em;
        }
        h2 {
          color:rgb(28, 65, 8);
        }
        ul {
          list-style-type: square;
          padding-left: 1.2em;
        }
        footer {
          background-color: #222;
          color: #eee;
          text-align: center;
          padding: 1em;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Welcome to In-n-Out Books 📚</h1>
        <p>Fast, fresh, and fantastic reads delivered to your digital doorstep.</p>
      </header>

      <main>
        <section>
          <h2>Top Selling Books</h2>
          <ul>
            <li><strong>The Midnight Library</strong> by Matt Haig</li>
            <li><strong>Atomic Habits</strong> by James Clear</li>
            <li><strong>Fourth Wing</strong> by Rebecca Yarros</li>
          </ul>
        </section>

        <section>
          <h2>Hours of Operation</h2>
          <p>Monday – Friday: 9:00 AM – 6:00 PM<br>
             Saturday: 10:00 AM – 4:00 PM<br>
             Sunday: Closed</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Email: <a href="mailto:support@innoutbooks.com">support@innoutbooks.com</a><br>
             Phone: (281) 990 - 7788)br>
             Address: 123 Story Lane, Knoxville, TN 37911</p>
        </section>
      </main>

      <footer>
        &copy; 2025 In-n-Out Books. All rights reserved.
      </footer>
    </body>
    </html>
  `);
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 Not Found – This page might’ve wandered off the shelf.');
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
