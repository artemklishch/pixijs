import { Assets } from "pixi.js";
import { manifest } from "../assets";

export class Manager {
    // ...

    // This is a promise that will resolve when Assets has been initialized.
    // Promise<unknown> means this is a promise but we don't care what value it resolves to, only that it resolves.
    private static initializeAssetsPromise: Promise<unknown>; 

    // ...

    public static initialize(width: number, height: number, background: number): void {

        // We store it to be sure we can use Assets later on
        Manager.initializeAssetsPromise = Assets.init({ manifest: manifest });

        // Black js magic to extract the bundle names into an array.
        const bundleNames = manifest.bundles.map(b => b.name);

        // Initialize the assets and then start downloading the bundles in the background
        Manager.initializeAssetsPromise.then(() => Assets.backgroundLoadBundle(bundleNames));

        // ...
    }
    // ...
}