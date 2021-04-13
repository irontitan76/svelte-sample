<script>
  import { setContext } from 'svelte'
  import { slide } from "svelte/transition";

  export let href;
  export let name;

  $: offsetX = 0;
  $: open = false;
  
  const handleOpen = (event) => {
    offsetX = event.srcElement.offsetLeft;
    open = true;
  };

  const handleClose = () => {
    open = false;
  };

  setContext("handleClick", handleClose);
</script>


<div class="container" on:mouseleave={handleClose}>
  <a class="link" href={href} on:mouseover={handleOpen}>
    {name}
  </a>
  {#if open}
    <ul
      class="menu"
      transition:slide
      style={`left: ${offsetX}px;`}
    >
      <slot />
    </ul>
  {/if}
</div>

<style>
  .container {
    align-items: center;
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    display: inline-flex;
    font-size: 14px;
    height: 64px;
    letter-spacing: 2px;
    margin-right: var(--spacing-3);
    transition: all .3s ease-in-out;
  }

  .container:hover {
    border-bottom: 2px solid var(--color-primary-lighter);
  }

  .container:last-of-type {
    margin-right: 0;
  }

  .link {
    align-items: center;
    color: inherit;
    display: flex;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
  }

  .menu {
    background-color: var(--color-background-paper);
    box-shadow: var(--shadows-1);
    color: var(--color-primary-text);
    font-family: var(--font-family-text);
    font-size: 16px;
    list-style-type: none;
    margin: 0;
    min-width: 250px;
    padding: 4px 0;
    position: absolute;
    top: 64px;
    z-index: 1200;
  }
</style>