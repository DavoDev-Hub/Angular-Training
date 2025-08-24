import "./style.css";
//import "./topics/01-basic-types";
import "./topics/02-object-interface";
import "./topics/03-functions";

document.querySelector<HTMLDivElement>("#app");

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `Hola Mundo`;
}

console.log("Hola Mundo!!!");
