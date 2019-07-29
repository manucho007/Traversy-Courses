const http = require("http");

// Create a server object
http
  .createServer((req, res) => {
    // Write response
    res.write("Hello World!");
    res.end();
  })
  .listen(5001, () => console.log("Server running"));
