<svelte:head>
  <script src="https://kit.fontawesome.com/e95339ae95.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
  import { getContext } from 'svelte';
  import IconButton from "$lib/IconButton.svelte";
  import Menu from "$lib/Menu.svelte";
  import MenuItem from "$lib/MenuItem.svelte";

  export let menu;
  export let prefix;
  export let title;
  export let suffix;

  const contrast = getContext("contrast");
  const handleContrast = () => {
    contrast.update(prev => prev === "light" ? "dark" : "light");
  };

  export const load = async ({ page }) => {
    return { props: { path: page.path }};
  };
</script>

<nav>
  <div>
    <div class="logo">
      <a href="/">
        {#if prefix}
          <span>{prefix}</span>
        {/if}

        {#if title}
          {title}
        {/if}

        {#if suffix}
          <span>{suffix}</span>
        {/if}
      </a>
    </div>
    <div class="menu">
      {#each menu as item}
        <Menu href={item.href} name={item.name}>
          {#each item.children as child}
            <MenuItem href={child.href}>{child.name}</MenuItem>
          {/each}
        </Menu>
      {/each}
    </div>
    <div class="actions">
      <IconButton
        on:click={handleContrast}
        color="primary"
        icon="palette"
        lib="light"
        size="md"
      />
      <IconButton
      color="primary"
        href="/login"
        icon="sign-in"
        lib="light"
        size="md"
      />
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: var(--color-primary-main);
    box-shadow: var(--shadows-1);
    box-sizing: border-box;
    height: var(--spacing-8);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1100;
  }

  nav > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--view-width);
  }

  div {
    color: var(--color-primary-contrast-text);
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  .actions {
    align-items: center;
    display: flex;
    flex-basis: 25%;
    justify-content: flex-end;
  }

  .actions :global(:not(:first-of-type)) {
    margin-left: var(--spacing-1);
  }

  .logo {
    display: flex;
    flex-basis: 25%;
  }

  .logo a {
    color: inherit;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
  }

  .logo span {
    color: var(--color-primary-lighter);
    font-size: 14px;
    font-weight: 600;
  }

  .menu {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
  }
</style>