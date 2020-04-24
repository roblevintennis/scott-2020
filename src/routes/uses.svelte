<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`uses.json`)
      .then(r => r.json())
      .then(uses => {
        return { uses };
      });
  }
</script>

<script>
  import { fadeIn, fadeOut } from "../components/Fade";
  export let uses;
</script>

<div class="content" in:fadeIn out:fadeOut>
  {@html uses}
</div>
