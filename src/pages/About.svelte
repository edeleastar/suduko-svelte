<script lang="ts">
  import { onMount } from "svelte";
  export let params: any = {};

  onMount(async () => {
    console.log(params);
  });
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<main>
  <h2>About Sudoku Solver</h2>

  <p>
    An application written using Sapper and Svelte and that facilitates solving
    of samples or dynamically user-created Sudoku puzzles.
  </p>
</main>
