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
  h1:after {
    content: "";
    position: absolute;
    height: 120%;
    width: 240%;
    background: white;
    left: 0;
    z-index: -1;
    transform: skew(7deg, -2deg);
  }
  h1 {
    position: relative;
    color: black;
    width: auto;
    display: inline-block;
    margin-bottom: 6rem;
  }
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
