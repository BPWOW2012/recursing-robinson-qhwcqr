/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("костюм 5", "./_5/costumes/костюм 5.svg", {
        x: 168.05007326762063,
        y: 144.34239329929358,
      }),
      new Costume("костюм 2", "./_5/costumes/костюм 2.svg", {
        x: 168.05008084567226,
        y: 144.34239447249504,
      }),
      new Costume("костюм 3", "./_5/costumes/костюм 3.svg", {
        x: 92.34465681281355,
        y: 132.32779808160797,
      }),
    ];

    this.sounds = [new Sound("поп", "./_5/sounds/поп.wav")];

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
    this.costume = this.random(1, 3);
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
