/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_4/costumes/костюм 1.svg", {
        x: 25.749995000000013,
        y: 2.75,
      }),
      new Costume("костюм 2", "./_4/costumes/костюм 2.svg", {
        x: 73.22868682555784,
        y: 2.75,
      }),
      new Costume("костюм 3", "./_4/costumes/костюм 3.svg", {
        x: 73.22868682555784,
        y: 3.640466531440154,
      }),
      new Costume("костюм 4", "./_4/costumes/костюм 4.svg", {
        x: 73.22868682555784,
        y: 51.567439219066955,
      }),
    ];

    this.sounds = [new Sound("поп", "./_4/sounds/поп.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive2),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.visible = false;
    yield* this.wait(1);
    while (true) {
      yield* this.wait(3);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.moveAhead();
    this.goto(300, -140);
    this.visible = true;
    this.costume = this.random(1, 4);
    while (!this.touching(Color.rgb(255, 199, 199))) {
      this.x -= 7;
      yield;
    }
    this.visible = false;
    yield* this._();
  }

  *whenIReceive2() {}

  *_() {
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (this.compare(this.x, -150) < 0) {
        yield* this._();
      }
      yield;
    }
  }
}
