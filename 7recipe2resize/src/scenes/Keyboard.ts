class Keyboard {
  public static readonly state: Map<string, boolean>;
  public static initialize() {
    // The `.bind(this)` here isn't necesary as these functions won't use `this`!
    document.addEventListener("keydown", Keyboard.keyDown);
    document.addEventListener("keyup", Keyboard.keyUp);
  }
  private static keyDown(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, true);
  }
  private static keyUp(e: KeyboardEvent): void {
    Keyboard.state.set(e.code, false);
  }
}


// const clampy: Sprite = Sprite.from("clampy.png");
// clampy.on("clamp", onClampyClamp, this);

// clampy.once("clamp", onClampyClampOnce, this);

// // clampy.off("clamp", onClampyClamp); // This will remove the event!


// // somewhere, when the time is right... Fire the clamp!
// clampy.emit("clamp");


// // If you come from c++ this will mess you up: Functions can be declared after you used them.
// function onClampyClamp() {
//     console.log("clampy did clamp!");
// }

// function onClampyClampOnce() {
//   console.log("this will only be called once and then removed!");
// }