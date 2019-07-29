const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init class
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("event", () => console.log("Event fired"));

// Init event
myEmitter.emit("event");
