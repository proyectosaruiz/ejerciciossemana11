"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("¿Comó te llamas?   ");
console.log(`Hola ${name}`);

let mood = prompt("¿Comó te sientes?   ");

if (mood == "bien" || mood == "BIEN" || mood == "Bien") {
  console.log("Genial");
} else if (mood == "mal" || mood == "MAL" || mood == "Mal") {
  console.log("Mucho animo, tu puedes...");
} else {
  console.log("Lo siento, no te he entendido");
}
