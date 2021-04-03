<svelte:head>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'></script>
  <script src='https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js'></script>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    if (!(window as any).VANTA) return;

    (window as any).VANTA.WAVES({
      el: "#vanta-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });
  });
</script>

<section id='vanta-container'>
  <h1>Welcome to the Revolution</h1>
  <a href='/insights'>Learn more</a>
</section>

<style>
  section {
    align-content: center;
    align-items: center;
    background-color: lightgrey;
    display: flex;
    flex-wrap: wrap;
    height: 750px;
    justify-content: center;
  }

  h1 {
    color: var(--color-primary-text);
    font-size: 96px;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
    width: 100vw;
  }

  a {
    background-color: var(--color-primary-main);
    border: none;
    border-radius: 4px;
    box-shadow: 4px 4px 10px 0px #3a3a3a;
    color: white;
    cursor: pointer;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    outline: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color .5s ease-in-out, color .5s ease-out;
    width: 250px;
  }

  a:hover {
    background-color: white;
    color: var(--color-primary-main);
  }
</style>