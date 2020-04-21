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

  :global(.hljs-string),
  :global(.hljs-doctag) {
    color: var(--yellow);
  }

  :global(p),
  :global(li) {
    max-width: 900px;
    font-size: 1rem;
  }
</style>

{#if segment}
  <a transition:slide href="posts">&#x3c;- Back</a>
{/if}

<slot />
