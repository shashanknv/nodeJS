require("./xyz") // one module into another

// import { calc_sum } from "./sum";

// const { x, calc_sum } = require("./calculate/sum");

// const {calc_mult} = require("./calculate/multiply");

const { calc_sum, calc_mult} = require("./calculate")

const data = require("./data.json");

var name = "Namaste NodeJS"

var a = 10;
var b = 20;

console.log(name);

console.log(JSON.stringify(data));

// console.log(a+b);

// console.log(global);
// console.log(this); //empty object  
// console.log(globalThis);

calc_sum(a,b);
calc_mult(a,b);

// console.log(x)