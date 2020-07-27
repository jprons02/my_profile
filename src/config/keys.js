//keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  //we are in production - return prod keys
  console.log("we are in production!");
  module.exports = require("./prod");
} else {
  //we are in development - return dev keys
  console.log("we are in development!");
  module.exports = require("./dev");
}
