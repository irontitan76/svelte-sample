<svelte:head>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js'></script>
  <script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js'></script>
</svelte:head>

<script lang="ts">
  import { getContext, onMount } from 'svelte';

  // let contrast = getContext("contrast");
  // let mode = (contrast as any).mode;

  onMount(() => {
    if (!(window as any).VANTA) return;

    // console.log(mode);
    (window as any).VANTA.TOPOLOGY({
      // backgroundColor: mode === "dark" ? 'black' : 'white',
      color: '#3ca3ff',
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
  <h1>Knowledge is Power</h1>
</section>

<style>
  section {
    align-content: center;
    align-items: center;
    background-color: var(--color-background-default);
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    justify-content: center;
  }

  h1 {
    color: inherit;
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
</style>