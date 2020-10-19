<script>
  import sudoku from "../sudoku-cmd";

  // The sudoku puzzle data is stored in a 1-dimensional array of strings, length 81, representing a classic 9 x 9 sudoku.
  let gridSize = 81;
  let data = () => Array(gridSize).fill(""); // populate all 81 data cells with ""
  let gridstr = data();
  console.log("initial data :", gridstr);

  let nums = ["1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9"];

  const handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    console.log("id : value ", id, value);
    let idNum = parseInt(id);
    console.log("valueNum ", idNum);
    gridstr[idNum] = value;
    console.log("gridstr[", idNum, "]", gridstr[idNum]);
  };

  const handleSubmit = () => {
    console.log(gridstr);
    //gridstr = sudoku.solution('6,,4,,9,,7,,3,,,3,,,,,6,,,,,,,,,1,8,,,,1,8,,,,9,,,,,,4,3,,,7,,,,3,9,,,,,7,,,,,,,,,4,,,,,8,,,9,,8,,6,,4,,5');
    gridstr = sudoku.solution(gridstr.join());
    console.log(gridstr);
  };

  const handleSave = () => {
    console.log("handleSave invoked");
  };
</script>

<style>
  tbody {
    border: solid medium;
  }

  .inputs {
    border-style: none;
    text-align: center;
    width: 40px;
    height: 40px;
  }

  table {
    margin: 0 auto;
    border-collapse: collapse;
    font-family: Calibri, sans-serif;
  }

  tr:nth-child(3n) {
    border-bottom: solid medium;
  }

  td:nth-child(3n) {
    border-right: solid medium;
  }

  td {
    border: solid thin;
    font-size: xx-large;
  }

  form {
    max-width: 360px;
    margin: 40px auto;
    text-align: center;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <table>
    <tbody>
      {#each nums as row}
        <tr>
          {#each nums as col}
            <td>
              <input
                class="inputs"
                type="string"
                id={Number(row - 1) * 9 + Number(col) - 1}
                on:input={handleInput}
                bind:value={gridstr[Number(row - 1) * 9 + Number(col) - 1]}
                placeholder=" " />
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="ui segment">
    <button
      type="submit"
      class="ui fluid green submit button"
      id="handleSubmit">Solve
    </button>
  </div>
  <div class="ui segment">
    <button
      type="button"
      class="ui fluid green button"
      id="handleSave"
      on:click={handleSave}>Save
    </button>
  </div>
</form>
