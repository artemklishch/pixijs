import { Application, Sprite, BlurFilter } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 100;
clampy.y = 100;
app.stage.addChild(clampy);

// Make your filter
const myBlurFilter = new BlurFilter();

// Add it to the `.filters` array of any DisplayObject
clampy.filters = [myBlurFilter];
