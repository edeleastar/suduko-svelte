export default class Boxes {

  constructor() {
    console.log('In Boxes constructor');
  }
  /**
   * This method applies to a sudoku grid represented by a one-dimensional array range [0...80].
   * This 9 x 9 sudoku grid is subdivided into 9 boxes.
   * Each box contains 3 rows and 3 columns.
   * Each element of the box represents a sudoku cell index.
   * This method generates an array of boxes.
   * Each element of the array contains an array of the numbers in the box.
   * For example box[0] has elements [0, 1, 2, 9, 10, 11, 18, 19, 20].
   *
   * @returns {Array} An array of 9 elements, each element containing an array of 9 numbers.
   */
  static populateBoxes() {
    let boxes =   [];
    for (let i = 0; i < 9; i += 1) {
      boxes[i] = [];
    }

    let indx = 0; // box number
    for (let r = 0; r < 9; r += 3) {
      for (let c = 0; c < 9; c += 3) {
        for (let br = 0; br < 3; br += 1) {
          for (let bc = 0; bc < 3; bc += 1) {
            boxes[indx].push(9 * (r + br) + c + bc);
          }
        }
        indx += 1;
      }
    }
    return boxes;
  }

  /**
   * Precondition: param cell range [0..80]
   * Discover the box in which a particular cell is located.
   * @param cell The cell whose containing box index is required.
   * @returns {number} The index of the box containing cell or -1 if not found.
   */
  static whichBox(cell) {
    let boxes = this.populateBoxes();

    for (let i = 0; i < boxes.length; i += 1) {
      for (let j = 0; j < boxes[i].length; j += 1) {
        if (boxes[i][j] === cell) {
          return i;
        }
      }
    }
    return -1;
  }
}
