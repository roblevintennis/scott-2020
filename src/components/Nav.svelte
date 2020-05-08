<script>
  export let segment;
</script>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    font-size: 0.7rem;
    margin: 0;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: blue;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'speaking' ? 'page' : undefined}
        href="speaking">
        speaking
      </a>
    </li>
    <li>
      <a aria-current={segment === 'work' ? 'page' : undefined} href="work">
        work
      </a>
    </li>
    <li>
      <a aria-current={segment === 'posts' ? 'page' : undefined} href="posts">
        posts
      </a>
    </li>
    <li>
      <a aria-current={segment === 'uses' ? 'page' : undefined} href="uses">
        uses
      </a>
    </li>
    <li>
      <a aria-current={segment === 'notion' ? 'page' : undefined} href="notion">
        notion
      </a>
    </li>
  </ul>
</nav>
