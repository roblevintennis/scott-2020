<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`posts.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 3rem;
  }

  a {
    font-size: 2rem;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href="posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
