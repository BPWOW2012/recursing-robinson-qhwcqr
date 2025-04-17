/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 2", "./_6/costumes/костюм 2.svg", {
        x: 168.2081302053714,
        y: 189.6884384384384,
      }),
      new Costume("костюм 4", "./_6/costumes/костюм 4.svg", {
        x: 199.04654162162157,
        y: 190.198949009009,
      }),
    ];

    this.sounds = [new Sound("поп", "./_6/sounds/поп.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive2),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Большая фигура" },
        this.whenIReceive3
      ),
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
    this.goto(300, 140);
    this.visible = true;
    this.costume = this.random(1, 2);
    while (!this.touching(Color.rgb(255, 199, 199))) {
      this.x -= 7;
      if (this.touching(this.sprites["_2"].andClones())) {
        this.x += 7;
        this.broadcast("1");
      }
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

  *whenIReceive3() {
    yield* this.wait(0.2);
  }
}
