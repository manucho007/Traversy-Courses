const url = require("url");
const myUrl = new URL(
  "https://manuelcoolsite.com/home.html?id=666&status=active"
);

// Serialized URL
console.log("Serialized URL: ", myUrl.href);
// console.log(myUrl.toString());

// Host
console.log("Host: ", myUrl.host);

// Hostname Does not get port
console.log("Hostname: ", myUrl.hostname);

// Pathname
console.log("Pathname: ", myUrl.pathname);

// Serialized query
console.log("Serialized query: ", myUrl.search);

// Params Object
console.log("Params Object: ", myUrl.searchParams);

// Add Param
myUrl.searchParams.append("key", "manucho");
console.log("Params Object Updated: ", myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
