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
    font-size: 14px;
    height: 100%;
    text-decoration: none;
  }

  li {
    background-color: transparent;
    border-left: 2px solid transparent;
    cursor: pointer;
    margin: 3px 0;
    padding: 4px var(--spacing-2);
    transition: all .3s ease-in-out;
  }

  li:hover {
    background-color: var(--color-background-default);
    border-left: 2px solid var(--color-primary-lighter);
  }
</style>