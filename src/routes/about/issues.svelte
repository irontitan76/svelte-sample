<svelte:head>
	<title>Fusion | The Issues</title>
</svelte:head>

<script>
  import marked from 'marked';
  import Accordion from '$lib/Accordion.svelte';
  import Heading from '$lib/Heading.svelte';

  const issues = [
    {
      name: 'Commerce',
    },
    {
      name: 'Defense',
    },
    {
      name: 'Health',
    },
    {
      name: 'Justice',
    },
    {
      name: 'Infrastructure',
    },
    {
      name: 'State',
    },
    {
      desc: marked('# Purpose'),
      name: 'Technology',
    },
    {
      name: 'Treasury',
    },
  ];
</script>

<article class="constrain container">
  <section class="section">
    <Heading title="The Issues" />
    <Accordion items={issues} />
  </section>
</article>

<style>
  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--spacing-4);
  }

  .section {
    padding: var(--spacing-8) 0;
    margin: 0 var(--spacing-3);
    max-width: 1200px;
    width: 100%;
  }
</style>