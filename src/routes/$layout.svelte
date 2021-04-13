<script context="module">
  import Footer from '$lib/Footer.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import '../app.css';

	export async function load({ page, fetch, session, context }) {
    return { props: { path: page.path } };
	};
</script>


<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { browser } from '$app/env';

  export let path;

  let contrast = writable("light");

  const updateContrast = (updatedContrast) => {
    if (browser) {
      const element = document?.querySelector("body");
      element.classList.remove(updatedContrast === "light" ? "dark" : "light");
      element.classList.add(updatedContrast);
      $contrast = updatedContrast;
    }
  };

  contrast.subscribe(updateContrast);
  setContext("contrast", contrast);

  const routes = [
    {
      children: [
        { href: "/about/issues", name: "The Issues" },
        { href: "/about/leadership", name: "Leadership" },
      ],
      href: "/about",
      name: "About",
    },
    {
      children: [
        { href: "/insights/read", name: "Articles" },
        { href: "/insights/watch", name: "Videos" },
      ],
      href: "/insights",
      name: "Insights",
    },
  ];
</script>

<Navigation
  menu={routes}
  prefix="THE"
  suffix="PARTY"
  title="FREEDOM"
/>
<main>
  <div class="gutter" />
  <slot />
</main>

{#if browser && !path.includes("/login")}
  <Footer />
{/if}

<style>
	main {
		height: 100%;
		margin: 0 auto;
		min-height: calc(100vh - var(--spacing-8));
		text-align: center;
	}

  main :global(.constrain) {
    margin: 0 auto;
    max-width: var(--view-width);
  }

	.gutter {
		height: var(--spacing-8);;
	}
</style>
