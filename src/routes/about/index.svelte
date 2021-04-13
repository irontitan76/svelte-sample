<svelte:head>
	<title>Fusion | About Us</title>
</svelte:head>

<script>
  import Accordion from '$lib/Accordion.svelte';
  import Heading from '$lib/Heading.svelte';

  const issues = [
    { name: 'Commerce' },
    { name: 'Defense' },
    { name: 'Health' },
    { name: 'Justice' },
    { name: 'Infrastructure' },
    { name: 'State' },
    { name: 'Treasury' },
  ];
</script>

<article class="constrain container">
  <section>
    <Heading title="Our Mission" />
    Welcome to the Freedom Party website. We're happy you're here.
  </section>
  
  <section>
    <Heading title="Our History" />
  </section>

  <section>
    <Heading title="Founder's Letter" />
  </section>
</article>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 1200px;
  }
</style>