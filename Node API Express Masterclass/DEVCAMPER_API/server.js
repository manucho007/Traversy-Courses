const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Initialize app variable with Express
const app = express();

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `App listening on port ${PORT} running in ${process.env.NODE_ENV} mode`
  )
);
