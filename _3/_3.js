/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 1", "./_3/costumes/костюм 1.svg", {
        x: 78.81305900900898,
        y: 151.9091586036036,
      }),
      new Costume("костюм 2", "./_3/costumes/костюм 2.svg", {
        x: 78.81305900900898,
        y: 151.9091586036036,
      }),
      new Costume("костюм 3", "./_3/costumes/костюм 3.svg", {
        x: 78.81305900900898,
        y: 196.19956818116748,
      }),
    ];

    this.sounds = [new Sound("поп", "./_3/sounds/поп.wav")];

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
      yield* this.wait(9);
      this.createClone();
      this.broadcast("Большая фигура");
      yield;
    }
  }

  *startAsClone() {
    this.goto(300, -140);
    this.moveAhead();
    this.visible = true;
    this.costume = this.random(1, 3);
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
