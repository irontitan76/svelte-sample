<script>
  export let color = "default";
  export let href;
</script>

<a class={`${color} ${$$restProps.class}`} href={href}>
  <slot />
</a>

<style>
  a {
    background-color: var(--color-background-paper);
    border: none;
    border-radius: 4px;
    box-shadow: var(--shadows-1);
    color: inherit;
    cursor: pointer;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    outline: none;
    padding: 12px 16px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color .5s ease-in-out, color .5s ease-out;
    width: 250px;
  }

  .default {
    background-color: var(--color-background-paper);
    color: var(--color-primary-text);
  }

  .default:hover {
    background-color: var(--color-background-accent);
  }

  .primary {
    background-color: var(--color-primary-main);
    color: var(--color-primary-contrast-text);
  }

  .primary:hover {
    background-color: var(--color-primary-dark);
  }
</style>