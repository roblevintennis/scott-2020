<script context="module">
  import { useData } from "../clientUtilities";

  export async function preload() {
    const uses = await useData(this, "uses");
    return { uses };
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../components/Fade";
  export let uses;
</script>

<div class="content" in:fadeIn out:fadeOut>
  {@html uses}
</div>
