<script>
  import { fadeIn, fadeOut } from "../../components/Fade";
</script>

<style>
  .wrapper {
    max-width: 900px;
  }
</style>

<div class="wrapper" in:fadeIn out:fadeOut>
  <h1>Speaking & Appearances</h1>

  <audio
    data-theme="night"
    data-src="https://changelog.com/jsparty/123/embed"
    src="https://cdn.changelog.com/uploads/jsparty/123/js-party-123.mp3"
    preload="none"
    class="changelog-episode"
    controls />
  <p>
    <a href="https://changelog.com/jsparty/123">
      JS Party 123: JS "Danger" Party
    </a>
    – Listen on
    <a href="https://changelog.com/">Changelog.com</a>
  </p>
  <iframe
    title="2fast"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/xK3BhwDRuL8"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />

  <iframe
    title="some"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/L3UokgyCr4A"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />

  <iframe
    title="yo"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/keynw6xAsqo"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;
    picture-in-picture"
    allowfullscreen />

</div>
