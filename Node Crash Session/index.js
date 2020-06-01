// const Person = require("./person");
// // console.log(Person);
// const person1 = new Person("Nikita Elizarov", 22);
// person1.greeting();

////// Example for a simple event emmiter
// const Logger = require("./logger");
// const logger = new Logger();
// logger.on("message", data => console.log(`Called Listener: `, data));
// logger.log("Hi");

// Simple http server with CSS
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //Not efficient cause it would require to do this for every single page
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Manuel Rodriguez", age: 26 },
  //       { name: "Andres Heredia", age: 25 }
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  // This is dynamic built of the file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //   Extension of the file
  let extName = path.extname(filePath);

  // Initial content Type
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  //   Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
          }
        );
      } else {
        //   Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});
// If we just add the port number there might be some issues at deploying
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
