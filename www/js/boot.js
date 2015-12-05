// State: Flappy.Boot

'use strict';

var Flappy = { };

Flappy.Boot = function () {};

Flappy.Boot.prototype = {

  init: function () {
    console.log("%c~~ Flappy Bird Game Thing~~~\n",
              "color:#ff0000")
  },

  preload: function () {
  },

  create: function () {
    this.game.stage.backgroundColor = "#00FF00";
  }

};
