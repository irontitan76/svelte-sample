<svelte:head>
	<title>Fusion | About Us</title>
</svelte:head>

<script>
  import { fade } from 'svelte/transition';
  import Heading from '$lib/Heading.svelte';
</script>

<article class="constrain container" in:fade>
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