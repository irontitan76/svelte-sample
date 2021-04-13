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

<section id='vanta-container'>
  <div class="
    content-center
    flex
    flex-wrap
    items-center
    h-screen 
    justify-center
    mx-auto
    my-0
    max-w-screen-2xl
  ">
    <h1 class="
      flex-auto
      font-bold
      font-heading
      mb-5
      mx-auto
      text-center
      text-primary-contrast
      text-8xl
      tracking-widest
      uppercase
      w-full"
    >
      Welcome to the Reformation
    </h1>
    <h2 class="
      flex-auto
      font-medium
      font-heading
      mb-24
      mx-auto
      text-center
      text-primary-contrast
      text-2xl
      tracking-widest
      uppercase
      w-full
    ">
      Building
      <span class="text-primary-lighter">modern</span>
      government with
      <span class="text-secondary">intelligent</span>
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

<section class="mx-auto mt-16 max-w-screen-2xl" id="overview">
  <Heading
    subtitle="CHASING A PEACEFUL AND PROSPEROUS NATION"
    title="FREEDOM IS OUR FOUNDATION"
  />
  <div>

  </div>
</section>

<section class="mx-auto my-0 max-w-screen-2xl" id="recent-insights">
  <Heading
    subtitle="EMBRACE OPEN INNOVATION AND NEW WAYS OF THINKING"
    title="EXPLORE INSIGHTS"
  />
  <div class="flex flex-1 flex-wrap justify-center">
    <Article />
    <Article />
    <Article />
    <Article />
  </div>
</section>
