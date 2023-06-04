import { Application, Sprite } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

// const clampy: Sprite = Sprite.from("./clampy.svg");
const clampy: Sprite = Sprite.from("./clampy.png");
// const clampy: Sprite = Sprite.from(
//   "https://e7.pngegg.com/pngimages/224/20/png-clipart-airplane-military-army-military-aircraft-miscellaneous-happy-birthday-vector-images.png"
// );
// const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);
