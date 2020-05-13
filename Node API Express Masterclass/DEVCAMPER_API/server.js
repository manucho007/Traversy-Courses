const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const users = require('./routes/users');
const reviews = require('./routes/reviews');

// Initialize app variable with Express
const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileUpload());

// Sanitize data
app.use(mongoSanitize());

// Set security header
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/reviews', reviews);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `App listening on port ${PORT} running in ${process.env.NODE_ENV} mode`
      .yellow.bold
  )
);

// Handle unhandled promises rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  //Close server & exit process
  server.close(() => process.exit(1));
});
