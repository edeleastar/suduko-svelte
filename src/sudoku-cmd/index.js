'use strict';

const transformMethods = require('./solver/gridtransform');
const toSudokuEngine = transformMethods.toSudokuEngine;
const fromEngineToRender = transformMethods.fromEngineToRender;

/**
 * TODO: design for no solution case.
 * @param ar Problem array: format row|col|value, example 1st cell 004, last cell 883.
 * @return Solution array in 2-dim format.
 */
function main (ar) {
  let matrix = parseProblem(ar);
  //writeMatrix(matrix);
  let isSolved = solve(0, 0, matrix);
  if(isSolved == false) {
    error(matrix);
  }
  //writeMatrix(matrix);
  return matrix;
}

/**
 * @param i row index
 * @param j col index
 * @param cells 2-d 9 x 9 sudoku grid
 */
function solve(i, j, cells) {
  if (i == 9) {
    i = 0;
    if (++j == 9)
      return true;
  }
  if (cells[i][j] != 0) // skip filled cells
    return solve(i + 1, j, cells);

  for (let val = 1; val <= 9; ++val) {
    if (legal(i, j, val, cells)) {
      cells[i][j] = val;
      if (solve(i + 1, j, cells))
        return true;
    }
  }
  cells[i][j] = 0; // reset on backtrack
  return false;
}

/**
 *
 * @param i row index
 * @param j col index
 * @param val Current value being validated
 * @param cells The 9 x 9 sudoku grid
 * @returns {boolean}
 */
function legal(i, j, val, cells) {
  for (let k = 0; k < 9; ++k) // row
    if (val == cells[k][j])
      return false;

  for (let k = 0; k < 9; ++k) // col
    if (val == cells[i][k])
      return false;

  let boxRowOffset = Math.floor(i / 3) * 3;
  let boxColOffset = Math.floor(j / 3) * 3;
  for (let k = 0; k < 3; ++k) // box
    for (let m = 0; m < 3; ++m) {
      //console.log('sudoku.legal(): boxRowOffsets [%d][%d]',boxRowOffset + k, boxRowOffset + m);
      if (val == cells[boxRowOffset + k][boxColOffset + m]) {
        return false;
      }
    }

  return true; // no violations, so it's legal
}

/**
 *
 * @param args One-D Array of strings
 */
function parseProblem(args) {
  let problem = array2D(9, 9, 0);
  for (let n = 0; n < args.length; ++n) {
    let i = parseInt(args[n].substring(0, 1));
    let j = parseInt(args[n].substring(1, 2));
    let val = parseInt(args[n].substring(2, 3));
    problem[i][j] = val;
  }
  return problem;
}

/**
 * Create 2-D array
 * @param w Width of array (Number cols)
 * @param h Depth of array (number rows)
 * @param val Initializing value.
 * @returns {Array}
 */
function array2D(w, h, val) {
  let arr = [];
  for (let i = 0; i < h; i++) {
    arr[i] = [];
    for (let j = 0; j < w; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}

/**
 * Print 2-d array to standard output.
 * @param solution Two-D solution aray
 */
function writeMatrix(solution) {
  for (let i = 0; i < 9; ++i) {
    if (i % 3 == 0)
      console.log(" -----------------------");
    for (let j = 0; j < 9; ++j) {
      if (j % 3 == 0)
        process.stdout.write("| ");
      process.stdout.write(solution[i][j] === 0 ? " " : solution[i][j].toString());
      process.stdout.write(' ');
    }
    console.log("|");
  }
  console.log(" -----------------------");
}

/**
 * Sets values of error matrix to -1con
 * @param matrix Two-D matrix for initialization.
 */
function error(matrix) {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      matrix[row][col] = -1;
    }
  }
}

exports.solution = (strarray) => {
  let problem = toSudokuEngine(strarray); //Convert to suitable format for GridTransform
  let solnint = main(problem);
  let soln = fromEngineToRender(solnint);
  return soln;
}
