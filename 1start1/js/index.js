import * as PIXI from "./pixi.mjs";
console.log(PIXI);

// Create the application
const app = new PIXI.Application({
  view: document.getElementById("canvas"),
  height: 1000,
  width: 1000,
});
