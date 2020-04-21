<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`posts/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .content :global(pre) {
    background-color: #111;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    color: white;
    font-size: 1rem;
    padding: 1em;
    border: solid 2px white;
    border-radius: 15px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
