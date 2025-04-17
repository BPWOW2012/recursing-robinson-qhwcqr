/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _138458 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("138458", "./_138458/costumes/138458.svg", {
        x: 44.25,
        y: 44,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.effects.ghost = 0;
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.ghost += 50;
        while (!!this.touching("mouse")) {
          yield;
        }
        this.effects.ghost -= 50;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    for (let i = 0; i < 20; i++) {
      this.size -= 5;
      yield;
    }
    this.visible = false;
    this.broadcast("Старт");
  }
}
