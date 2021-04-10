<script context="module">
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';
</script>

<script>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  $: contrast = null;

  const updateContrast = () => {
    const element = document?.querySelector("body");
    element.classList.toggle(contrast);

    contrast = contrast === "light" ? "dark" : "light";
    element.classList.toggle(contrast);
  };

  onMount(() => {
    updateContrast();
  });

  setContext("contrast", { updateContrast, mode: contrast });
</script>

<Navigation />
<main>
  <div class="gutter" />
  <slot />
</main>

<style>
	main {
		height: 100%;
		margin: 0 auto;
		min-height: calc(100vh - var(--spacing-8));
		text-align: center;
	}

	.gutter {
		height: var(--spacing-8);;
	}
</style>
