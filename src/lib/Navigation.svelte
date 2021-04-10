<svelte:head>
  <script src="https://kit.fontawesome.com/e95339ae95.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
  import { getContext } from 'svelte';
  import IconButton from "$lib/IconButton.svelte";
  import Menu from "$lib/Menu.svelte";
  import MenuItem from "$lib/MenuItem.svelte";

  const context = getContext("contrast");
  const handleContrast = () => {
    context.updateContrast();
  };
</script>

<nav>
  <div>
    <a href="/">FUSION</a>
  </div>
  <div>
    <Menu href="/about" name="About">
      <MenuItem href="/about/leadership">Leadership</MenuItem>
    </Menu>
    <Menu href="/services" name="Services">
      <MenuItem href="/services/design">Design</MenuItem>
      <MenuItem href="/services/develop">Develop</MenuItem>
    </Menu>
    <Menu href="/insights" name="Insights">
      <MenuItem href="/insights/read">Articles</MenuItem>
      <MenuItem href="/insights/watch">Videos</MenuItem>
    </Menu>
  </div>
  <div class="actions">
    <IconButton
      on:click={handleContrast}
      icon="palette"
      lib="light"
      size="md"
    />
    <IconButton
      href="/login"
      icon="sign-in"
      lib="light"
      size="md"
    />
  </div>
</nav>

<style>
  nav {
    align-items: center;
    background-color: var(--color-primary-main);
    box-shadow: var(--shadows-1);
    box-sizing: border-box;
    display: flex;
    height: var(--spacing-8);
    justify-content: space-between;
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1100;
  }

  div {
    color: var(--color-primary-contrast-text);
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  .actions {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }

  .actions :global(:not(:first-of-type)) {
    margin-left: var(--spacing-1);
  }
</style>