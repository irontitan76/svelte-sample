<script>
  export let color = 'default';
  export let icon;
  export let elevation = null;
  export let href = null;
  export let size = 'md';
  export let lib = 'regular';

  import Icon from '$lib/Icon.svelte';

  const className = `icon-button ${color} ${elevation ? "elevated": null}`;
</script>

<a class={className} href={href} on:click {...$$restProps}>
  <Icon icon={icon} lib={lib} size={size} />
</a>

<style>
  .icon-button {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: inherit;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    text-decoration: none;
    transition: all .25s ease-in-out;
    width: 48px;
  }

  .default {
    background-color: var(--color-background-default);
    color: var(--color-primary-text);
  }

  .default:hover {
    background-color: var(--color-background-paper);
    color: var(--color-primary-text);
  }

  .elevation {
    box-shadow: var(--shadows-1);
  }

  .primary {
    background-color: var(--color-primary-main);
  }

  .primary:hover {
    background-color: var(--color-primary-light);
  }

  .secondary {
    background-color: var(--color-secondary-main);
  }

  .secondary:hover {
    background-color: var(--color-secondary-light);
  }
</style>