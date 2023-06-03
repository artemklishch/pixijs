import * as PIXI from "./pixi.mjs";
console.log(PIXI);

// Create the application
const app = new PIXI.Application();

// Add the view to the DOM
document.body.appendChild(app.view); // this creates the canvas element

// ex, add display objects
app.stage.addChild(PIXI.Sprite.from("something.png"));
