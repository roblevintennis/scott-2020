<script context="module">
  import Code from "../../components/Code.svelte";
  export async function preload() {
    const res = await this.fetch(
      `https://notion-api.splitbee.io/v1/page/3e03212e646e41caaa560408162dee99`
    );
    const post = await res.json();
    const objectArray = Object.entries(post);
    const blocks = objectArray.map(([key, value]) => {
      return value.value;
    });
    return { blocks };
  }
</script>

<script>
  export let blocks;
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

{#each blocks as block}
  {#if block.properties}
    {#if block.type === 'header'}
      <h1>{block.properties.title[0][0]}</h1>
    {:else if block.type === 'page'}
      <h2>{block.properties.title[0][0]}</h2>
    {:else if block.type === 'sub_header'}
      <h2>{block.properties.title[0][0]}</h2>
    {:else if block.type === 'sub_sub_header'}
      <h3>{block.properties.title[0][0]}</h3>
    {:else if block.type === 'text'}
      <p>{block.properties.title[0][0]}</p>
    {:else if block.type === 'code'}
      <Code
        code={block.properties.title[0][0]}
        lang={block.properties.language[0][0]} />
    {/if}
  {/if}
{/each}
