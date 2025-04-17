/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "2838214618_preview_20221127_124559-2",
        "./Stage/costumes/2838214618_preview_20221127_124559-2.svg",
        { x: 298.7109375, y: 203.75 }
      ),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Старт" }, this.whenIReceive),
    ];
  }

  *whenIReceive() {
    this.effects.color = 0;
    while (true) {
      yield* this.wait(7);
      for (let i = 0; i < 10; i++) {
        this.effects.color += 1;
        yield;
      }
      yield;
    }
  }
}
