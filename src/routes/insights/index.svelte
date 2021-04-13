<svelte:head>
	<title>Fusion | Insights</title>
</svelte:head>

<script lang="ts">
  import Article from '$lib/Article.svelte';
  import Vanta from '$lib/Vanta.svelte';
</script>

<Vanta type="topology" />

<section class="hero" id='vanta-container'>
  <h1>Knowledge is Power</h1>
</section>

<header class="filter">
  <a class="title" href="/insights">
    <span>insights</span>
    <span>.</span>
    <span>engine</span>
  </a>
</header>

<section class="content">
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
  <Article />
</section>

<style>
  .content {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content > :global(*) {
    margin: var(--spacing-3);
  }

  .filter {
    align-items: center;
    background-color: var(--color-background-paper);
    box-shadow: var(--shadows-1);
    display: flex;
    height: 48px;
    padding: 0 var(--spacing-3);
    position: sticky;
    top: 64px;
    width: 100%;
    z-index: 1000;
  }

  .title {
    align-items: center;
    display: flex;
    text-decoration: none;
  }

  .title span:first-of-type {
    color: var(--color-primary-text);
    font-weight: 300;
  }

  .title span:nth-of-type(2) {
    color: var(--color-primary-main);
    font-size: 16px;
    font-weight: 900;
  }

  .title span:last-of-type {
    color: var(--color-primary-text);
    font-weight: 900;
  }

  .hero {
    align-content: center;
    align-items: center;
    background-color: var(--color-background-default);
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    justify-content: center;
  }

  .hero h1 {
    color: inherit;
    flex-basis: 100%;
    font-family: var(--font-family-heading);
    font-size: 3.5vw;
    font-weight: bold;
    letter-spacing: 15px;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
    width: 100vw;
  }
</style>
