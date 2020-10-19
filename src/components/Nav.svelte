<script lang="ts">
  import active from "svelte-spa-router/active";
</script>

<style>
  nav {
    background: #fff3ef;
  }
  nav div {
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  h1 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  ul {
    padding: 0;
    margin: 0;
    text-align: right;
  }
  li {
    display: inline-block;
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  a.current {
    border-bottom: 3px solid red;
  }
</style>

<nav>
  <div>
    <h1>Sudoku Solver</h1>
    <ul>
      <li>
        <a href="." use:active={{ path: '/', className: 'current' }}>home</a>
      </li>
      <li>
        <a
          href="#/about"
          use:active={{ path: '/about', className: 'current' }}>about</a>
      </li>
      <li>
        <a
          href="#/puzzles"
          use:active={{ path: '/puzzles', className: 'current' }}>puzzles</a>
      </li>
    </ul>
  </div>
</nav>
