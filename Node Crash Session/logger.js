const EventEmitter = require("events");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

console.log(uuid.v4());
class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg });
    fs.writeFile(
      path.join(__dirname, "/references/test", "log.txt"),
      msg + uuid.v4(),
      err => {
        if (err) throw err;
        console.log("File written to log.txt");
      }
    );
  }
}

const logger = new Logger();
logger.on("message", data => console.log(`Called Listener: `, data));
logger.log("Hi");
