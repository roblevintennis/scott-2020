<script>
  import { fadeIn, fadeOut } from "../components/Fade";
</script>

<style>
  .wrapper {
    max-width: 900px;
  }
</style>

<svelte:head>
  <title>About Scott Tolinski</title>
</svelte:head>

<div class="wrapper" in:fadeIn out:fadeOut>
  <h1>About Scott</h1>

  <p>Hi, I'm Scott Tolinski.</p>
  <p>
    I own and make video tutorials teaching web development for
    <a target="_blank" href="http://www.youtube.com/user/LevelUpTuts/featured">
      Level Up Tutorials
    </a>
    , releasing a new premium series every month.
  </p>
  <p>
    I also co-host
    <a target="_blank" href="http://syntax.fm">Syntax.fm</a>
    with
    <a target="_blank" href="https://wesbos.com/">Wes Bos</a>
    . Syntax is a popular, light hearted web development podcast that teaches
    full stack topics while staying fun.
  </p>
  <p>
    I enjoy{' '}
    <a target="_blank" href="http://youtu.be/Zcoj4Zfj6_k?t=1m34s">bboying</a>
    {' '} also known as breakdancing, and have been dancing for over 15 years
    doing shows for professional NFL and NBA teams. I'm inspired by a hot cup of
    green tea, excellent music, and Shaw Bros. kung fu movies.
  </p>
</div>
