// input output question & answer
// question - 1
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
       var a = parseInt(userInput[0]);
       console.log(a);
    });

    // question - 2
    // Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  
   var line1 = userInput[0];
   console.log(line1);
});

// question - 3
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  
   var line1 = userInput[0];
   var line2 = userInput[1];
    console.log(line1);
  console.log(line2);

});
// question - 4
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  
   var line1 = userInput[0];
   var line2 = userInput[1];
   var line3 = userInput[2];
   console.log(line1);
  console.log(line2);
  console.log(line3);
});