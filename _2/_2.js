/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("138458", "./_2/costumes/138458.svg", {
        x: 35.836699227255025,
        y: 16.25,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive2),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive3),
      new Trigger(Trigger.BROADCAST, { name: "проиграл" }, this.whenIReceive4),
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive5),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.visible = true;
    this.goto(-50, 0);
    this.direction = 90;
    yield* this.wait(0.2);
    while (true) {
      if (this.mouse.down || this.keyPressed("any")) {
        this.y += 20;
        if (this.touching(this.sprites["_6"].andClones())) {
          this.y -= 20;
        }
      }
      yield;
    }
  }

  *whenIReceive2() {
    while (true) {
      if (
        this.touching(this.sprites["_1"].andClones()) ||
        this.touching(Color.rgb(255, 0, 0)) ||
        this.touching(this.sprites["_5"].andClones())
      ) {
        this.broadcast("проиграл");
      }
      yield;
    }
  }

  *whenIReceive3() {
    while (true) {
      while (
        !(
          this.touching(this.sprites["_3"].andClones()) ||
          this.compare(this.y, -150) < 0 ||
          this.touching(this.sprites["_4"].andClones())
        )
      ) {
        this.y -= 5;
        yield;
      }
      yield;
    }
  }

  *whenIReceive4() {
    /* TODO: Implement stop all */ null;
  }

  *whenIReceive5() {
    while (true) {
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.y += 3;
      }
      yield;
    }
  }
}
*whenIReceive2() {
  while (true) {
    if (
      this.touching(this.sprites["_1"].andClones()) ||
      this.touching(Color.rgb(255, 0, 0)) ||
      this.touching(this.sprites["_5"].andClones())
    ) {
      this.broadcast("проиграл");
    }
    yield;
  }
}