import { Application, ParticleContainer, Texture } from "pixi.js";
import * as particleSettings from "../emitter.json";
import { Emitter } from "pixi-particles";

const app = new Application({
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0x6495ed,
  width: 640,
  height: 480,
});

const particleContainer = new ParticleContainer();
app.stage.addChild(particleContainer);

const emitter = new Emitter( // it doesn't work, new particles.Emmiter - not working
  particleContainer,
  Texture.from("clampy.png"),
  particleSettings
);
emitter.autoUpdate = true; // If you keep it false, you have to update your particles yourself.
emitter.updateSpawnPos(200, 100);
emitter.emit = true;
