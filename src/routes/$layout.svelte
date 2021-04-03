<script>
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';
</script>

<Navigation />

<main>
	<div />
	<slot />
</main>


<style>
	main {
		height: 100%;
		margin: 0 auto;
		max-width: 100vw;
		min-height: calc(100vh - 48px);
		overflow-x: hidden;
		text-align: center;
		width: 100%;
	}

	div {
		height: 48px;
	}
</style>
