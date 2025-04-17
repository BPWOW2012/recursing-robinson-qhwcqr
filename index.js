import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _138458 from "./_138458/_138458.js";
import _2 from "./_2/_2.js";
import _1 from "./_1/_1.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";
import _6 from "./_6/_6.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _138458: new _138458({
    x: 0,
    y: -11,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 5.681818181818182,
    visible: false,
    layerOrder: 1,
  }),
  _2: new _2({
    x: -50,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: true,
    layerOrder: 7,
  }),
  _1: new _1({
    x: 121,
    y: 160,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 6,
  }),
  _3: new _3({
    x: 43.58693588619775,
    y: 63.16328807057269,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 2,
  }),
  _4: new _4({
    x: -8.804385123891922,
    y: 43.312946575766006,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 80,
    visible: false,
    layerOrder: 3,
  }),
  _5: new _5({
    x: -18.01757362318961,
    y: -61.26247203859952,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 80,
    visible: false,
    layerOrder: 5,
  }),
  _6: new _6({
    x: -251,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
