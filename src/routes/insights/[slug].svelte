<svelte:head>
	<title>Fusion | Insights</title>
</svelte:head>

<script context="module">
	export async function load({ page, fetch, session, context }) {
    return { props: { slug: page.params.slug } };
	};
</script>

<script>
  export let slug;
</script>

<div>{slug}</div>