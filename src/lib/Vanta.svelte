<script>
  import { getContext, onMount } from 'svelte';
  import { browser } from '$app/env';
  import LibLoader from '$lib/LibLoader.svelte';

  export let type;

  const contrast = getContext("contrast");

  const settings = {
    topology: (mode) => ({
      backgroundColor: mode === "dark" ? '#070910' : '#fafafa',
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
    }),
    waves: {
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
    },
  };

  const scripts = {
    topology: [
      'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js',
      'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js',
    ],
    waves: [
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
      'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js',
    ],
  };

  $: loaded = false;
  const is3DLoaded = () => {
    loaded = true;
  };

  const isVantaLoaded = () => {
    if (browser && loaded) {
      contrast.subscribe(mode => {
        const setting = typeof settings[type] === 'function'
          ? settings[type](mode)
          : settings[type];
        globalThis.VANTA[type.toUpperCase()](setting)
      });
    }

    if (!loaded) {
      loaded = true; // hacky way
      isVantaLoaded();
    }
  };

  onMount(() => {
    return () => {
      const canvases = document.getElementsByClassName('vanta-canvas');
      return canvases?.[0];
    };
  });
</script>

<LibLoader
  on:loaded={is3DLoaded}
  url={scripts[type][0]}
/>
<LibLoader
  on:loaded={isVantaLoaded}
  url={scripts[type][1]}
/>