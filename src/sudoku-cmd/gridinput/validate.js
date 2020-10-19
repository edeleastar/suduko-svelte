import { default as Neighbour } from './neighbour';

export default class Validate {

  constructor() {
    console.log('in validate constructor');
  }

  static isValid(grid) {
    for (let cell = 0; cell < grid.length; cell += 1) {
      if (grid[cell] !== '') {
        let val = grid[cell];
        grid[cell] = ''; // Remove the cell value being examined
        if (Neighbour.isNeighbour(grid, cell, val)) {
          grid[cell] = val; // Put back the cell value
          return false;
        }
        grid[cell] = val; // Put back the cell value
      }
    }
    return true;
  }
}
