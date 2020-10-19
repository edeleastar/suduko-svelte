<script lang="ts">
  import Router from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Nav from "./components/Nav.svelte";
  import Footer from "./components/Footer.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Puzzles from "./pages/Puzzles.svelte";

  let routes = {
    "/": Home,
    "/about": About,
    "/puzzles": Puzzles,
    "*": NotFound,
  };
</script>

<svelte:head>
  <title>Sudoku Solver</title>
</svelte:head>

<Nav />
<Router {routes} />
<Footer />
