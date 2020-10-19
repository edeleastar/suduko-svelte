'use strict';

let Enum = require('enum');

/**
 * Compares grid names.
 * Name format: Grid-id-level.
 * Example: Grid-3-Easy.
 * Levels are Easy, Medium, Difficult, Diabolical: sorting to be in this order.
 * Example:
 * Grid-1-Easy
 * Grid-4-Easy
 * Grid-2-Medium
 * Grid-5-Difficult
 * Grid-3-Diablical
 * @author john
 *
 */
const Level = new Enum({"Easy": 1, "Medium": 2, "Difficult": 3, "Diabolical": 4});

const NameComparator = function () {


  function compare(name_1, name_2) {
    let n_1 = Level.valueOf(name_1.split("-")[2]);
    let n_2 = Level.valueOf(name_2.split("-")[2]);

    return n_1.value - n_2.value;
  }
}

module.exports = NameComparator;