<script>
  import { slide } from "svelte/transition";
  export let segment;
</script>

<style>
  a {
    font-variant-ligatures: common-ligatures;
    margin-bottom: 2rem;
    display: block;
  }
</style>

{#if segment}
  <a transition:slide href="posts">&#x3c;- Back</a>
{/if}

<slot />
