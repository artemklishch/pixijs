// import * as PIXI from "./pixi.mjs";
// import { assetsMap } from "./assetsMap.js";

// // Create the application
// const app = new PIXI.Application({
//     width: 800,
//     height: 800,
//     backgroundColor: 0xc2c2c2,
//     view: document.getElementById("canvas"),

// });
// const runGame = () => {
//     console.log("LOADED!");
// };

// assetsMap.sprites.forEach((value) => app.loader.add(value));
// app.loader.load(runGame);

import { Application, Graphics } from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";
const app = new Application({
  view: document.getElementById("canvas"),
  width: 800,
  height: 800,
  backgroundColor: 0xc2c2c2,
});

const runGame = () => {
  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  //   marker.drawRect(0, 0, 100, 100);
  marker.drawCircle(0, 0, 5);
  marker.endFill();

  app.stage.addChild(marker);
  app.stage.position.set(800 / 2, 800 / 2);

  //   window["RECTANGLE"] = marker;
};
assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);
