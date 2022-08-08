/**
 * You can import modules into a file in two ways, 
 * based on if they are named exports or default exports.
 * 1.Named exports are constructed using curly braces. 
 * 2.Default exports are not
 * The first known computer bug was a real bug (an insect) stuck in the electronics.
 * 
 */

//Named export
// import { name, age, college } from "./person.js";
const name = require("./person.js");
//default export
// import message from "./message.js";

console.log("default export "+name);