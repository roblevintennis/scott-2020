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
  export let uses;
</script>

<div class="content">
  {@html uses}
</div>
