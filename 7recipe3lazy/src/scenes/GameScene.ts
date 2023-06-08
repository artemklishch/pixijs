export interface IScene extends DisplayObject {
  // ...
  assetBundles:string[];
  // ...
}

// export class GameScene extends Container implements IScene {
//   // ...
//   assetBundles:string[] = ["game", "sounds"];
//   // ...
// }

export class GameScene extends Container implements IScene {

  assetBundles:string[] = ["game", "sounds"];

  constructor() {
      super();

      // This is illegal!
      await Assets.loadBundle(this.assetBundles);

      // But we need to wait to have assets D:
      const clampy = Sprite.from("Clampy the clamp!");
      this.addChild(clampy);
  }

  update(framesPassed: number): void {}

}