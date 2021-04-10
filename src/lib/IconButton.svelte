<script>
  export let icon;
  export let href = null;
  export let size = 'md';
  export let lib = 'regular';

  import Icon from '$lib/Icon.svelte';
</script>

<a class="icon-button" href={href} on:click>
  <Icon icon={icon} lib={lib} size={size} />
</a>

<style>
  .icon-button {
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    text-decoration: none;
    transition: all .25s ease-in-out;
    width: 48px;
  }

  .icon-button:hover {
    background-color: var(--color-primary-light);
  }
</style>