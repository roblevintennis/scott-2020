<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    color: #fff;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background: #111;
    line-height: 1.5;
  }

  @font-face {
    font-family: "MonoLisa";
    src: url("/MonoLisa-Regular.otf");
    src: url("/MonoLisa-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  main {
    padding: 4rem 2rem;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
