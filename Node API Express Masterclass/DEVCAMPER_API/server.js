const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Initialize app variable with Express
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `App listening on port ${PORT} running in ${process.env.NODE_ENV} mode`
  )
);
