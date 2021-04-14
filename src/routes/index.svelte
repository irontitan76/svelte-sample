<svelte:head>
	<title>Fusion | Official Home</title>
</svelte:head>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import Article from '$lib/Article.svelte';
  import Button from '$lib/Button.svelte';
  import Heading from '$lib/Heading.svelte';
  import ScrollerBar from '$lib/ScrollerBar.svelte';
  import Vanta from '$lib/Vanta.svelte';
  import { formatMessage } from '$lib/lang/en-US.svelte';

  const text = ({ id }) => formatMessage({ id: `landing.${id}` });

  const scrollerItems = [
    {
      href: '#overview',
      icon: 'telescope',
      label: text({ id: 'scroller.item.0'}),
    },
    {
      href: '#recent-insights',
      icon: 'history',
      label: text({ id: 'scroller.item.1'}),
    },
  ];
</script>

<Vanta type="waves" />

<section class="hero" id='vanta-container'>
  <div class="constrain" in:fade={{ delay: 1000 }}>
    <h1>{text({ id: 'hero.h1' })}</h1>
    <h2>{@html text({ id: 'hero.h2' })}</h2>
    <Button href='/insights'>{text({ id: 'hero.button' })}</Button>
  </div>
</section>

<ScrollerBar items={scrollerItems} />

<section class="constrain" id="overview">
  <Heading
    subtitle='landing.overview.subtitle'
    title='landing.overview.title'
  />
  <div>

  </div>
</section>

<section class="constrain insights" id="recent-insights">
  <Heading
    subtitle='landing.insights.subtitle'
    title='landing.insights.title'
  />
  <div class="container">
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
  <Button
    color="primary"
    href="/insights"
  >
    {text({ id: 'insights.button'})}
  </Button>
</section>

<style>
  
  .container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: var(--spacing-4);
  }

  .container > :global(*) {
    margin: var(--spacing-3);
  }

  .hero > div {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - var(--spacing-6));
    justify-content: center;
  }

  .hero h1 {
    color: var(--color-primary-contrast-text);
    flex-basis: 100%;
    font-family: var(--font-family-heading);
    font-size: 6vw;
    font-weight: bold;
    margin: 0 auto;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 100vw;
  }

  .hero h2 {
    color: var(--color-primary-contrast-text);
    flex-basis: 100%;
    font-family: var(--font-family-heading);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-6);
    letter-spacing: 6px;
    text-align: center;
    text-transform: uppercase;
  }

  .insights {
    margin-bottom: var(--spacing-8);
  }

  :global(.hero h2 span:first-of-type) {
    color: var(--color-primary-lighter);
  }

  :global(.hero h2 span:last-of-type) {
    color: var(--color-secondary-light);
  }
</style>