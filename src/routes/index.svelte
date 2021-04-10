<svelte:head>
	<title>Fusion | Official Home</title>
</svelte:head>

<script lang="ts">
  import Article from '$lib/Article.svelte';
  import Heading from '$lib/Heading.svelte';
  import Hero from '$lib/Hero.svelte';
  import ScrollerBar from '$lib/ScrollerBar.svelte';
</script>

<Hero />
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
<section id="overview">
  <Heading title="HARNESS THE POWER OF FUSION" />
  <div class=container>
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
</section>
<section id="recent-insights">
  Recent insights
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
</style>
