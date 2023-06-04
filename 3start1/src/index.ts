import { Application, Sprite, Container } from "pixi.js";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;
app.stage.addChild(conty);

const conty2: Container = new Container();
conty.x = 100;
conty.y = 0;
conty2.rotation = 0.2;
app.stage.addChild(conty2);

const clampy: Sprite = Sprite.from("clampy.png");
clampy.x = 100;
clampy.y = 100;
conty.addChild(clampy);

const clampy2: Sprite = Sprite.from("clampy.png");
clampy2.x = 200;
clampy2.y = 200;
clampy2.anchor.set(0.5);
conty2.addChild(clampy2);

// const clampy3: Sprite = Sprite.from("clampy.png");
// clampy2.x = 200;
// clampy2.y = 20;
// clampy2.addChild(clampy3);
