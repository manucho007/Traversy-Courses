const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger');
// Middleware
// Logger
app.use(logger);

// Body parser middleware
app.use(express.json());
// Hanldes URL encoded data
app.use(express.urlencoded({ extended: false }));

// Template -- Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Members App',
    members,
  })
);
// This is the old way to render HTML individually
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Members api routes
app.use('/api/members', require('./routes/api/members'));

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
