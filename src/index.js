import { sum } from './sum';
import style from "./css/index.scss"

console.log("Hello World");
console.log(sum(6,14));

let heading = document.querySelector("#demo"),
sumValue = sum(10,55);
heading.innerHTML = `10+55 = ${sumValue}`;