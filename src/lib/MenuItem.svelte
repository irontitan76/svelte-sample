<script>
  import { getContext } from 'svelte'

  export let href;

  const onClick = getContext("handleClick");
</script>

<li on:click={onClick}>
  <a href={href}>
    <slot />
  </a>
</li>

<style>
  a {
    color: inherit;
    height: 100%;
    text-decoration: none;
  }

  li {
    background-color: var(--color-background-paper);
    border-left: 2px solid transparent;
    cursor: pointer;
    padding: var(--spacing-1_5) var(--spacing-2);
    transition: all .3s ease-in-out;
  }

  li:hover {
    background-color: var(--color-background-default);
    border-left: 2px solid var(--color-primary-lighter);
  }
</style>