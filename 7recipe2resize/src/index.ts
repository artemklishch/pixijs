import { Application } from "pixi.js";
import { Scene } from "./scenes/Scene"; // This is the import statement

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

// RERSOLUTION
// new Application({
//   view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
//   resolution: window.devicePixelRatio || 1, // This bad boy right here...
//   autoDensity: true, // and his friend
//   backgroundColor: background,
//   width: width,
//   height: height
// });

const sceny: Scene = new Scene(app.screen.width, app.screen.height);

app.stage.addChild(sceny);
