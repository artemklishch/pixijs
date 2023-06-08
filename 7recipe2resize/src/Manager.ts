// // RESIZE
// export class Manager {
//   private constructor() {}

//   private static app: Application;
//   private static currentScene: IScene;

//   private static _width: number;
//   private static _height: number;

//   public static get width(): number {
//     return Manager._width;
//   }
//   public static get height(): number {
//     return Manager._height;
//   }

//   public static initialize(
//     width: number,
//     height: number,
//     background: number
//   ): void {
//     Manager._width = width;
//     Manager._height = height;

//     Manager.app = new Application({
//       view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
//       resolution: window.devicePixelRatio || 1,
//       autoDensity: true,
//       backgroundColor: background,
//       width: width,
//       height: height,
//     });

//     Manager.app.ticker.add(Manager.update);

//     // listen for the browser telling us that the screen size changed
//     window.addEventListener("resize", Manager.resize);

//     // call it manually once so we are sure we are the correct size after starting
//     Manager.resize();
//   }

//   public static resize(): void {
//     // current screen size
//     const screenWidth = Math.max(
//       document.documentElement.clientWidth,
//       window.innerWidth || 0
//     );
//     const screenHeight = Math.max(
//       document.documentElement.clientHeight,
//       window.innerHeight || 0
//     );

//     // uniform scale for our game
//     const scale = Math.min(
//       screenWidth / Manager.width,
//       screenHeight / Manager.height
//     );

//     // the "uniformly englarged" size for our game
//     const enlargedWidth = Math.floor(scale * Manager.width);
//     const enlargedHeight = Math.floor(scale * Manager.height);

//     // margins for centering our game
//     const horizontalMargin = (screenWidth - enlargedWidth) / 2;
//     const verticalMargin = (screenHeight - enlargedHeight) / 2;

//     // now we use css trickery to set the sizes and margins
//     Manager.app.view.style.width = `${enlargedWidth}px`;
//     Manager.app.view.style.height = `${enlargedHeight}px`;
//     Manager.app.view.style.marginLeft =
//       Manager.app.view.style.marginRight = `${horizontalMargin}px`;
//     Manager.app.view.style.marginTop =
//       Manager.app.view.style.marginBottom = `${verticalMargin}px`;
//   }

//   /* More code of your Manager.ts like `changeScene` and `update`*/
// }

// ========================
// RESPONSIVE

export class Manager {
  private constructor() {}
  private static app: Application;
  private static currentScene: IScene;

  // We no longer need to store width and height since now it is literally the size of the screen.
  // We just modify our getters
  public static get width(): number {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }
  public static get height(): number {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  }

  public static initialize(background: number): void {
    Manager.app = new Application({
      view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
      resizeTo: window, // This line here handles the actual resize!
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: background,
    });

    Manager.app.ticker.add(Manager.update);

    // listen for the browser telling us that the screen size changed
    window.addEventListener("resize", Manager.resize);
  }

  public static resize(): void {
    // if we have a scene, we let it know that a resize happened!
    if (Manager.currentScene) {
      Manager.currentScene.resize(Manager.width, Manager.height);
    }
  }

  /* More code of your Manager.ts like `changeScene` and `update`*/
}

export interface IScene extends DisplayObject {
  update(framesPassed: number): void;

  // we added the resize method to the interface
  resize(screenWidth: number, screenHeight: number): void;
}
