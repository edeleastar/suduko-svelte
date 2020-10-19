

import {default as Neighbour } from './neighbour';

export default class Create {
  /**
   * Method generates a random grid, given a specific number of clues.
   * A clue is a number revealed to the player and part of the correct solution.
   * Precondition: numberClues to be in range [17, 77].
   * Reason: to provide best chance of a unique solution existing.
   * @see: https://math.stackexchange.com/questions/345244/maximum-number-of-clues-in-a-sudoku-game-that-does-not-produce-a-unique-solution
   * @see: https://www.technologyreview.com/s/426554/mathematicians-solve-minimum-sudoku-problem/
   * @param numberClues
   * @returns {any[]}
   */

  static generateGrid(numberClues) {
    // Force compliance with preconditions
    // numberClues = numberClues < 17 ? 17 : numberClues
    // numberClues = numberClues > 77 ? 77 : numberClues

    // Initialize the sudoku grid with empty strings.
    let gridSize = 81;
    let grid = Array(gridSize).fill('');

    // We first generate a set of valid clues into a map.
    // We use the map as a means of ensuring cell duplication avoided.
    let cluesMap = new Map();

    // For each clue, pick a random cell, generate a random clue,
    // repeat until valid clue found, add to map and grid as you go since grid
    // required dynamically updated in neighbourhood check.
    for (let i = 0; i < numberClues; i += 1) {
      do {
        var cell = this.rnd81();
      } while (cluesMap.has(cell));

      do {
        var val = this.rnd9();
      } while (Neighbour.isNeighbour(grid, cell, val));

      cluesMap.set(cell, val);
      grid[cell] = val;
    }

    return grid;
  }

  /**
   * Generates random whole number range [1, 9]
   */
  static rnd9() {
    return Math.floor(Math.random() * 9 + 1);
  }

  /**
   * Generates random whole number range [0, 80]
   */
  static rnd81() {
    return Math.floor(Math.random() * 81);
  }
}
