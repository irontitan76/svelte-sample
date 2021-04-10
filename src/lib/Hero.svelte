<svelte:head>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'></script>
  <script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js'></script>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$lib/Button.svelte';

  onMount(() => {
    if (!(window as any).VANTA) return;

    (window as any).VANTA.WAVES({
      color: 'rgb(0, 52, 98)',
      el: "#vanta-container",
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      mouseControls: true,
      scale: 1.00,
      scaleMobile: .50,
      shininess: 24.00,
      touchControls: true,
      waveHeight: 15.50,
      waveSpeed: 1.05,
      zoom: 1.10,
      
    });
  });
</script>

<section id='vanta-container'>
  <h1>Welcome to the Revolution</h1>
  <h2>
    Building
    <span>modern</span>
    brands with
    <span>intelligent</span>
    design
  </h2>
  <Button href='/insights'>Learn more</Button>
</section>

<style>
  section {
    align-content: center;
    align-items: center;
    background-color: var(--color-primary-dark);
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - var(--spacing-6));
    justify-content: center;
  }

  h1 {
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

  h2 {
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

  h2 span:first-of-type {
    color: var(--color-primary-lighter);
  }

  h2 span:nth-of-type(2) {
    color: var(--color-secondary-light);
  }
</style>