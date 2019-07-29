const os = require("os");

// Platform
console.log("OS platform: ", os.platform());

// CPU Arch
console.log("CPU Architecture: ", os.arch());

// CPU Core Info
console.log("Cpu core info", os.cpus());

// Free memory
console.log("Free memory: ", os.freemem());

// Total memory
console.log("Total memory", os.totalmem());

// Home Directory
console.log("Home Directory", os.homedir());

// Host Name
console.log("Host Name", os.hostname());

// Uptime
console.log("Uptime", os.uptime());
