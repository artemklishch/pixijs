import { Application, Graphics, Rectangle } from "./pixi.mjs";
import { assetsMap } from "./assetsMap.js";
import { Tank } from "./Tank.js";
const app = new Application({
  view: document.getElementById("canvas"),
  width: 800,
  height: 800,
  backgroundColor: 0xc2c2c2,
});

const runGame = () => {
  const marker = new Graphics();
  marker.beginFill(0xff0000, 1);
  marker.drawCircle(0, 0, 5);
  marker.endFill();

  const tank = new Tank();
  tank._view.visible = false;
  app.stage.addChild(tank.view);
  app.stage.addChild(marker);
  app.stage.position.set(800 / 2, 800 / 2);

  window.TANK = tank;

  const onPointerDown = ({ data }) => {
    console.log(data);
    const position = data.getLocalPosition(app.stage); // позволяет получить позицию мыши относительно объекта
    app.stage.addChild(
      new Graphics()
        .beginFill(0xff0000, 1)
        .drawCircle(position.x, position.y, 5)
    );
  };
  app.stage.on("pointerdown", onPointerDown, undefined);
  app.stage.interactive = true;
  app.stage.interactiveChildren = false; // предотвращаем погружение события, чоб секономить ресурсы, если нет необходимости погружатся к chldren
  app.stage.hitArea = new Rectangle(-400, -400, 800, 800);

  const rectangle = new Graphics()
    .beginFill(0x000000)
    .drawRect(0, 0, 100, 100)
    .endFill();
  app.stage.addChild(rectangle);

  let value = 0;
  const stepValue = 0.01;
  const offset = 200;
  // let lastTime = 0;
  app.ticker.add(() => {
    // const delta = app.ticker.lastTime - lastTime;
    // lastTime = app.ticker.lastTime;
    // console.log(delta);
    // console.log(app.ticker.lastTime)
    // console.log(app.ticker.deltaTime)
    // console.log(app.ticker.deltaMS)

    value += stepValue;
    // rectangle.alpha = Math.cos(value);
    rectangle.position.x = offset * Math.cos(value);
    // console.log(Math.cos(value));
  });
};
assetsMap.sprites.forEach((value) => app.loader.add(value.name, value.url));
app.loader.load(runGame);
