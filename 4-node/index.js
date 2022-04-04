"use strict";

// console.log("Buenos dias");
// setTimeout(() => console.log("¿Como estás?"), 1000 * 2);
// setTimeout(() => console.log("¿Comó te llamas?"), 1000 * 2);
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("¿Comó te llamas?   ");
console.log(`Hola ${name}`);
let mood = prompt("¿Comó te sientes?   ");

if (mood == "bien") {
  console.log("Genial");
} else if (mood == "mal") {
  console.log("Mucho animo, tu puedes...");
} else {
  console.log("Lo siento, no te he entendido");
}
