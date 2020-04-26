<script context="module">
  import { useData } from "../../clientUtilities";

  export async function preload() {
    const speaking = await useData(this, "speaking");
    return { speaking };
  }
</script>

<script>
  export let speaking;
</script>

<style>
  .wrapper {
    max-width: 900px;
  }
</style>

<h1>Speaking & Appearances</h1>

<div class="wrapper">
  {#each speaking as talk}
    <h1>{talk.title}</h1>

    <div class="content">
      {@html talk.html}
    </div>
  {/each}

  <slot />

</div>
