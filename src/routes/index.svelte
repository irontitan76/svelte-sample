<svelte:head>
	<title>Fusion | Official Home</title>
</svelte:head>

<script lang="ts">
  import Alert from '$lib/Alert.svelte';
  import Article from '$lib/Article.svelte';
  import Button from '$lib/Button.svelte';
  import Heading from '$lib/Heading.svelte';
  import ScrollerBar from '$lib/ScrollerBar.svelte';
  import Vanta from '$lib/Vanta.svelte';
</script>

<Vanta type="waves" />

<section class="hero" id='vanta-container'>
  <div class="constrain">
    <h1>Welcome to the Reformation</h1>
    <h2>
      Building
      <span>modern</span>
      government with
      <span>intelligent</span>
      design
    </h2>
    <Button href='/insights'>Learn more</Button>
  </div>
</section>

<ScrollerBar
 items={[
    {
      href: '#overview',
      icon: 'telescope',
      label: 'Overview',
    },
    {
      href: '#recent-insights',
      icon: 'history',
      label: 'Recent insights'
    },
  ]}
/>

<section class="constrain" id="overview">
  <Heading
    subtitle="CHASING A PEACEFUL AND PROSPEROUS NATION"
    title="FREEDOM IS OUR FOUNDATION"
  />
  <div>

  </div>
</section>

<section class="constrain" id="recent-insights">
  <Heading
    subtitle="EMBRACE OPEN INNOVATION AND NEW WAYS OF THINKING"
    title="EXPLORE INSIGHTS"
  />
  <div class=container>
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
</section>

<style>
  .container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
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

  .hero h2 span:first-of-type {
    color: var(--color-primary-lighter);
  }

  .hero h2 span:last-of-type {
    color: var(--color-secondary-light);
  }
</style>
