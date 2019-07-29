const path = require("path");

// Basename gets the base file name
console.log(__filename);
console.log("base name:", path.basename(__filename));
// Directory name
console.log("Directory name:", path.dirname(__filename));
// File extensions
console.log("File extension:", path.extname(__filename));
// Path Object
console.log("Creates a path Object:", path.parse(__filename));
// Concatenate path
console.log(
  "Works for delimeters problems",
  path.join(__dirname, "test", "hello.html")
);
